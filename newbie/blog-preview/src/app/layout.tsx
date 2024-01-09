import './globals.css'

import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blog preview challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={figtree.className}>
        <div className="min-h-screen bg-yellow">{children}</div>
      </body>
    </html>
  )
}
