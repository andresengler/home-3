'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
  departureMono,
} from '@/app/fonts'

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
      {
        date: '2010 - 2014',
        company: 'Catholic University of Argentina',
        role: "Bachelor's Degree in Journalism",
      },
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
      {
        date: '12/15',
        company: 'ADEPA Journalism Prize',
        role: 'Special mention in Economy',
      },
    ],
  },
  {
    title: 'Citations',
    items: [
      {
        content: 'Dos años de bitcoin en El Salvador de Bukele',
        outlet: 'El País',
        href: 'https://elpais.com/america/economia/2023-09-02/dos-anos-de-bitcoin-en-el-salvador-de-bukele-un-experimento-opaco-con-una-moneda-poco-utilizada.html',
      },
      {
        content: 'Crypto adoption spreads in Argentina as central bank tightens rules',
        outlet: 'Financial Times',
        href: 'https://www.ft.com/content/4dae4742-c339-4414-9bfa-4739df6e5248',
      },
      {
        content: 'La quiebra de FTX agrava la crisis de las criptomonedas en América Latina',
        outlet: 'El País',
        href: 'https://elpais.com/mexico/2022-12-04/la-quiebra-de-ftx-agrava-la-crisis-de-las-criptomonedas-en-america-latina.html',
      },
    ],
  },
]

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-10"
    >
      <div className="space-y-3">
        <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
          Resume
        </h2>
        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed`}>
          Presenting a resume might feel a bit outdated, but here's a more detailed profile of what I've been up to over the past ten years—a brief overview of the companies I've worked with, mentions in various publications, and more.
        </p>
      </div>

      <div className="space-y-10">
        {resumeData.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 + i * 0.1 }}
            className="space-y-6"
          >
            <h3 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
              {section.title}
            </h3>

            {section.title === 'Languages' ? (
              <div className="space-y-3">
                {section.items.map((item: any, index: number) => (
                  <div key={index} className="space-y-2">
                    {['spanish', 'english'].map((lang) => (
                      <div key={lang}>
                        <h4 className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-800 dark:text-white`}>
                          {item[lang].company}
                        </h4>
                        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-normal`}>
                          {item[lang].role}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : section.title === 'Citations' ? (
              <div className="space-y-2">
                {section.items.map((item: any) => (
                  <Link key={item.href} href={item.href} className="group block">
                    <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] leading-tight`}>
                      <span className="text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {item.content}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 italic">, {item.outlet}</span>
                      <span className={`${departureMono.variable} font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em] ml-1`}>
                        ↗
                      </span>
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {section.items.map((item: any, index: number) => (
                  <div key={index} className="space-y-1 w-full">
                    {item.date && (
                      <p className={`${departureMono.variable} font-mono text-[12px] text-gray-500 dark:text-gray-400`}>
                        {item.date}
                      </p>
                    )}
                    <h4 className={`${ppNeueMontrealMedium.variable} font-medium text-[15px] text-gray-800 dark:text-white`}>
                      {item.company}
                    </h4>
                    {item.role && (
                      <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-normal`}>
                        {item.role}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}
