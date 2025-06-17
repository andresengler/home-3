import Link from 'next/link'

interface ProjectLinkProps {
  href: string
  title: string
  description: string
  showArrow?: boolean
}

export function ProjectLink({ href, title, description, showArrow = true }: ProjectLinkProps) {
  return (
    <Link href={href} className="block group">
      <div className="flex items-center gap-1">
        <h3 className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] font-light text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors`}>
          {title}
        </h3>
        {showArrow && (
          <span className="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em]">
            ↗
          </span>
        )}
      </div>
      <p className={`${ppNeueMontrealRegular.variable} font-sans text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-0.5`}>
        {description}
      </p>
    </Link>
  )
}

