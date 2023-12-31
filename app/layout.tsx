import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header"
const inter = Inter({ 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Learning Next JS',
  description: 'Generated by Learning React JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="selection:text-blue-200 h-screen">
      <Header/>
      {children}
      </div>
      </body>
    </html>
  )
}
