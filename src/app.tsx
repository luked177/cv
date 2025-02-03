import {Header} from "./components/header"
import {Skills} from "./components/skills"
import {Experience} from "./components/experience"
import {Projects} from "./components/projects"
import {Education} from "./components/education"

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
    </div>
  )
}

