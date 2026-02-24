"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useReveal } from "@/components/site/useReveal"
import type { LucideIcon } from "lucide-react"

export function FeatureCard({
  title,
  description,
  Icon
}: {
  title: string
  description: string
  Icon: LucideIcon
}) {
  const ref = useReveal<HTMLDivElement>()

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
