"use client"

import { useState } from "react"
import { Search, Star, MapPin, Clock, DollarSign, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: "City Hospital",
    fee: 75,
    available: true,
    timing: "Morning",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.8,
    experience: "12 years",
    location: "Medical Center",
    fee: 60,
    available: true,
    timing: "Afternoon",
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "General Physician",
    rating: 4.7,
    experience: "10 years",
    location: "Health Clinic",
    fee: 45,
    available: false,
    timing: "Evening",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic",
    rating: 4.9,
    experience: "20 years",
    location: "City Hospital",
    fee: 90,
    available: true,
    timing: "Morning",
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialty: "Pediatrician",
    rating: 4.8,
    experience: "8 years",
    location: "Children's Care",
    fee: 55,
    available: true,
    timing: "Afternoon",
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "Neurologist",
    rating: 4.6,
    experience: "18 years",
    location: "Medical Center",
    fee: 85,
    available: true,
    timing: "Morning",
  },
  {
    id: 7,
    name: "Dr. Amanda White",
    specialty: "Cardiologist",
    rating: 4.7,
    experience: "14 years",
    location: "Health Clinic",
    fee: 70,
    available: true,
    timing: "Evening",
  },
]

const specializations = [
  "All Specializations",
  "Cardiologist",
  "Dermatologist",
  "General Physician",
  "Orthopedic",
  "Pediatrician",
  "Neurologist",
]

const locations = ["All Locations", "City Hospital", "Medical Center", "Health Clinic", "Children's Care"]

const timings = ["Morning", "Afternoon", "Evening"]

export function PatientDoctors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedTimings, setSelectedTimings] = useState<string[]>([])
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSpecialization =
      selectedSpecialization === "All Specializations" || doc.specialty === selectedSpecialization

    const matchesLocation = selectedLocation === "All Locations" || doc.location === selectedLocation

    const matchesTiming = selectedTimings.length === 0 || selectedTimings.includes(doc.timing)

    const matchesAvailability = !showAvailableOnly || doc.available

    return matchesSearch && matchesSpecialization && matchesLocation && matchesTiming && matchesAvailability
  })

  const clearFilters = () => {
    setSelectedSpecialization("All Specializations")
    setSelectedLocation("All Locations")
    setSelectedTimings([])
    setShowAvailableOnly(false)
  }

  const activeFiltersCount = [
    selectedSpecialization !== "All Specializations",
    selectedLocation !== "All Locations",
    selectedTimings.length > 0,
    showAvailableOnly,
  ].filter(Boolean).length

  const handleTimingToggle = (timing: string) => {
    setSelectedTimings((prev) => (prev.includes(timing) ? prev.filter((t) => t !== timing) : [...prev, timing]))
  }

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">Find a Doctor</h1>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 md:pl-10 text-sm md:text-base h-9 md:h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative bg-transparent h-9 md:h-10 px-3 md:px-4">
                  <Filter className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Filters</span>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Doctors</SheetTitle>
                </SheetHeader>
                <div className="space-y-5 md:space-y-6 py-4 md:py-6">
                  {/* Specialization Filter */}
                  <div className="space-y-2">
                    <Label className="text-sm">Specialization</Label>
                    <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        {specializations.map((spec) => (
                          <SelectItem key={spec} value={spec}>
                            {spec}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location Filter */}
                  <div className="space-y-2">
                    <Label className="text-sm">Location</Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Availability Timing Filter */}
                  <div className="space-y-3">
                    <Label className="text-sm">Availability Timing</Label>
                    <div className="space-y-2">
                      {timings.map((timing) => (
                        <div key={timing} className="flex items-center space-x-2">
                          <Checkbox
                            id={timing}
                            checked={selectedTimings.includes(timing)}
                            onCheckedChange={() => handleTimingToggle(timing)}
                          />
                          <label
                            htmlFor={timing}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {timing}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Only Filter */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="available"
                      checked={showAvailableOnly}
                      onCheckedChange={(checked) => setShowAvailableOnly(checked as boolean)}
                    />
                    <label
                      htmlFor="available"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Show available doctors only
                    </label>
                  </div>

                  {/* Clear Filters */}
                  <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-2" />
                    Clear All Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters Display - Responsive wrap */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedSpecialization !== "All Specializations" && (
              <Badge variant="secondary" className="gap-1 text-xs">
                {selectedSpecialization}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setSelectedSpecialization("All Specializations")}
                />
              </Badge>
            )}
            {selectedLocation !== "All Locations" && (
              <Badge variant="secondary" className="gap-1 text-xs">
                {selectedLocation}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedLocation("All Locations")} />
              </Badge>
            )}
            {selectedTimings.map((timing) => (
              <Badge key={timing} variant="secondary" className="gap-1 text-xs">
                {timing}
                <X className="w-3 h-3 cursor-pointer" onClick={() => handleTimingToggle(timing)} />
              </Badge>
            ))}
            {showAvailableOnly && (
              <Badge variant="secondary" className="gap-1 text-xs">
                Available Only
                <X className="w-3 h-3 cursor-pointer" onClick={() => setShowAvailableOnly(false)} />
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs md:text-sm text-muted-foreground">
        Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex gap-3 md:gap-4 p-3 md:p-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={`/professional-team.png?height=80&width=80&query=professional ${doctor.specialty} doctor portrait`}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold truncate text-sm md:text-base">{doctor.name}</h3>
                      <p className="text-xs md:text-sm text-primary">{doctor.specialty}</p>
                    </div>
                    <Badge variant={doctor.available ? "default" : "secondary"} className="text-xs flex-shrink-0">
                      {doctor.available ? "Available" : "Busy"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 md:mt-2">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs md:text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs md:text-sm text-muted-foreground ml-2">{doctor.timing}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-1 mt-1.5 md:mt-2 text-xs md:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {doctor.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {doctor.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 md:w-3.5 md:h-3.5" />${doctor.fee}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-4 pb-3 md:pb-4">
                <Button className="w-full text-sm" disabled={!doctor.available}>
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <Card>
          <CardContent className="p-6 md:p-8 text-center">
            <p className="text-muted-foreground text-sm md:text-base">No doctors found matching your criteria.</p>
            <Button variant="link" onClick={clearFilters} className="text-sm">
              Clear all filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
