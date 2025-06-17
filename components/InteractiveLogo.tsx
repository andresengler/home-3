'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ppNeueMontrealMedium } from '@/app/fonts'

export function InteractiveLogo() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isHovered || isMobile) return

    const interval = setInterval(() => {
      setIsExpanded(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered, isMobile])

  const containerVariants = {
    expanded: { width: 'auto' },
    collapsed: { width: 30 },
  }

  const letterVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: 'auto' },
  }

  const handleHoverStart = useCallback(() => {
    if (!isMobile) {
      setIsHovered(true)
      setIsExpanded(false)
    }
  }, [isMobile])

  const handleHoverEnd = useCallback(() => {
    if (!isMobile) {
      setIsHovered(false)
      setIsExpanded(true)
    }
  }, [isMobile])

  return (
    <Link href="/" aria-label="Homepage">
      <motion.div
        className={`relative overflow-hidden ${ppNeueMontrealMedium.variable} font-medium`}
        initial="expanded"
        animate={isMobile ? 'collapsed' : isExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center text-[15px] font-medium text-gray-800 dark:text-white whitespace-nowrap tracking-tight">
          <span>A</span>
          {!isMobile && (
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.span
                  key="ndres"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  ndrés&nbsp;
                </motion.span>
              )}
            </AnimatePresence>
          )}
          <span>E</span>
          {!isMobile && (
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.span
                  key="ngler"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  ngler
                </motion.span>
              )}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
