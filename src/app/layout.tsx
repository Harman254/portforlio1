import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProviderContext } from '@/providers/clerk'
import Navbar from '@/components/Nav/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/providers/theme'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Web',
  description: 'App that simplifies modern web development using clerk and chakra ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <ClerkProviderContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

          >

            <Navbar />

            {children}
            <Footer />
          </ThemeProvider>

        </ClerkProviderContext>
      </body>
    </html>
  )
}
