'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { departureMono, ppNeueMontrealRegular } from '../fonts'

const writings = [
  {
    year: '2022',
    articles: [
      {
        title: "Argentina Was at the Cusp of a Crypto Boom. The Central Bank Had Other Plans",
        href: 'https://www.coindesk.com/policy/2022/05/13/argentina-was-at-the-cusp-of-a-crypto-boom-the-central-bank-had-other-plans/'
      }
    ]
  },
  {
    year: '2021',
    articles: [
      {
        title: "Identity Thieves Exploit El Salvador's Chivo Bitcoin Wallet's Setup Process",
        href: 'https://finance.yahoo.com/news/identity-thieves-exploit-el-salvador-223852061.html'
      },
      {
        title: "Amid Health Crisis and Economic Embargo, Cubans Are Using Cryptocurrencies to Help Compatriots",
        href: 'https://www.coindesk.com/markets/2021/07/15/amid-health-crisis-and-economic-embargo-cubans-are-using-cryptocurrencies-to-help-compatriots'
      },
      {
        title: "As El Salvador Enacts Bitcoin Law, Locals Remain Confused About Implementation",
        href: 'https://www.coindesk.com/policy/2021/09/07/as-el-salvador-enacts-bitcoin-law-locals-remain-confused-about-implementation'
      },
      {
        title: "Why Brazil is the Big Latin American Bet for Global Crypto Exchanges",
        href: 'https://www.coindesk.com/business/2022/01/21/why-brazil-is-the-big-latin-american-bet-for-global-crypto-exchanges/'
      }
    ]
  },
  {
    year: '2020',
    articles: [
      {
        title: "Why Argentines Are Turning From Dollars to Stablecoins Like DAI",
        href: 'https://www.coindesk.com/markets/2020/12/22/why-argentines-are-turning-from-dollars-to-stablecoins-like-dai/'
      },
      {
        title: "Servicios de exportación: un negocio de US$6000 millones que la Argentina puede perder con sus vecinos",
        href: 'https://www.lanacion.com.ar/economia/servicios-exportacion-negocio-us6000-millones-argentina-puede-nid2329686//'
      },
      {
        title: "Futuros unicornios: las próximas compañías argentinas de más de US$1000 millones",
        href: 'https://www.lanacion.com.ar/economia/negocios/futuros-unicornios-las-proximas-companias-argentinas-de-mas-de-us1000-millones-nid2320936/'
      }
    ]
  }
]

export default function Writings() {
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null)

  const handleInteractionStart = (title: string) => {
    setHoveredArticle(title)
  }

  const handleInteractionEnd = () => {
    setHoveredArticle(null)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className={`${departureMono.variable} font-mono text-[12px] font-normal tracking-tight text-gray-400 dark:text-gray-500`}>
          Writings
        </h2>
        <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-4`}>
          A curated selection of articles I've written in English and Spanish for various media outlets. While my recent focus has been on editing and refining others' work, I continue to seek out compelling stories to commission and, occasionally, write myself.
        </p>
      </div>

      <div className="space-y-4">
        {writings.map((yearGroup) => (
          <div key={yearGroup.year} className="space-y-4 mb-4">
            <h3 className={`${departureMono.variable} font-mono text-[12px] font-normal tracking-tight text-[#C5B6B6] dark:text-[#C5B6B6] mb-2`}>
              {yearGroup.year}
            </h3>
            <div className="space-y-0.5">
              {yearGroup.articles.map((article) => (
                <motion.div 
                  key={article.title}
                  className="relative"
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                >
                  <Link 
                    href={article.href}
                    className="group block"
                    onMouseEnter={() => handleInteractionStart(article.title)}
                    onMouseLeave={handleInteractionEnd}
                    onTouchStart={() => handleInteractionStart(article.title)}
                    onTouchEnd={handleInteractionEnd}
                  >
                    <div className="flex items-center justify-between py-1">
                      <div className="flex-1 pr-4">
                        <motion.h4 
                          className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] font-normal transition-all duration-200 ${
                            hoveredArticle && hoveredArticle !== article.title 
                              ? 'text-gray-400 dark:text-gray-600 blur-[0.5px]' 
                              : 'text-gray-800 dark:text-white'
                          }`}
                        >
                          {article.title}
                        </motion.h4>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em]">
                          ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
