'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ppNeueMontrealRegular, ppNeueMontrealMedium, departureMono } from '@/app/fonts'

function TopFadeOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)
  useEffect(() => {
    const handleScroll = () => setShowOverlay(window.scrollY > 180)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={`pointer-events-none fixed top-0 left-0 right-0 z-30 h-28 transition-opacity duration-700 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full h-full bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/30" />
    </div>
  )
}

const resumeData = [
  {
    title: 'Work Experience',
    items: [
      { date: '9/23 - Now', company: 'Editado', role: 'Founder' },
      { date: '6/21 - 8/23', company: 'CoinDesk', role: 'Editor of content and strategy, Latin America' },
      { date: '1/20 - 6/21', company: 'La Nación', role: 'Features writer' },
      { date: '9/19 - 12/21', company: 'Acuris', role: 'Correspondent in Argentina' },
      { date: '4/14 - 8/19', company: 'El Cronista', role: 'Reporter' },
    ],
  },
  {
    title: 'Education',
    items: [
      { date: '2010 - 2014', company: 'Catholic University of Argentina', role: "Bachelor's Degree in Journalism" },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        spanish: { company: 'Spanish', role: 'Native' },
        english: { company: 'English', role: 'Fluent' },
      },
    ],
  },
  {
    title: 'Awards',
    items: [
      { date: '12/15', company: 'ADEPA Journalism Prize', role: 'Special mention in Economy' },
    ],
  },
  {
    title: 'Citations',
    items: [
      { content: 'Dos años de bitcoin en El Salvador de Bukele', outlet: 'El País', href: 'https://elpais.com/...' },
      { content: 'Crypto adoption spreads in Argentina as central bank tightens rules', outlet: 'Financial Times', href: 'https://ft.com/...' },
      { content: 'La quiebra de FTX agrava la crisis...', outlet: 'El País', href: 'https://elpais.com/...' },
    ],
  },
]

export default function Resume() {
  return (
    <>
      <TopFadeOverlay />
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="pt-20 space-y-8"
      >
        <div className="space-y-4">
          <h2 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>Resume</h2>
          <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-snug text-gray-600 dark:text-gray-300`}>
            Presenting a resume might feel a bit outdated, but here’s a profile of the past 10 years.
          </p>
        </div>
        <div className="space-y-8">
          {resumeData.map(section => (
            <section key={section.title} className="space-y-4">
              <h3 className={`${departureMono.variable} font-mono text-[14px] text-[#8b7664]`}>{section.title}</h3>
              {section.title === 'Languages' ? (
                <div className="flex gap-12">
                  {section.items.map(item => (
                    ['spanish', 'english'].map(lang => (
                      <div key={lang} className="space-y-0.5">
                        <h4 className={`${ppNeueMontrealRegular.variable} font-sans text-[15px]`}>{item[lang].company}</h4>
                        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-snug text-gray-600 dark:text-gray-300`}>{item[lang].role}</p>
                      </div>
                    ))
                  ))}
                </div>
              ) : section.title === 'Citations' ? (
                <div className="space-y-4">
                  {section.items.map(item => (
                    <Link key={item.href} href={item.href}>
                      <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-snug text-gray-800 dark:text-white`}>
                        {item.content}
                        <span className="italic text-gray-600 dark:text-gray-300">, {item.outlet}</span>
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="space-y-0.5">
                      <p className={`${departureMono.variable} font-mono text-[12px] text-gray-500 dark:text-gray-400`}>{item.date}</p>
                      <h4 className={`${ppNeueMontrealMedium.variable} font-medium text-[15px]`}>{item.company}</h4>
                      <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-snug text-gray-600 dark:text-gray-300`}>{item.role}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </motion.div>
    </>
  )
}
