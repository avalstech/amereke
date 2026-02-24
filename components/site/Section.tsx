import * as React from "react"
import { cn } from "@/lib/utils"

export function Section({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("py-14 md:py-20", className)}>
      <div className="container">{children}</div>
    </section>
  )
}
