import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karate Do Neuhausen',
  description: 'Karate Do Neuhausen',
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

