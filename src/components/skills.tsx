import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Database, Cloud, Globe, Terminal } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: Globe, description: "React, TypeScript, HTML, CSS, Tailwind" },
  { name: "Backend Development", icon: Server, description: "C#, .NET, RESTful APIs" },
  { name: "Database Management", icon: Database, description: "SQL, CosmosDB, Entity Framework" },
  { name: "Cloud Services", icon: Cloud, description: "Azure, Azure Functions, Azure Static Web Apps" },
  { name: "Version Control", icon: Code, description: "Git, GitHub, Azure DevOps" },
  { name: "DevOps", icon: Terminal, description: "CI/CD, Docker, Terraform" },
]

export const Skills = () => {
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
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <skill.icon className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            </div>
            <p className="text-gray-600">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

