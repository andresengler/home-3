"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { departureMono } from "../app/fonts"

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
    return (
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Argentina/Buenos_Aires",
      }).format(date).toLowerCase() + " in Buenos Aires"
    )
  }

  return (
    <div
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      className="relative w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700"
    >
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className={`${departureMono.variable} font-mono text-[13px] text-gray-400 dark:text-gray-500 absolute -top-10 right-1/2 translate-x-1/2 whitespace-nowrap bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-md rounded-lg px-3 py-1 z-10`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.2, ease: "easeIn" } }}
          >
            {formatTime(time)}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute w-[1px] h-[30%] bg-gray-600 dark:bg-gray-400"
        style={{ top: "10%", left: "calc(50% - 0.5px)", transformOrigin: "bottom" }}
        animate={{ rotate: hourDegrees }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />
      <motion.div
        className="absolute w-[1px] h-[35%] bg-gray-600 dark:bg-gray-400"
        style={{ top: "5%", left: "calc(50% - 0.5px)", transformOrigin: "bottom" }}
        animate={{ rotate: minuteDegrees }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />
      <motion.div
        className="absolute w-[1px] h-[40%] bg-[#C5B6B6] dark:bg-[#C5B6B6]"
        style={{ top: "2%", left: "calc(50% - 0.5px)", transformOrigin: "bottom" }}
        animate={{ rotate: secondDegrees }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-0.5 h-0.5 rounded-full bg-gray-600 dark:bg-gray-400" />
      </div>
    </div>
  )
}
