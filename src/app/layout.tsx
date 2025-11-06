import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open Arms Global - Reaching Out, Changing Lives',
  description: 'Supporting vulnerable families and children in communities worldwide through education, nutrition, and community outreach programs.',
  keywords: 'charity, nonprofit, global, education, nutrition, community, children, families, donation, volunteer, humanitarian',
  authors: [{ name: 'Open Arms Global' }],
  openGraph: {
    title: 'Open Arms Global - Reaching Out, Changing Lives',
    description: 'Supporting vulnerable families and children in communities worldwide',
    url: 'https://openarmsglobal.org',
    siteName: 'Open Arms Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Arms Global - Reaching Out, Changing Lives',
    description: 'Supporting vulnerable families and children in communities worldwide',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}