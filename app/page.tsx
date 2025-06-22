'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from '@/app/fonts'

function PixelatedVerticalBlurOverlay() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-30 h-24 transition-opacity duration-700">
      <div
        className="w-full h-full bg-white dark:bg-black"
        style={{
          maskImage: `repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0px,
            rgba(0,0,0,1) 4px,
            rgba(0,0,0,0) 4px,
            rgba(0,0,0,0) 8px
          )`,
          WebkitMaskImage: `repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0px,
            rgba(0,0,0,1) 4px,
            rgba(0,0,0,0) 4px,
            rgba(0,0,0,0) 8px
          )`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <PixelatedVerticalBlurOverlay />

      <div className="pt-24 space-y-8">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            About
          </h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
            I’m an entrepreneur and editor based in Buenos Aires, Argentina, with a special interest in content, design systems (including typefaces and grids), and Bitcoin. After more than a decade in the media industry, I now focus on exploring new storytelling formats, designing aesthetically refined interfaces, and reimagining monetization strategies—among other pursuits.
          </p>
        </motion.div>

        {/* Building */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="space-y-3"
        >
          <div className="space-y-1">
            <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
              Building
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
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
            </div>
          </div>
        </motion.div>

        {/* Now */}
        <motion.section
          initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
            Now
          </h2>
          <div className="space-y-3">
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
              With Editado, I work with a diverse range of clients—including media companies, investment funds, and startups—to conceptualize and create media products such as digital magazines, podcasts, events, and newsletters, while also helping independent authors monetize their work.
            </p>
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
              Lately, I’ve been diving deeper into design. What began as a curiosity about typefaces has evolved into designing interfaces for various platforms. This journey has also sparked my interest in coding, as I strive to create beautiful, functional products from scratch. This website is one of the attempts.
            </p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
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
