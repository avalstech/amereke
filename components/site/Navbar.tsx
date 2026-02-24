import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-slate-900" aria-hidden="true">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#fff,transparent_55%)]" />
            <div className="absolute inset-y-0 left-[-40%] w-1/2 rotate-12 bg-white/20 animate-shine" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Amareke</div>
            <div className="text-xs text-slate-600">Creator Distribution Infrastructure</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/product">Product</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/pricing">Pricing</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/resources">Resources</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/company">Company</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/demo">
            <span className="inline-flex items-center gap-2">Live Demo <Badge>New</Badge></span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:inline-flex" asChild href="/demo">
            <span className="inline-flex items-center gap-2"><Sparkles size={16} /> Try demo</span>
          </Button>
          <Button asChild href="/demo">Start free</Button>
        </div>
      </div>
    </header>
  )
}
