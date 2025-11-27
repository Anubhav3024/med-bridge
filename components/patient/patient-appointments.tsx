"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "Nov 28, 2025",
    time: "10:00 AM",
    location: "City Hospital, Room 204",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "Dec 2, 2025",
    time: "2:30 PM",
    location: "Medical Center, Room 112",
    status: "pending",
  },
  {
    id: 3,
    doctor: "Dr. Emily Brown",
    specialty: "General Physician",
    date: "Dec 5, 2025",
    time: "11:00 AM",
    location: "Health Clinic, Room 305",
    status: "confirmed",
  },
]

const pastAppointments = [
  {
    id: 4,
    doctor: "Dr. James Wilson",
    specialty: "Orthopedic",
    date: "Nov 15, 2025",
    time: "3:00 PM",
    status: "completed",
  },
  {
    id: 5,
    doctor: "Dr. Lisa Anderson",
    specialty: "Pediatrician",
    date: "Nov 10, 2025",
    time: "9:30 AM",
    status: "completed",
  },
]

export function PatientAppointments() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">My Appointments</h1>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/50"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{apt.doctor}</h3>
                  <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {apt.date} at {apt.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {apt.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                <Badge variant={apt.status === "confirmed" ? "default" : "secondary"}>{apt.status}</Badge>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Past Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Past Appointments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pastAppointments.map((apt) => (
            <div key={apt.id} className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/30">
              <div>
                <h3 className="font-semibold">{apt.doctor}</h3>
                <p className="text-sm text-muted-foreground">
                  {apt.specialty} - {apt.date} at {apt.time}
                </p>
              </div>
              <Badge variant="outline">{apt.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
