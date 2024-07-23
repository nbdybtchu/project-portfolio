import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-[#121212] tracking-tighter text-gray-200 antialiased">
      {/* <Intro /> */}
      <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      </div>
    </main>
  )
}

export default App