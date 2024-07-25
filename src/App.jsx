import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-[#121212] tracking-tighter text-gray-200 antialiased">
      <Intro />
      <div>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectsSection />
      <ContactForm />
      <Footer />
      </div>
    </main>
  )
}

export default App