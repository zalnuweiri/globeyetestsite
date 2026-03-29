import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css";


export const metadata: Metadata = {
  title: "Globeye",
  description:
      "Turn Cameras Into Operational Intelligence",
  icons: {
    icon: "/favicon.ico",     // or /favicon.png
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
    </head>
    <body className="font-sans antialiased">
    <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics component removed */}
      </body>
    </html>
  )
}
