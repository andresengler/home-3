'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from '@/app/fonts'

function TopFadeOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowOverlay(window.scrollY > 180)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 right-0 z-30 h-28 transition-opacity duration-700 ${
        showOverlay ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full h-full bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/30" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <TopFadeOverlay />

      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="pt-20 space-y-10"
      >
        {/* About */}
        <section className="space-y-4">
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            About
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-snug`}>
            I’m an entrepreneur and editor based in Buenos Aires, Argentina, with a special interest in content, design systems (including typefaces and grids), and Bitcoin. After more than a decade in the media industry, I now focus on exploring new storytelling formats, designing aesthetically refined interfaces, and reimagining monetization strategies—among other pursuits.
          </p>
        </section>

        {/* Building */}
        <section className="space-y-4">
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            Building
          </h2>
          <div>
            <Link href="https://editado.xyz" className="group inline-flex items-center space-x-1">
              <span className={`${ppNeueMontrealMedium.variable} font-medium text-[15px] text-gray-800 dark:text-white`}>
                Editado
              </span>
              <span className={`${departureMono.variable} font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em]`}>
                ↗
              </span>
            </Link>
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-snug`}>
              Editorial studio specializing in publishing and research.
            </p>
          </div>
        </section>

        {/* Now */}
        <section className="space-y-4">
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            Now
          </h2>
          <div className="space-y-3">
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-snug`}>
              With Editado, I work with a diverse range of clients—including media companies, investment funds, and startups—to conceptualize and create media products such as digital magazines, podcasts, events, and newsletters, while also helping independent authors monetize their work.
            </p>
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-snug`}>
              Lately, I’ve been diving deeper into design. What began as a curiosity about typefaces has evolved into designing interfaces for various platforms. This journey has also sparked my interest in coding, as I strive to create beautiful, functional products from scratch. This website is one of the attempts.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            Contact
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-snug`}>
            You can reach me at andres@editado.xyz.
          </p>
        </section>
      </motion.div>
    </>
  )
}
