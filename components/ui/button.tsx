import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonBaseProps = {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
}

type ButtonAsButtonProps = ButtonBaseProps & 
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false
    href?: never
  }

type ButtonAsLinkProps = ButtonBaseProps & {
  asChild: true
  href: string
  children: React.ReactNode
}

type Props = ButtonAsButtonProps | ButtonAsLinkProps

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild,
  href,
  ...props
}: Props) {
  const v =
    variant === "default"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
      : variant === "outline"
      ? "border border-slate-200 hover:bg-slate-50"
      : "hover:bg-slate-100"

  const s =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
      ? "h-11 px-5 text-base"
      : "h-10 px-4 text-sm"

  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-50 disabled:pointer-events-none"

  if (asChild && href) {
    return (
      <Link href={href} className={cn(base, v, s, className)}>
        {props.children}
      </Link>
    )
  }

  return (
    <button type="button" className={cn(base, v, s, className)} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  )
}
