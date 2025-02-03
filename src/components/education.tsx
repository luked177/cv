import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const educations = [
  {
    degree: "MComp in Computer Science",
    school: "University of Lincoln",
    period: "September 2018 - May 2022",
    description:
      "Achieved an MComp masters degree with modules including Advanced Programming, Maths for Computing and Machine Learning.",
  },
  {
    degree: "BTEC Level 3 Extended Diploma in Software Development",
    school: "Shipley College",
    period: "September 2016 - July 2018",
    description: "Distinction*, Distinction*, Distinction*",
  },
]

export const Education = () => {
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
        Education
      </motion.h2>
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{edu.degree}</h3>
            <p className="text-gray-600 mb-2">{edu.school}</p>
            <p className="text-gray-500 mb-4">{edu.period}</p>
            <p className="text-gray-600">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

