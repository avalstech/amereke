import { Section } from "@/components/site/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Screenshot } from "@/components/site/Screenshot"
import { FeatureCard } from "@/components/site/FeatureCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Layers3, MessageSquareText, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-grid bg-white p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(15,23,42,0.06),transparent_45%)]" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge>Creator Distribution Infrastructure</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Create once. Distribute everywhere. Scale what wins.
              </h1>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                Amareke turns content into a repeatable distribution machine across TikTok, Instagram, YouTube, X, and LinkedIn.
                Built-in feedback loops help you ship consistently and double down on what performs.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild href="/demo" size="lg">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles size={16} /> Try live demo
                  </span>
                </Button>
                <Button asChild href="/product" variant="outline" size="lg">
                  See product
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">No signup for demo</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Built for Africa + diaspora</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Infrastructure mindset</span>
              </div>
            </div>

            <div className="relative">
              <Screenshot src="/screens/hero-dashboard.svg" alt="Amareke dashboard placeholder screenshot" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:block">
                <div className="text-xs font-semibold text-slate-900">Distribution loop</div>
                <div className="mt-2 grid gap-2 text-xs text-slate-600">
                  <div>1. Create</div>
                  <div>2. Repurpose</div>
                  <div>3. Publish</div>
                  <div>4. Learn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Creator Studio" description="Hooks, scripts, captions, and repurpose packs." icon="wand" />
          <FeatureCard title="Distribution Engine" description="Cross-platform variants, scheduling, governance." icon="calendar" />
          <FeatureCard title="Growth Intelligence" description="Content scoring and what to post next." icon="chart" />
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              The hard part is not creating. It’s distribution.
            </h2>
            <p className="mt-3 text-slate-600">
              Most creators lose momentum because distribution is manual, fragmented, and inconsistent.
              Amareke builds the system: create once, ship variants everywhere, track performance, and scale winners.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3"><Layers3 size={18} /></div>
                <div>
                  <div className="text-sm font-semibold">Repurpose automatically</div>
                  <div className="text-sm text-slate-600">Turn one idea into platform-tuned variants.</div>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3"><MessageSquareText size={18} /></div>
                <div>
                  <div className="text-sm font-semibold">Engagement workflows</div>
                  <div className="text-sm text-slate-600">Reply suggestions and community follow-ups.</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild href="/pricing">View pricing</Button>
              <Button asChild href="/demo" variant="outline">Try live demo</Button>
            </div>
          </div>

          <div className="grid gap-4">
            <Screenshot src="/screens/studio-pack.svg" alt="Creator studio pack placeholder screenshot" />
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle className="text-base">Faster shipping</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">From idea to a full week of content.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-base">Less guessing</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Feedback loop tells you what works.</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-semibold">See Amareke in action</div>
              <div className="mt-2 text-slate-600">Try the demo and generate a conversion-ready content pack.</div>
            </div>
            <div className="flex gap-3">
              <Button asChild href="/demo" size="lg">Try live demo</Button>
              <Button asChild href="/product" size="lg" variant="outline">Explore product</Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid gap-4 md:grid-cols-3">
            <MiniStat label="Creators" value="Ship weekly" />
            <MiniStat label="Teams" value="Approve fast" />
            <MiniStat label="Agencies" value="Scale clients" />
          </div>
        </div>
      </Section>
    </>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="text-xs text-slate-600">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  )
}
