"use client"

import { useState } from "react"
import { Check, X, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const initialAppointments = [
  {
    id: "APT001",
    patient: "John Smith",
    time: "9:00 AM",
    date: "Nov 28",
    contact: "+1 234-567-8901",
    status: "pending",
  },
  {
    id: "APT002",
    patient: "Emma Johnson",
    time: "10:30 AM",
    date: "Nov 28",
    contact: "+1 234-567-8902",
    status: "pending",
  },
  {
    id: "APT003",
    patient: "Michael Brown",
    time: "2:00 PM",
    date: "Nov 28",
    contact: "+1 234-567-8903",
    status: "accepted",
  },
  {
    id: "APT004",
    patient: "Sarah Davis",
    time: "3:30 PM",
    date: "Nov 29",
    contact: "+1 234-567-8904",
    status: "pending",
  },
  {
    id: "APT005",
    patient: "Robert Wilson",
    time: "11:00 AM",
    date: "Nov 29",
    contact: "+1 234-567-8905",
    status: "pending",
  },
]

const upcomingRequests = [
  { week: "Dec 2-8", requests: 12 },
  { week: "Dec 9-15", requests: 8 },
  { week: "Dec 16-22", requests: 15 },
]

export function DoctorAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments)

  const handleAction = (id: string, action: "accept" | "cancel") => {
    setAppointments(
      appointments.map((apt) =>
        apt.id === id ? { ...apt, status: action === "accept" ? "accepted" : "cancelled" } : apt,
      ),
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
      <h1 className="text-xl md:text-2xl font-bold">Scheduled Appointments</h1>

      {/* Appointments - Card view on mobile, table on desktop */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            Current Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Appointment ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((apt) => (
                  <TableRow key={apt.id}>
                    <TableCell className="font-medium">{apt.id}</TableCell>
                    <TableCell>{apt.patient}</TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell>{apt.time}</TableCell>
                    <TableCell>{apt.contact}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          apt.status === "accepted"
                            ? "default"
                            : apt.status === "cancelled"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {apt.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {apt.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handleAction(apt.id, "accept")}>
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleAction(apt.id, "cancel")}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="md:hidden space-y-3">
            {appointments.map((apt) => (
              <Card key={apt.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-sm">{apt.patient}</p>
                      <p className="text-xs text-muted-foreground">{apt.id}</p>
                    </div>
                    <Badge
                      variant={
                        apt.status === "accepted" ? "default" : apt.status === "cancelled" ? "destructive" : "secondary"
                      }
                      className="text-xs"
                    >
                      {apt.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <div>
                      <span className="font-medium text-foreground">Date:</span> {apt.date}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Time:</span> {apt.time}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-foreground">Contact:</span> {apt.contact}
                    </div>
                  </div>
                  {apt.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 text-xs" onClick={() => handleAction(apt.id, "accept")}>
                        <Check className="w-3.5 h-3.5 mr-1" />
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1 text-xs"
                        onClick={() => handleAction(apt.id, "cancel")}
                      >
                        <X className="w-3.5 h-3.5 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Requests - Responsive grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Users className="w-4 h-4 md:w-5 md:h-5" />
            Upcoming Week Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {upcomingRequests.map((item) => (
              <div key={item.week} className="p-3 md:p-4 rounded-lg bg-muted text-center">
                <p className="text-xs md:text-sm text-muted-foreground">{item.week}</p>
                <p className="text-2xl md:text-3xl font-bold text-primary mt-1">{item.requests}</p>
                <p className="text-xs md:text-sm text-muted-foreground">requests</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
