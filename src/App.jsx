import SkipLink from './components/SkipLink'
import CustomCursor from './components/CustomCursor'
import VisualBackground from './components/VisualBackground'
import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

import { useDocumentLanguage } from './hooks/useDocumentLanguage'

function App() {
  useDocumentLanguage()

  return (
    <div className="app-noise relative min-h-screen overflow-x-hidden bg-hack-black text-white">
      <SkipLink />
      <CustomCursor />
      <VisualBackground />

      <Header />

      <main id="main-content" tabIndex="-1" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App