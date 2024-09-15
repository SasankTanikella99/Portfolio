
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RxResume } from "react-icons/rx";


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
            <RxResume />
            <FaLinkedin />
            <FaGithub />
            <FaXTwitter />

        </div>
    </nav>
  )
}

export default Navbar