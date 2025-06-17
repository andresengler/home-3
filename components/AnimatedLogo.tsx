'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function AnimatedLogo() {
  const [isExpanded, setIsExpanded] = useState(true)

  const containerVariants = {
    expanded: { width: 150 },
    collapsed: { width: 30 }
  }

  const firstWordVariants = {
    expanded: { x: 0 },
    collapsed: { x: 0 }
  }

  const secondWordVariants = {
    expanded: { x: 0 },
    collapsed: { x: -120 }
  }

  const hiddenLettersVariants = {
    expanded: { opacity: 1, width: 'auto' },
    collapsed: { opacity: 0, width: 0 }
  }

  return (
    <Link 
      href="/" 
      className="inline-block"
      onMouseEnter={() => setIsExpanded(false)}
      onMouseLeave={() => setIsExpanded(true)}
    >
      <motion.div 
        className="relative overflow-hidden"
        variants={containerVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="whitespace-nowrap text-[15px] font-medium text-gray-800 dark:text-white flex items-center">
          <motion.span
            variants={firstWordVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="inline-block">A</span>
            <motion.span
              variants={hiddenLettersVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block', overflow: 'hidden' }}
            >
              ndrés
            </motion.span>
          </motion.span>
          <motion.span
            variants={secondWordVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            style={{ marginLeft: '0.5em' }}
          >
            <span className="inline-block">E</span>
            <motion.span
              variants={hiddenLettersVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block', overflow: 'hidden' }}
            >
              ngler
            </motion.span>
          </motion.span>
        </div>
      </motion.div>
    </Link>
  )
}

