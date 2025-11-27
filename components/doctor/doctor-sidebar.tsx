"use client"

import type { User } from "@/app/page"
import { UserIcon, Stethoscope, Calendar, Settings, LogOut, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type DoctorNav = "profile" | "appointments" | "settings"

interface DoctorSidebarProps {
  user: User
  activeNav: DoctorNav
  onNavChange: (nav: DoctorNav) => void
  onLogout: () => void
  isOpen: boolean
  onClose: () => void
}

export function DoctorSidebar({ user, activeNav, onNavChange, onLogout, isOpen, onClose }: DoctorSidebarProps) {
  const navItems = [
    { id: "profile" as const, label: "Doctor Profile", icon: Stethoscope },
    { id: "appointments" as const, label: "My Appointments", icon: Calendar },
    { id: "settings" as const, label: "Settings", icon: Settings },
  ]

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed md:sticky top-14 md:top-16 left-0 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] border-r border-border bg-sidebar flex flex-col z-50 transition-transform duration-300 ease-in-out",
          "w-72 lg:w-80",
          // Mobile: slide in/out
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex items-center justify-end p-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Section */}
        <div className="p-4 md:p-6 border-b border-sidebar-border">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <UserIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="font-semibold text-base md:text-lg text-sidebar-foreground">{user.username}</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 truncate max-w-full">{user.email}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 md:mt-4 bg-transparent text-xs md:text-sm"
              onClick={onLogout}
            >
              <LogOut className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
              Log Out
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 md:p-4 overflow-y-auto">
          <div className="space-y-1.5 md:space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-left transition-colors text-sm md:text-base",
                  activeNav === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                )}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  )
}
