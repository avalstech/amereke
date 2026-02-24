import { Section } from "@/components/site/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CompanyPage() {
  return (
    <Section className="pt-10">
      <Badge>Company</Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Built for creators who ship</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Amareke focuses on distribution as infrastructure: systems, feedback loops, and consistent execution.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>About</CardTitle></CardHeader>
          <CardContent className="text-sm text-slate-600">
            We help creators, brands, and agencies turn content into an engine that ships, learns, and compounds.
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Contact</CardTitle></CardHeader>
          <CardContent className="text-sm text-slate-600">
            Want a walkthrough for a team plan?
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild href="/demo">Try demo</Button>
              <Button asChild href="/pricing" variant="outline">View pricing</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
