import { departureMono } from '../app/fonts'

interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <h2 className={`${departureMono.variable} font-mono text-[12px] font-normal tracking-tight text-gray-400 dark:text-gray-500`}>
        {title}
      </h2>
      {children}
    </section>
  )
}

