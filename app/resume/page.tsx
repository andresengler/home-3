'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
  // Resto igual...
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
    <h2 className="font-mono text-[14px] font-normal tracking-tight text-[#8b7664]">{section.title}</h2>
    <div className="space-y-6">
      {section.items.map((item: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * (index + 1) }}
          className="space-y-1"
        >
          {item.date && <p className="font-mono text-[12px] leading-[18px] text-gray-500 dark:text-gray-400">{item.date}</p>}
          <h3 className="text-[15px] text-gray-800 dark:text-white">{item.company}</h3>
          {item.role && <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">{item.role}</p>}
        </motion.div>
      ))}
    </div>
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
      const el = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white relative pb-2 transition-colors duration-200">
      <div className="flex w-full justify-start">
        {/* Sidebar menu */}
        <aside className="hidden lg:flex flex-col sticky top-32 w-[180px] pl-6">
          <ul className="space-y-2">
            {resumeData.map((section) => (
              <li key={section.title}>
                <button
                  onClick={() => {
                    const el = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`font-mono text-[12px] font-normal tracking-tight transition-colors ${
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
        </aside>

        {/* Main content aligned with header */}
        <main className="max-w-screen-md w-full px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-mono text-[14px] font-normal tracking-tight text-[#8b7664]">Resume</h2>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Presenting a resume might feel a bit outdated, but here's a more detailed profile of what I've been up to over the past ten years...
            </p>
          </div>

          <div className="space-y-10">
            {resumeData.map((section) => (
              <div key={section.title}>{renderSection(section)}</div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
