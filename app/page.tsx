import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Education } from '@/components/portfolio/education'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Internship } from '@/components/portfolio/internship'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { Particles } from '@/components/portfolio/particles'
import {
  BackgroundOrbs,
  BackToTop,
  LoadingScreen,
  MouseGlow,
  ScrollProgress,
} from '@/components/portfolio/ui-effects'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <BackgroundOrbs />
      <Particles />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Internship />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
