import { motion } from "framer-motion"
import { Linkedin, Github, Twitter } from "lucide-react"

export const Header = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <img
            src="/profile.jpg"
            alt="Luke Dore"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold mb-4 text-gray-800"
        >
          Luke Dore
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl mb-8 text-gray-600"
        >
          Senior Software Engineer
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://www.linkedin.com/in/luke-dore-77a42b233" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" />
          </a>
          <a href="https://github.com/luked177" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors" />
          </a>
          <a href="https://x.com/lukedore_" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-8 h-8 text-blue-400 hover:text-blue-600 transition-colors" />
          </a>
        </motion.div>
      </div>
    </header>
  )
}

