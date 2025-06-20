'use client'

import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { departureMono } from '../app/fonts'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const menuItems = [
  { name: 'About', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Writings', href: '/writings' },
]

export function Menu() {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="flex items-center space-x-4">
      <ul className="flex items-center space-x-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const isDark = resolvedTheme === 'dark'

          const textClass = isActive
            ? isDark
              ? 'text-white'
              : 'text-gray-800'
            : isDark
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-800'

          return (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight transition-colors duration-300 ${textClass}`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <ThemeToggle lightColor="gray" darkColor="gray" />
      </div>
    </nav>
  )
}
