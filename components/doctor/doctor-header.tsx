"use client"

import { Activity, Calendar, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DoctorHeaderProps {
  onMenuToggle: () => void
}

export function DoctorHeader({ onMenuToggle }: DoctorHeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const shortDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

  return (
    <header className="h-14 md:h-16 border-b border-border bg-card px-4 md:px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex-1 flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary flex items-center justify-center">
          <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
        </div>
        <span className="text-lg md:text-xl font-bold text-foreground">med-bridge</span>
      </div>

      {/* Right Date - Responsive date display */}
      <div className="flex-1 flex justify-end">
        <div className="flex items-center gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-muted rounded-lg">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs md:text-sm text-muted-foreground md:hidden">{shortDate}</span>
          <span className="text-sm text-muted-foreground hidden md:inline">{today}</span>
        </div>
      </div>
    </header>
  )
}
