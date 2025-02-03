import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Streets Heaver",
    period: "January 2024 - PRESENT",
    description:
      "Led a small team of frontend engineers to rewrite a legacy frontend from Javascript to Typescript, and delivered this under tight time constraints at a high quality.",
  },
  {
    title: "Software Engineer",
    company: "Streets Heaver",
    period: "December 2022 - January 2024",
    description:
      "Played a pivotal role in getting to production the company's first ever multi-tenant cloud based application.",
  },
  {
    title: "Junior Software Engineer",
    company: "Streets Heaver",
    period: "April 2022 - December 2022",
    description:
      "Maintained a React application fixing bugs and assisting internal stakeholders when issues were found.",
  },
]

export const Experience = () => {
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
        Experience
      </motion.h2>
      <div className="relative border-l-2 border-gray-300">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 ml-4"
          >
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{exp.period}</time>
            <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-600">{exp.company}</p>
            <p className="text-base font-normal text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

