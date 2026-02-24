import { Section } from "@/components/site/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    hint: "For solo creators",
    features: [
      { id: "demo", text: "Demo access" },
      { id: "basic-packs", text: "Basic content packs" },
      { id: "single-workspace", text: "Single workspace" }
    ],
    cta: "Try demo",
    href: "/demo",
    featured: false
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    hint: "For serious creators",
    features: [
      { id: "variants", text: "More variants" },
      { id: "brand-voice", text: "Brand voice profiles" },
      { id: "weekly-plans", text: "Weekly plans" },
      { id: "insights", text: "Insights summary" }
    ],
    cta: "Start free",
    href: "/demo",
    featured: true
  },
  {
    id: "team",
    name: "Team",
    price: "$79",
    hint: "For brands & agencies",
    features: [
      { id: "workspaces", text: "Workspaces" },
      { id: "approvals", text: "Approvals" },
      { id: "shared-assets", text: "Shared assets" },
      { id: "reporting", text: "Reporting export" }
    ],
    cta: "Book demo",
    href: "/company",
    featured: false
  }
]

export default function PricingPage() {
  return (
    <Section className="pt-10">
      <Badge>Pricing</Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Simple plans that scale</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Start with the demo. Upgrade when you want higher limits and team workflows.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map(p => (
          <Card key={p.id} className={p.featured ? "border-slate-900" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                {p.name}
                {p.featured ? <Badge className="border-slate-900 bg-slate-900 text-white">Most popular</Badge> : null}
              </CardTitle>
              <CardDescription>{p.hint}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">{p.price}<span className="text-sm font-normal text-slate-600">/mo</span></div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                {p.features.map(f => (<li key={f.id} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400" />{f.text}</li>))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild href={p.href} className="w-full" variant={p.featured ? "default" : "outline"}>
                {p.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        Enterprise plans include SLA, custom limits, compliance needs, and dedicated support.
      </div>
    </Section>
  )
}
