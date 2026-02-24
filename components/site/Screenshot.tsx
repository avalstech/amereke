import Image from "next/image"
import { cn } from "@/lib/utils"

export function Screenshot({
  src,
  alt,
  className
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm", className)}>
      <Image src={src} alt={alt} width={1200} height={740} className="h-auto w-full" priority />
    </div>
  )
}
