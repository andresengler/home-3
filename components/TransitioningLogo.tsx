'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function TransitioningLogo() {
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsExpanded(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link href="/" className="inline-block">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.span
            key="full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[15px] font-medium text-gray-800 dark:text-white"
          >
            Andrés Engler
          </motion.span>
        ) : (
          <motion.span
            key="short"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[15px] font-medium text-gray-800 dark:text-white"
          >
            AE
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  )
}

