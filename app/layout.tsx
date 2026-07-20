import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito, Geist_Mono } from 'next/font/google'
import './globals.css'

import { SiteHeader } from './components/site-header'
import { SiteFooter} from './components/site-footer'
import { CartProvider } from "./components/cart-provider"
import Theo from "./components/Theo"

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Entertainer — The UK’s Favourite Toy Shop',
  description:
    'Discover magical toys for every age. Shop building blocks, plush friends, games, outdoor fun and more with free click & collect.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased text-foreground">

        <CartProvider>
        <SiteHeader />

        <main className="min-h-screen">
          {children}
        </main>

        <SiteFooter />
        <Theo />
      </CartProvider>

      </body>
    </html>
  );
}
