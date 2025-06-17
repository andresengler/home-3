'use client'

import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { departureMono } from '../app/fonts'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const menuItems = [
  { name: 'About', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Writings', href: '/writings' },
]

export function Menu() {
  const pathname = usePathname()
  const { theme } = useTheme()

  const textColorActive = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textColorInactive = theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'

  return (
    <nav className="flex items-center space-x-4">
      <ul className="flex items-center space-x-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span
                className={`${departureMono.variable} text-[12px] font-normal tracking-tight transition-colors duration-200 ${
                  pathname === item.href ? textColorActive : textColorInactive
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ThemeToggle lightColor="gray" darkColor="gray" />
      </div>
    </nav>
  )
}
