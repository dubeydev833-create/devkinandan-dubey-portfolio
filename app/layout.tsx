import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://devkinandan-dubey.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Devkinandan Dubey — AI & ML Enthusiast | Aspiring Software Developer',
  description:
    'Portfolio of Devkinandan Dubey, a B.Tech CSE (AI & ML) student at GLA University passionate about Artificial Intelligence, Machine Learning, and Web Development. Open to internship opportunities.',
  keywords: [
    'Devkinandan Dubey',
    'AI ML Student',
    'Machine Learning',
    'Python Developer',
    'Frontend Developer',
    'GLA University',
    'Software Developer Portfolio',
    'Internship',
  ],
  authors: [{ name: 'Devkinandan Dubey' }],
  creator: 'Devkinandan Dubey',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Devkinandan Dubey — AI & ML Enthusiast',
    description:
      'B.Tech CSE (AI & ML) student passionate about AI, Machine Learning, and Web Development. Open to internships.',
    siteName: 'Devkinandan Dubey Portfolio',
    images: [{ url: '/profile.png', width: 1024, height: 1024, alt: 'Devkinandan Dubey' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devkinandan Dubey — AI & ML Enthusiast',
    description:
      'B.Tech CSE (AI & ML) student passionate about AI, Machine Learning, and Web Development.',
    images: ['/profile.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
