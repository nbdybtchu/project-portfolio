import { PROFILE } from "../constants"
import profilePic from "../assets/hero.jpeg"
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <div className="relative flex min-h-screen items-end justify-start" id="hero">
        <img src={profilePic} alt={PROFILE.name} className="absolute inset-0 z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black"></div>
        <div className="z-20 mx-auto pb-20">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide md:text-6xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 font-sans">
            {PROFILE.name}
          </h1>
          <div className="pt-2 text-xs font-extrabold text-center uppercase px-2 text-[#efefef]">
            <TypeAnimation
              sequence={[
                "Full-stack React Developer",
                1000,
                "With a flair for graphic design.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;