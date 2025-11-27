"use client"

import type React from "react"

import type { UserType } from "@/app/page"
import { Activity, Heart, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onRoleSelect: (type: UserType) => void
  isBlurred: boolean
}

export function LandingPage({ onRoleSelect, isBlurred }: LandingPageProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        isBlurred ? "blur-sm pointer-events-none" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col items-center text-center">
        {/* Logo Section - Responsive sizing */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center">
            <Activity className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-primary-foreground" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            med-bridge
          </h1>
        </div>

        {/* Description - Responsive text size */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed text-pretty px-2">
          Your trusted platform for seamless healthcare management. Connect with doctors, schedule appointments, and
          take control of your health journey - all in one place.
        </p>

        {/* Role Selection Buttons - Full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 w-full sm:w-auto px-4 sm:px-0">
          <Button
            size="lg"
            className="px-6 sm:px-8 md:px-10 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            onClick={() => onRoleSelect("doctor")}
          >
            <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />I am a Doctor
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 sm:px-8 md:px-10 py-5 sm:py-6 text-base sm:text-lg border-2 bg-transparent w-full sm:w-auto"
            onClick={() => onRoleSelect("patient")}
          >
            <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />I am a Patient
          </Button>
        </div>

        {/* Features Grid - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full px-2 sm:px-0">
          <FeatureCard
            icon={<Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
            title="Easy Connections"
            description="Connect with healthcare professionals instantly"
          />
          <FeatureCard
            icon={<Activity className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
            title="Track Health"
            description="Monitor appointments and medical history"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
            title="Secure & Private"
            description="Your health data is protected and encrypted"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-4 sm:p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
      <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">{title}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
    </div>
  )
}
