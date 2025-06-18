return (
  <div className="font-sans min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white relative pb-2 transition-colors duration-200">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <h2 className="font-mono text-[14px] font-normal tracking-tight text-[#8b7664]">
          Resume
        </h2>
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Presenting a resume might feel a bit outdated, but here's a more detailed profile of what I've been up to over the past ten years—a brief overview of the companies I've worked with, mentions in various publications, and more.
        </p>
      </div>

      <nav className="fixed left-[10%] top-[160px] hidden lg:block">
        <ul className="space-y-2">
          {resumeData.map((section) => (
            <li key={section.title}>
              <button
                onClick={() => {
                  const el = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`font-mono text-[12px] font-normal tracking-tight whitespace-nowrap transition-colors ${
                  activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                    ? 'text-gray-800 dark:text-white'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-10">
        {resumeData.map((section) => (
          <div key={section.title}>{renderSection(section)}</div>
        ))}
      </div>
    </div>
  </div>
)
