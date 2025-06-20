"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ThemeToggleProps {
  lightColor?: string
  darkColor?: string
}

export function ThemeToggle({ lightColor = "gray", darkColor = "gray" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setShowOverlay(true)
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    }, 100) // pequeño retraso antes del cambio

    setTimeout(() => {
      setShowOverlay(false)
    }, 500) // coincide con la duración de la animación
  }

  if (!mounted) return null

  return (
    <>
      <button
        onClick={handleThemeChange}
        className={`flex items-center justify-center w-8 h-8 text-${theme === "dark" ? darkColor : lightColor}-600 hover:text-${theme === "dark" ? "white" : `${lightColor}-800`} transition-colors duration-200`}
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
        <div className="theme-transition-overlay fixed inset-0 pointer-events-none z-50" />
      )}
    </>
  )
}
