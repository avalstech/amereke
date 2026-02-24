import { Section } from "@/components/site/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const items = [
  { title: "7-Day Distribution Plan", desc: "A weekly cadence that compounds reach across platforms." },
  { title: "Hook Library", desc: "Proven openers by niche, platform, and goal." },
  { title: "Repurpose Checklist", desc: "Turn one idea into multiple content formats fast." },
  { title: "Brand Voice Template", desc: "Define tone, do-not-say list, and audience vocabulary." },
  { title: "Creator SOP", desc: "A simple operating system for consistent posting." },
  { title: "Campaign Brief", desc: "A one-page brief for teams and agencies." }
]

export default function ResourcesPage() {
  return (
    <Section className="pt-10">
      <Badge>Resources</Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Playbooks and templates</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Ready-to-use assets to build your distribution system.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(i => (
          <Card key={i.title}>
            <CardHeader><CardTitle className="text-base">{i.title}</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">{i.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
