'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BraunClockProps {
  time: Date
}

export const BraunClock: React.FC<BraunClockProps> = ({ time }) => {
  const [showPopup, setShowPopup] = useState(false)

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5
  const minuteDegrees = minutes * 6 + seconds * 0.1
  const secondDegrees = seconds * 6

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(date).toLowerCase() + ' in Buenos Aires'
  }

  return (
    <div
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      className="relative w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700"
    >
      {/* Horario flotante */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white dark:bg-black text-[12px] px-2 py-1 rounded shadow border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 z-10 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {formatTime(time)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Agujas */}
      <motion.div
        className="absolute w-[1px] h-[30%] bg-gray-600 dark:bg-gray-400"
        style={{ top: '10%', left: 'calc(50% - 0.5px)', transformOrigin: 'bottom' }}
        animate={{ rotate: hourDegrees }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="absolute w-[1px] h-[35%] bg-gray-600 dark:bg-gray-400"
        style={{ top: '5%', left: 'calc(50% - 0.5px)', transformOrigin: 'bottom' }}
        animate={{ rotate: minuteDegrees }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
      <motion.div
        className="absolute w-[1px] h-[40%] bg-[#C5B6B6] dark:bg-[#C5B6B6]"
        style={{ top: '2%', left: 'calc(50% - 0.5px)', transformOrigin: 'bottom' }}
        animate={{ rotate: secondDegrees }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      />

      {/* Centro del reloj */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-0.5 h-0.5 rounded-full bg-gray-600 dark:bg-gray-400" />
      </div>
    </div>
  )
}
