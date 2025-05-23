import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
                <img src={logo} alt="logo" width={100} className="mb-4"/>
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="mt-4 text-center text-sm font-semibold tracking-wide text-gray-500">
            &copy; Booker Arib | Web Developer | All rights reserved.
        </p>
    </div>
  )
}

export default Footer