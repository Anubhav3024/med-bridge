"use client"

import type React from "react"

import type { UserType } from "@/app/page"
import { useState } from "react"
import { X, User, Mail, Lock, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  userType: UserType
  onLogin: (userData: { username: string; email: string }) => void
}

export function RegistrationModal({ isOpen, onClose, userType, onLogin }: RegistrationModalProps) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username && email && password) {
      onLogin({ username, email })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card - Responsive sizing and padding */}
      <div className="relative w-full max-w-[calc(100%-1.5rem)] sm:max-w-md bg-card rounded-xl sm:rounded-2xl shadow-2xl border border-border p-5 sm:p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </button>

        {/* Header - Responsive sizing */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Welcome!</h2>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Sign in as a {userType === "doctor" ? "Doctor" : "Patient"}
          </p>
        </div>

        {/* Form - Responsive spacing */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="username" className="text-sm">
              Username
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="email" className="text-sm">
              Email or Phone
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <Input
                id="email"
                type="text"
                placeholder="Enter email or phone"
                className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-10 sm:h-12 text-sm sm:text-base mt-2">
            Login
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
          By continuing, you agree to our Terms of Service
        </p>
      </div>
    </div>
  )
}
