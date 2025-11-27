"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { RegistrationModal } from "@/components/registration-modal"
import { DoctorInterface } from "@/components/doctor-interface"
import { PatientInterface } from "@/components/patient-interface"

export type UserType = "doctor" | "patient" | null
export type ViewState = "landing" | "doctor" | "patient"

export interface User {
  username: string
  email: string
  type: UserType
}

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [userType, setUserType] = useState<UserType>(null)
  const [currentView, setCurrentView] = useState<ViewState>("landing")
  const [user, setUser] = useState<User | null>(null)

  const handleRoleSelect = (type: UserType) => {
    setUserType(type)
    setShowModal(true)
  }

  const handleLogin = (userData: { username: string; email: string }) => {
    setUser({ ...userData, type: userType })
    setShowModal(false)
    setCurrentView(userType === "doctor" ? "doctor" : "patient")
  }

  const handleLogout = () => {
    setUser(null)
    setUserType(null)
    setCurrentView("landing")
  }

  if (currentView === "doctor" && user) {
    return <DoctorInterface user={user} onLogout={handleLogout} />
  }

  if (currentView === "patient" && user) {
    return <PatientInterface user={user} onLogout={handleLogout} />
  }

  return (
    <>
      <LandingPage onRoleSelect={handleRoleSelect} isBlurred={showModal} />
      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        userType={userType}
        onLogin={handleLogin}
      />
    </>
  )
}
