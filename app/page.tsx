'use client'

import { motion } from 'framer-motion'
import { ProjectLink } from '@/components/project-link'
import { Section } from '@/components/section'
import Link from 'next/link'
import {
  ppNeueMontrealRegular,
  departureMono,
} from '@/app/fonts'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
          About
        </h2>
        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
          I’m an entrepreneur and editor based in Buenos Aires, Argentina, with a special interest in content, design systems (including typefaces and grids), and Bitcoin. After more than a decade in the media industry, I now focus on exploring new storytelling formats, designing aesthetically refined interfaces, and reimagining monetization strategies—among other pursuits.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <Section title="Building">
          <div className="space-y-6">
            {[
              {
                title: 'Editado',
                description: 'Editorial studio specializing in publishing and research.',
                href: 'https://editado.xyz',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <ProjectLink
                  title={project.title}
                  description={project.description}
                  href={project.href}
                />
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
          Now
        </h2>
        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
          With Editado, I work with a diverse range of clients—including media companies, investment funds, and startups—to conceptualize and create media products such as digital magazines, podcasts, events, and newsletters, while also helping independent authors monetize their work.
        </p>
        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-3`}>
          Lately, I’ve been diving deeper into design. What began as a curiosity about typefaces has evolved into designing interfaces for various platforms. This journey has also sparked my interest in coding, as I strive to create beautiful, functional products from scratch. This website is one of the attempts.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
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
  )
}
