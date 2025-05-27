
import React from "react"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-amber-50/20 to-yellow-50/20 dark:from-orange-950/20 dark:via-amber-950/20 dark:to-yellow-950/20 animate-gradient bg-[length:400%_400%]" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-100/30 dark:bg-orange-900/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-100/30 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-100/30 dark:bg-amber-900/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "4s" }} />
    </div>
  )
}
