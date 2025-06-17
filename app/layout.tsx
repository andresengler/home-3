import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { InteractiveLogo } from "@/components/InteractiveLogo"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Andrés Engler",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppNeueMontrealRegular.variable} ${departureMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative min-h-screen bg-white dark:bg-black flex flex-col">
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

