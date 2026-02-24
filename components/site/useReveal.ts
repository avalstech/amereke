"use client"

import * as React from "react"

export function useReveal<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("revealed")
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.12 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
