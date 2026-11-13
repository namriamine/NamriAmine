import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { personalInfo } from '@/data/personal'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const shouldRenderAnalytics = process.env.VERCEL === '1'
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app').replace(
  /\/$/,
  '',
)

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: personalInfo.seo.title,
  description: personalInfo.seo.description,
  keywords: personalInfo.seo.keywords,
  authors: [{ name: personalInfo.name, url: personalInfo.linkedin }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: personalInfo.seo.title,
    description: personalInfo.seo.socialDescription,
    url: '/',
    siteName: 'Namri Amine Portfolio',
    images: [{ url: `${siteUrl}/opengraph-image`, alt: personalInfo.seo.title }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.seo.title,
    description: personalInfo.seo.socialDescription,
    images: [`${siteUrl}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-[var(--page-bg)] font-sans antialiased`}
      >
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-teal-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </Link>
        <ThemeProvider>
          <div className="min-h-dvh w-full bg-transparent">{children}</div>
        </ThemeProvider>
        {shouldRenderAnalytics && <Analytics />}
      </body>
    </html>
  )
}
