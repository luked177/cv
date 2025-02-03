import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Swype",
    description: "Tinder, but for news stories. Swipe left or right to get the latest news stories.",
    link: "https://swype-xi.vercel.app/",
    tech: ["Next.js", "TypeScript", "Azure AI", "Tailwind", "React Server Components"],
  },
  {
    title: "Baggins Donuts",
    description: "Donut moment tracker. Fun way to track donut moments by team members.",
    link: "https://baggins-donuts.vercel.app/",
    tech: ["React", "JavaScript", "C#", "CosmosDB"],
  },
  {
    title: "Puzzlify",
    description: "An online daily puzzle game based off of the board game The Genius Square.",
    link: "https://puzzlify-two.vercel.app/",
    tech: ["React", "TypeScript", "Azure Timer Functions"],
  },
]

export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="my-16">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-gray-800"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View Project <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

