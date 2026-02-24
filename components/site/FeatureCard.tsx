"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useReveal } from "@/components/site/useReveal"
import { Wand2, CalendarClock, BarChart3 } from "lucide-react"

const icons = {
  wand: Wand2,
  calendar: CalendarClock,
  chart: BarChart3,
} as const

export function FeatureCard({
  title,
  description,
  icon
}: {
  title: string
  description: string
  icon: keyof typeof icons
}) {
  const ref = useReveal<HTMLDivElement>()
  const Icon = icons[icon]

  return (
    <div ref={ref} className="reveal">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <Icon size={18} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Built to feel like infrastructure: repeatable workflows, measurable distribution, and a feedback loop.
        </CardContent>
      </Card>
    </div>
  )
}
