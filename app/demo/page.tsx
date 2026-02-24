import { Section } from "@/components/site/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/site/Screenshot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoPage() {
  return (
    <Section className="pt-10">
      <Badge>Live Demo</Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Creator Studio preview</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        This static marketing build includes placeholder demo visuals. Plug in your real demo later (Bedrock, auth, workspaces).
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="grid gap-4">
          <Card>
            <CardHeader><CardTitle>What the demo will do</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              Generate a content pack: hooks, platform variants, hashtags, and a 7-day distribution plan.
              Copy buttons and downloads convert visitors into signups.
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-3">
            <Button asChild href="/pricing">View pricing</Button>
            <Button asChild href="/product" variant="outline">Explore product</Button>
          </div>
          <div className="text-sm text-slate-600">
            Want the interactive demo again? Ask and I will add it back into this project with Bedrock-ready APIs.
          </div>
        </div>

        <div className="grid gap-4">
          <Screenshot src="/screens/demo-simulator.svg" alt="Live demo placeholder screenshot" />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            Designed to reduce friction: clear CTA, tangible output, and a fast “aha” moment.
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
        <div className="text-xl font-semibold">Next step</div>
        <p className="mt-2 text-slate-600">
          After you deploy this marketing site, we can add authentication, the interactive demo, and a waitlist capture.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild href="/">Back to home</Button>
          <Button asChild href="/company" variant="outline">Contact</Button>
        </div>
      </div>
    </Section>
  )
}
