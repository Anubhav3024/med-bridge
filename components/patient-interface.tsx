"use client"

import type { User } from "@/app/page"
import { useState } from "react"
import { PatientHeader } from "@/components/patient/patient-header"
import { PatientSidebar } from "@/components/patient/patient-sidebar"
import { PatientHome } from "@/components/patient/patient-home"
import { PatientDoctors } from "@/components/patient/patient-doctors"
import { PatientAppointments } from "@/components/patient/patient-appointments"
import { PatientSettings } from "@/components/patient/patient-settings"

type PatientNav = "home" | "doctors" | "appointments" | "settings"

interface PatientInterfaceProps {
  user: User
  onLogout: () => void
}

export function PatientInterface({ user, onLogout }: PatientInterfaceProps) {
  const [activeNav, setActiveNav] = useState<PatientNav>("home")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <PatientHeader onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex relative">
        <PatientSidebar
          user={user}
          activeNav={activeNav}
          onNavChange={(nav) => {
            setActiveNav(nav)
            setIsSidebarOpen(false) // Close sidebar on mobile after navigation
          }}
          onLogout={onLogout}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1 p-4 md:p-6 lg:p-8 w-full">
          {activeNav === "home" && <PatientHome user={user} onFindDoctor={() => setActiveNav("doctors")} />}
          {activeNav === "doctors" && <PatientDoctors />}
          {activeNav === "appointments" && <PatientAppointments />}
          {activeNav === "settings" && <PatientSettings />}
        </main>
      </div>
    </div>
  )
}
