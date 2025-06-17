"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function BlurEffect() {
  const { resolvedTheme } = useTheme()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = resolvedTheme === "dark"

  const blurStyle = {
    background: isDark
      ? `linear-gradient(0deg, 
          rgba(0, 0, 0, 0.015) 0%,
          rgba(0, 0, 0, 0.01) 15%,
          rgba(0, 0, 0, 0.005) 30%,
          rgba(0, 0, 0, 0.002) 45%,
          rgba(0, 0, 0, 0.001) 60%,
          rgba(0, 0, 0, 0.0005) 75%,
          rgba(0, 0, 0, 0) 100%)`
      : `linear-gradient(0deg, 
          rgba(255, 255, 255, 0.015) 0%,
          rgba(255, 255, 255, 0.01) 15%,
          rgba(255, 255, 255, 0.005) 30%,
          rgba(255, 255, 255, 0.002) 45%,
          rgba(255, 255, 255, 0.001) 60%,
          rgba(255, 255, 255, 0.0005) 75%,
          rgba(255, 255, 255, 0) 100%)`,
  }

  const calculateBlur = (scroll: number) => {
    const maxBlur = 8
    const scrollThreshold = 400
    const progress = Math.min(scroll / scrollThreshold, 1)
    return maxBlur * (progress * progress * progress)
  }

  const calculateGlow = (scroll: number) => {
    const maxGlow = 15
    const scrollThreshold = 400
    const progress = Math.min(scroll / scrollThreshold, 1)
    return maxGlow * (progress * progress)
  }

  const glowIntensity = calculateGlow(scrollY)

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-40">
      <div
        className="w-full h-full"
        style={{
          ...blurStyle,
          backdropFilter: `blur(${calculateBlur(scrollY)}px)`,
          WebkitBackdropFilter: `blur(${calculateBlur(scrollY)}px)`,
          boxShadow: isDark
            ? `0 0 ${glowIntensity}px rgba(255, 255, 255, 0.03)`
            : `0 0 ${glowIntensity}px rgba(255, 255, 255, 0.15)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? `radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.03), transparent ${50 + glowIntensity}%)`
            : `radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.15), transparent ${50 + glowIntensity}%)`,
        }}
      />
    </div>
  )
}

