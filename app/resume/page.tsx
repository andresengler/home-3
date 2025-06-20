'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ppNeueMontrealRegular, ppNeueMontrealMedium, departureMono } from '../fonts'

const resumeData = [
  {
    title: 'Work Experience',
    items: [
      { date: '9/23 - Now', company: 'Editado', role: 'Founder' },
      { date: '6/21 - 8/23', company: 'CoinDesk', role: 'Editor of content and strategy, Latin America' },
      { date: '1/20 - 6/21', company: 'La Nación', role: 'Features writer' },
      { date: '9/19 - 12/21', company: 'Acuris', role: 'Correspondent in Argentina' },
      { date: '4/14 - 8/19', company: 'El Cronista', role: 'Reporter' }
    ]
  },
  {
    title: 'Education',
    items: [
      { date: '2010 - 2014', company: 'Catholic University of Argentina', role: "Bachelor's Degree in Journalism" }
    ]
  },
  {
    title: 'Languages',
    items: [
      {
        spanish: { company: 'Spanish', role: 'Native' },
        english: { company: 'English', role: 'Fluent' }
      }
    ]
  },
  {
    title: 'Awards',
    items: [
      { date: '12/15', company: 'ADEPA Journalism Prize', role: 'Special mention in Economy' }
    ]
  },
  {
    title: 'Citations',
    items: [
      {
        content: 'Dos años de bitcoin en El Salvador de Bukele',
        outlet: 'El País',
        href: 'https://elpais.com/america/economia/2023-09-02/dos-anos-de-bitcoin-en-el-salvador-de-bukele-un-experimento-opaco-con-una-moneda-poco-utilizada.html'
      },
      {
        content: 'Crypto adoption spreads in Argentina as central bank tightens rules',
        outlet: 'Financial Times',
        href: 'https://www.ft.com/content/4dae4742-c339-4414-9bfa-4739df6e5248'
      },
      {
        content: 'La quiebra de FTX agrava la crisis de las criptomonedas en América Latina',
        outlet: 'El País',
        href: 'https://elpais.com/mexico/2022-12-04/la-quiebra-de-ftx-agrava-la-crisis-de-las-criptomonedas-en-america-latina.html'
      }
    ]
  }
]

const renderSection = (section: any) => (
  <motion.section
    key={section.title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="space-y-6"
    id={section.title.toLowerCase().replace(/\s+/g, '-')}
  >
    <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
      {section.title}
    </h2>

    {section.title === 'Languages' ? (
      <div className="flex items-center">
        {section.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="flex items-center gap-12"
          >
            {['spanish', 'english'].map((lang) => (
              <div key={lang}>
                <h3 className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-800 dark:text-white`}>
                  {item[lang].company}
                </h3>
                <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
                  {item[lang].role}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    ) : section.title === 'Citations' ? (
      <div className="space-y-1 mb-4">
        {section.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <Link href={item.href} className="group block">
              <motion.p
                className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-snug`}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {item.content}
                </span>
                <span className="text-gray-600 dark:text-gray-300 italic">, {item.outlet}</span>
                <span className={`${departureMono.variable} font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em] ml-1`}>
                  ↗
                </span>
              </motion.p>
            </Link>
          </motion.div>
        ))}
      </div>
    ) : (
      <div className="space-y-6">
        {section.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="space-y-1 w-full"
          >
            <div className="space-y-1">
              {item.date && (
                <p className={`${departureMono.variable} font-mono text-[12px] text-gray-500 dark:text-gray-400`}>
                  {item.date}
                </p>
              )}
              <h3 className={`${ppNeueMontrealMedium.variable} font-medium text-[15px] text-gray-800 dark:text-white`}>
                {item.company}
              </h3>
              {item.role && (
                <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
                  {item.role}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </motion.section>
)

export default function Resume() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    resumeData.forEach((section) => {
      const element = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${ppNeueMontrealRegular.variable} font-sans min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-1000`}>
      <div className="flex">
        <nav className="sticky top-[36%] left-0 hidden lg:block h-full pr-12 pl-8">
          <ul className="space-y-2">
            {resumeData.map((section) => (
              <li key={section.title}>
                <button
                  onClick={() => {
                    const el = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`${departureMono.variable} font-mono text-[12px] font-normal tracking-tight whitespace-nowrap transition-colors ${
                    activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                      ? 'text-gray-800 dark:text-white'
                      : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 space-y-10 px-6 md:px-8">
          <div>
            <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
              Resume
            </h2>
            <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-4`}>
              Presenting a resume might feel a bit outdated, but here's a more detailed profile of what I've been up to over the past ten years—a brief overview of the companies I've worked with, mentions in various publications, and more.
            </p>
          </div>

          {resumeData.map((section) => (
            <div key={section.title}>{renderSection(section)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
