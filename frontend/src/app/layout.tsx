import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ["300", "500", "700"],
  style: "normal",
  subsets: ["cyrillic", "latin"]
})

export const metadata: Metadata = {
  title: 'Entrepreneurship School',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
