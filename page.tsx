'use client'

import { motion } from 'framer-motion'
import { ProjectLink } from './components/project-link'
import { Section } from './components/section'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 space-y-16">
        <header className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-medium"
          >
            John Doe
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            <span className="italic">Crafting interfaces.</span> Building polished software and web experiences. 
            Experimenting with magical details in user interfaces.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <Section title="Building">
            <ProjectLink 
              title="Design System" 
              description="A comprehensive UI kit with 50+ components."
            />
            <ProjectLink 
              title="Analytics Dashboard" 
              description="Real-time data visualization platform."
            />
          </Section>

          <Section title="Projects">
            <ProjectLink 
              title="Component Library" 
              description="A composable component system with magical interactions."
            />
            <ProjectLink 
              title="CLI Tools" 
              description="Productivity tools for developers."
            />
          </Section>

          <Section title="Writing">
            <ProjectLink 
              title="React Patterns" 
              description="Modern solutions for common problems."
            />
            <ProjectLink 
              title="Web Performance" 
              description="Optimizing for the modern web."
            />
          </Section>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium">Now</h2>
          <p className="text-gray-600 leading-relaxed">
            Currently focused on building intuitive interfaces and exploring new technologies.
            The web is an endless medium of opportunity and creativity of which I've only scratched
            the surface.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Enjoying deep, dark, boring dance music: songs that set the pace in the first ten seconds
            and maintain it for the next ten minutes. Deep is a curation of my favorites.
          </p>
        </motion.section>
      </div>
    </div>
  )
}

