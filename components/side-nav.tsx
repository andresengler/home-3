'use client'

import { departureMono } from '../app/fonts'
interface SideNavProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function SideNav({ sections, activeSection, onSectionClick }: SideNavProps) {
  return (
    <nav className="hidden lg:block sticky top-16 h-fit">
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => onSectionClick(section)}
              className={`${departureMono.variable} text-[12px] font-normal tracking-tight whitespace-nowrap w-full text-left py-2 px-4 transition-colors ${
                activeSection === section
                  ? 'text-gray-800 dark:text-white'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
              }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

