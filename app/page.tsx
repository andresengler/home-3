'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from '@/app/fonts'

function PixelBlurOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowOverlay(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 h-52 pointer-events-none transition-opacity duration-700 ease-in-out ${
        showOverlay ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="grid grid-cols-32 grid-rows-12 w-full h-full gap-[2px]">
        {Array.from({ length: 384 }).map((_, i) => {
          const gray = Math.floor(Math.random() * 80 + 100) // escala de grises media
          return (
            <div
              key={i}
              className="w-full h-full"
              style={{
                backgroundColor: `rgba(${gray}, ${gray}, ${gray}, 0.9)`
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <PixelBlurOverlay />

      <div className="pt-32 space-y-10 px-4 sm:px-6 md:px-10">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>
            About
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            I’m an entrepreneur and editor based in Buenos Aires, Argentina, with a special interest in content, design systems (including typefaces and grids), and Bitcoin. After more than a decade in the media industry, I now focus on exploring new storytelling formats, designing aesthetically refined interfaces, and reimagining monetization strategies—among other pursuits.
          </p>
        </motion.div>

        {/* Building */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>
            Building
          </h2>
          <Link href="https://editado.xyz" className="group inline-flex items-center space-x-1">
            <span className={`${ppNeueMontrealMedium.variable} font-medium text-[15px] text-gray-800 dark:text-white`}>
              Editado
            </span>
            <span className={`${departureMono.variable} font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em]`}>
              ↗
            </span>
          </Link>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            Editorial studio specializing in publishing and research.
          </p>
        </motion.div>

        {/* Now */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>
            Now
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            With Editado, I work with a diverse range of clients—including media companies, investment funds, and startups—to conceptualize and create media products such as digital magazines, podcasts, events, and newsletters, while also helping independent authors monetize their work.
          </p>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            Lately, I’ve been diving deeper into design. What began as a curiosity about typefaces has evolved into designing interfaces for various platforms. This journey has also sparked my interest in coding, as I strive to create beautiful, functional products from scratch. This website is one of the attempts.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>
            Contact
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            You can reach me at andres@editado.xyz.
          </p>
        </motion.section>
      </div>
    </>
  )
}
