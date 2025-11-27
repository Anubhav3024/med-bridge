"use client"

import type { User } from "@/app/page"
import { useState } from "react"
import { ArrowRight, Calendar, Clock, UserIcon, Eye, Pill, TestTube, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PatientHomeProps {
  user: User
  onFindDoctor: () => void
}

const upcomingAppointments = [
  { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiologist", date: "Nov 28, 2025", time: "10:00 AM" },
  { id: 2, doctor: "Dr. Michael Chen", specialty: "Dermatologist", date: "Dec 2, 2025", time: "2:30 PM" },
  { id: 3, doctor: "Dr. Emily Brown", specialty: "General Physician", date: "Dec 5, 2025", time: "11:00 AM" },
]

const pastAppointments = [
  {
    id: 101,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "Nov 15, 2025",
    prescriptions: [
      { name: "Aspirin 75mg", dosage: "Once daily", duration: "30 days" },
      { name: "Atorvastatin 10mg", dosage: "Once at night", duration: "30 days" },
    ],
    tests: [
      { name: "ECG", status: "Completed", result: "Normal sinus rhythm" },
      { name: "Lipid Profile", status: "Completed", result: "LDL: 110 mg/dL" },
    ],
    reports: [
      { name: "Cardiac Assessment Report", date: "Nov 15, 2025" },
      { name: "Treatment Plan Summary", date: "Nov 15, 2025" },
    ],
  },
  {
    id: 102,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "Oct 28, 2025",
    prescriptions: [
      { name: "Clindamycin Gel", dosage: "Apply twice daily", duration: "14 days" },
      { name: "Cetirizine 10mg", dosage: "Once daily", duration: "7 days" },
    ],
    tests: [{ name: "Skin Patch Test", status: "Completed", result: "No allergies detected" }],
    reports: [{ name: "Dermatology Consultation Notes", date: "Oct 28, 2025" }],
  },
  {
    id: 103,
    doctor: "Dr. James Wilson",
    specialty: "Orthopedic",
    date: "Oct 10, 2025",
    prescriptions: [
      { name: "Ibuprofen 400mg", dosage: "Twice daily after meals", duration: "10 days" },
      { name: "Calcium + Vitamin D3", dosage: "Once daily", duration: "60 days" },
    ],
    tests: [
      { name: "X-Ray (Left Knee)", status: "Completed", result: "Mild osteoarthritis" },
      { name: "MRI (Left Knee)", status: "Completed", result: "Minor cartilage wear" },
    ],
    reports: [
      { name: "Orthopedic Assessment Report", date: "Oct 10, 2025" },
      { name: "Physical Therapy Recommendation", date: "Oct 10, 2025" },
    ],
  },
]

type PastAppointment = (typeof pastAppointments)[0]

export function PatientHome({ user, onFindDoctor }: PatientHomeProps) {
  const [selectedAppointment, setSelectedAppointment] = useState<PastAppointment | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  const handleViewDetails = (appointment: PastAppointment) => {
    setSelectedAppointment(appointment)
    setIsDetailModalOpen(true)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
      {/* Hero Section - Responsive padding and text */}
      <Card className="bg-primary text-primary-foreground overflow-hidden">
        <CardContent className="p-4 md:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">Welcome back, {user.username}!</h1>
          <p className="text-primary-foreground/80 mb-4 md:mb-6 max-w-xl text-sm md:text-base">
            Your health is our priority. Browse our network of qualified doctors, schedule appointments, and manage your
            healthcare journey with ease.
          </p>
          <Button variant="secondary" onClick={onFindDoctor} className="text-sm md:text-base">
            Find a Doctor
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Quick Stats - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">{upcomingAppointments.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Upcoming</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">{pastAppointments.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Past Visits</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">5</p>
              <p className="text-xs md:text-sm text-muted-foreground">My Doctors</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Bookings - Card view on mobile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingAppointments.map((apt) => (
                  <TableRow key={apt.id}>
                    <TableCell className="font-medium">{apt.id}</TableCell>
                    <TableCell>{apt.doctor}</TableCell>
                    <TableCell>{apt.specialty}</TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell>{apt.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {upcomingAppointments.map((apt) => (
              <Card key={apt.id}>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-sm">{apt.doctor}</p>
                      <p className="text-xs text-primary">{apt.specialty}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      #{apt.id}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{apt.date}</span>
                    <span>{apt.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Appointments - Card view on mobile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Past Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pastAppointments.map((apt) => (
                  <TableRow key={apt.id}>
                    <TableCell className="font-medium">{apt.doctor}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{apt.specialty}</Badge>
                    </TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => handleViewDetails(apt)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {pastAppointments.map((apt) => (
              <Card key={apt.id}>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-sm">{apt.doctor}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {apt.specialty}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{apt.date}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 text-xs bg-transparent"
                    onClick={() => handleViewDetails(apt)}
                  >
                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base md:text-lg">Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4">
              {/* Appointment Info */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">{selectedAppointment.doctor}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {selectedAppointment.specialty} | {selectedAppointment.date}
                  </p>
                </div>
              </div>

              <Tabs defaultValue="prescriptions" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="prescriptions" className="gap-1 md:gap-2 text-xs md:text-sm px-1 md:px-3">
                    <Pill className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Medicines</span>
                    <span className="sm:hidden">Meds</span>
                  </TabsTrigger>
                  <TabsTrigger value="tests" className="gap-1 md:gap-2 text-xs md:text-sm px-1 md:px-3">
                    <TestTube className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Tests
                  </TabsTrigger>
                  <TabsTrigger value="reports" className="gap-1 md:gap-2 text-xs md:text-sm px-1 md:px-3">
                    <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Reports
                  </TabsTrigger>
                </TabsList>

                {/* Prescriptions Tab */}
                <TabsContent value="prescriptions" className="mt-4 space-y-3">
                  {selectedAppointment.prescriptions.map((med, index) => (
                    <Card key={index}>
                      <CardContent className="p-3 md:p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <Pill className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm md:text-base">{med.name}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">{med.dosage}</p>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              Duration: {med.duration}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Tests Tab */}
                <TabsContent value="tests" className="mt-4 space-y-3">
                  {selectedAppointment.tests.map((test, index) => (
                    <Card key={index}>
                      <CardContent className="p-3 md:p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <TestTube className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="font-medium text-sm md:text-base">{test.name}</h4>
                              <Badge
                                variant={test.status === "Completed" ? "default" : "secondary"}
                                className="text-xs w-fit"
                              >
                                {test.status}
                              </Badge>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">Result: {test.result}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Reports Tab */}
                <TabsContent value="reports" className="mt-4 space-y-3">
                  {selectedAppointment.reports.map((report, index) => (
                    <Card key={index}>
                      <CardContent className="p-3 md:p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                              <FileText className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm md:text-base">{report.name}</h4>
                              <p className="text-xs md:text-sm text-muted-foreground">{report.date}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs w-full sm:w-auto bg-transparent">
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
