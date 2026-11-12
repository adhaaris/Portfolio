import About from './About'
import './App.css'
import Contact from './Contacts'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>


    )
}