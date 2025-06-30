import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { InteractiveLogo } from '@/components/InteractiveLogo'
import { Menu } from '@/components/menu'
import { Footer } from '@/components/footer'
import Head from 'next/head'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from './fonts'

export const metadata = {
  title: 'Andrés Engler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${ppNeueMontrealRegular.variable} ${ppNeueMontrealMedium.variable} ${departureMono.variable}`}
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* o si usás SVG */}
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
      </Head>
      <body className="font-sans bg-white dark:bg-black text-gray-800 dark:text-white theme-transition-overlay">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative z-10 min-h-screen flex flex-col">
            <div className="flex-1">
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="flex justify-between items-center py-16">
                  <InteractiveLogo />
                  <Menu />
                </header>
                <main className="pt-12">{children}</main>
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
