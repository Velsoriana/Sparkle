import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visual Novel - Votre Histoire Interactive',
  description: 'Plongez dans une aventure interactive unique. Jouez en ligne ou téléchargez l\'application pour continuer votre histoire sur tous vos appareils.',
  keywords: 'visual novel, jeu interactif, histoire, aventure, renpy',
  authors: [{ name: 'Votre Studio' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
          {children}
        </div>
      </body>
    </html>
  )
} 