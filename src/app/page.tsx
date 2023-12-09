import Hero from './components/hero'
import Contact from './components/contact'
import Skill from './components/skill'
import About from './components/about'
import Project from './components/project'
import Navbar from './components/navbar'
import Footer from './components/footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
