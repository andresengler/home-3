"use client"

import { useState, useEffect } from "react"
import { BraunClock } from "./BraunClock"


export function Footer() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full mt-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 dark:border-gray-800 py-4 flex justify-between items-center">
          <p
            className={` text-[10px] sm:text-[12px] font-normal tracking-normal text-gray-400 dark:text-gray-500`}
          >
            Keep your mind thinking about whatever is true.
          </p>
          <div className="flex items-center space-x-1.5">
            <BraunClock time={time} />
          </div>
        </div>
      </div>
    </footer>
  )
}

