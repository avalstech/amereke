'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Something went wrong</h2>
        <p className="mt-3 text-slate-600">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button asChild href="/" variant="outline">Go home</Button>
        </div>
      </div>
    </div>
  )
}
