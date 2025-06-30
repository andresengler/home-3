import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { InteractiveLogo } from '@/components/InteractiveLogo'
import { Menu } from '@/components/menu'
import { Footer } from '@/components/footer'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from './fonts'

export const metadata = {
  title: 'Andrés Engler',
  icons: {
    icon: [
      { url: '/ae-black.svg', media: '(prefers-color-scheme: light)' },
      { url: '/ae-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
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
