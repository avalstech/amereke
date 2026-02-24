import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold">Amareke</div>
            <div className="mt-2 text-sm text-slate-600">
              Creator Distribution Infrastructure for creators, brands, and agencies.
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Product</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <Link href="/product">Overview</Link>
              <Link href="/demo">Live demo</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Resources</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <Link href="/resources">Playbooks</Link>
              <Link href="/resources">Templates</Link>
              <Link href="/resources">Blog</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <Link href="/company">About</Link>
              <Link href="/company">Contact</Link>
              <Link href="/company">Careers</Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Amareke. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/company#privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/company#terms" className="hover:text-slate-900">Terms</Link>
            <Link href="/company#security" className="hover:text-slate-900">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
