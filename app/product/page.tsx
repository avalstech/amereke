import { Section } from "@/components/site/Section"
import { Screenshot } from "@/components/site/Screenshot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductPage() {
  return (
    <Section className="pt-10">
      <Badge>Product</Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Amareke OS</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        A creator distribution system: generate, repurpose, distribute, and learn what works across platforms.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="grid gap-4">
          <Card>
            <CardHeader><CardTitle>Creator Studio</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              Hooks, scripts, captions, carousel outlines, and brand voice profiles.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Distribution Engine</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              Platform variants, scheduling, approvals, and asset library governance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Growth Intelligence</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              Performance narrative, content scoring, and recommended next posts.
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          <Screenshot src="/screens/workflows.svg" alt="Workflow placeholder screenshot" />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            Infrastructure mindset: Create → Repurpose → Publish → Learn. Repeat weekly.
          </div>
        </div>
      </div>
    </Section>
  )
}
