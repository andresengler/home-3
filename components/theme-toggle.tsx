"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setShowOverlay(true)

    setTimeout(() => {
      setTheme(nextTheme)
    }, 100)

    setTimeout(() => {
      setShowOverlay(false)
    }, 600)
  }

  if (!mounted) return null

  return (
    <>
      <button
        onClick={handleThemeChange}
        className="flex items-center justify-center w-8 h-8 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {showOverlay && (
        <div
          className={`theme-transition-overlay ${theme === "dark" ? "light" : "dark"} animate-fade`}
        />
      )}
    </>
  )
}
