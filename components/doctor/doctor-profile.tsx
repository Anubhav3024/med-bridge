"use client"

import type { User } from "@/app/page"
import { useState } from "react"
import { ArrowRight, Mail, Briefcase, MapPin, Clock, DollarSign, Save, Pencil, X, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DoctorProfileProps {
  user: User
  onViewAppointments: () => void
}

export function DoctorProfile({ user, onViewAppointments }: DoctorProfileProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [profileData, setProfileData] = useState({
    name: user.username,
    specialization: "Cardiologist",
    experience: "15",
    description:
      "Experienced cardiologist with over 15 years of practice. Specialized in interventional cardiology and heart failure management. Committed to providing compassionate care to all patients.",
    profileImage: "/professional-doctor-portrait.png",
  })

  const [editData, setEditData] = useState(profileData)

  const [schedule, setSchedule] = useState({
    location: "City Hospital, Building A",
    timing: "9:00 AM - 5:00 PM",
    maxAppointments: "20",
    fee: "50",
  })

  const specializations = [
    "Cardiologist",
    "Dermatologist",
    "General Physician",
    "Orthopedic",
    "Pediatrician",
    "Neurologist",
    "Psychiatrist",
    "Gynecologist",
    "ENT Specialist",
    "Ophthalmologist",
  ]

  const handleEditSave = () => {
    setProfileData(editData)
    setIsEditModalOpen(false)
  }

  const handleEditCancel = () => {
    setEditData(profileData)
    setIsEditModalOpen(false)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
      {/* Hero Section - Responsive padding and text sizes */}
      <Card className="bg-primary text-primary-foreground overflow-hidden">
        <CardContent className="p-4 md:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">
            Welcome back, Dr. {profileData.name}!
          </h1>
          <p className="text-primary-foreground/80 mb-4 md:mb-6 max-w-xl text-sm md:text-base">
            Manage your appointments, update your schedule, and connect with patients seamlessly through your
            personalized dashboard.
          </p>
          <Button variant="secondary" onClick={onViewAppointments} className="text-sm md:text-base">
            View Scheduled Appointments
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CardTitle className="text-lg md:text-xl">Doctor Information</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)} className="w-full sm:w-auto">
            <Pencil className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            {/* Profile Image - Centered on mobile */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={profileData.profileImage || "/placeholder.svg"}
                  alt="Doctor"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Info - Center text on mobile */}
            <div className="flex-1 space-y-3 md:space-y-4 text-center sm:text-left">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Dr. {profileData.name}</h2>
                <p className="text-primary font-medium text-sm md:text-base">{profileData.specialization}</p>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">{profileData.description}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{user.email}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                  <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {profileData.experience}+ Years
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Settings - Responsive grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Working Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 inline mr-1.5 md:mr-2" />
                Location
              </Label>
              <Input
                id="location"
                value={schedule.location}
                onChange={(e) => setSchedule({ ...schedule, location: e.target.value })}
                className="text-sm md:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timing" className="text-sm">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 inline mr-1.5 md:mr-2" />
                Working Hours
              </Label>
              <Input
                id="timing"
                value={schedule.timing}
                onChange={(e) => setSchedule({ ...schedule, timing: e.target.value })}
                className="text-sm md:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max" className="text-sm">
                Max Appointments/Day
              </Label>
              <Input
                id="max"
                type="number"
                value={schedule.maxAppointments}
                onChange={(e) => setSchedule({ ...schedule, maxAppointments: e.target.value })}
                className="text-sm md:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fee" className="text-sm">
                <DollarSign className="w-3.5 h-3.5 md:w-4 md:h-4 inline mr-1.5 md:mr-2" />
                Consultation Fee
              </Label>
              <Input
                id="fee"
                type="number"
                value={schedule.fee}
                onChange={(e) => setSchedule({ ...schedule, fee: e.target.value })}
                className="text-sm md:text-base"
              />
            </div>
          </div>
          <Button className="mt-4 md:mt-6 w-full sm:w-auto">
            <Save className="w-4 h-4 mr-2" />
            Save Schedule
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle>Edit Profile Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted overflow-hidden">
                  <img
                    src={editData.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </label>
                <input
                  type="file"
                  id="profile-image"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      const url = URL.createObjectURL(file)
                      setEditData({ ...editData, profileImage: url })
                    }
                  }}
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Click camera icon to change photo</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-sm">
                Full Name
              </Label>
              <Input
                id="edit-name"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-specialization" className="text-sm">
                Specialization
              </Label>
              <Select
                value={editData.specialization}
                onValueChange={(value) => setEditData({ ...editData, specialization: value })}
              >
                <SelectTrigger id="edit-specialization">
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

            <div className="space-y-2">
              <Label htmlFor="edit-experience" className="text-sm">
                Years of Experience
              </Label>
              <Input
                id="edit-experience"
                type="number"
                value={editData.experience}
                onChange={(e) => setEditData({ ...editData, experience: e.target.value })}
                placeholder="Enter years of experience"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-description" className="text-sm">
                About / Description
              </Label>
              <Textarea
                id="edit-description"
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                placeholder="Write about yourself..."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleEditCancel} className="w-full sm:w-auto bg-transparent">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleEditSave} className="w-full sm:w-auto">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
