import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TwistUp — Brand Identity',
  description: 'A modern, refreshing beverage brand that brings flavor to life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
