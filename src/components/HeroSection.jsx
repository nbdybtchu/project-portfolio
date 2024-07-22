import { PROFILE } from "../constants"
import profilePic from "../assets/hero.jpeg"

const HeroSection = () => {
  return (
    
    <>
        <div className="relative flex min-h-screen items-end justify-center" id="hero">
            <img src={profilePic} alt={PROFILE.name} className="absolute inset-0 z-10 h-full w-full object-cover" />
        </div>
    </>
  )
}

export default HeroSection