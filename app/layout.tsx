import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/utils/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Providers } from '@/utils/providers'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Infinity App',
  description:
    'Infinity é um projeto desenvolvido para aqueles quais gostam do esporte calistenia.',
  verification: {
    google: 'BdQcQyV9Tsqw5LtifWX2erZRG-4I0qx5226M2KnhLfA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="infinity-theme"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              <Header.Container />
              {children}
              <Toaster />
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
