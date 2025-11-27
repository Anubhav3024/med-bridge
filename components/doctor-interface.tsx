"use client"

import type { User } from "@/app/page"
import { useState } from "react"
import { DoctorHeader } from "@/components/doctor/doctor-header"
import { DoctorSidebar } from "@/components/doctor/doctor-sidebar"
import { DoctorProfile } from "@/components/doctor/doctor-profile"
import { DoctorAppointments } from "@/components/doctor/doctor-appointments"
import { DoctorSettings } from "@/components/doctor/doctor-settings"

type DoctorNav = "profile" | "appointments" | "settings"

interface DoctorInterfaceProps {
  user: User
  onLogout: () => void
}

export function DoctorInterface({ user, onLogout }: DoctorInterfaceProps) {
  const [activeNav, setActiveNav] = useState<DoctorNav>("profile")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex relative">
        <DoctorSidebar
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
          {activeNav === "profile" && (
            <DoctorProfile user={user} onViewAppointments={() => setActiveNav("appointments")} />
          )}
          {activeNav === "appointments" && <DoctorAppointments />}
          {activeNav === "settings" && <DoctorSettings />}
        </main>
      </div>
    </div>
  )
}
