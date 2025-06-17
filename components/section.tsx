import { departureMono } from '../app/fonts'

interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <h2 className={`${departureMono.variable} font-mono text-[14px] font-normal tracking-tight text-[#8b7664]`}>
        {title}
      </h2>
      {children}
    </section>
  )
}
