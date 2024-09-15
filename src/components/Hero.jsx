// import profilepic from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden:{x:-100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            delay:delay
        }
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-100 pb-4 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial = "hidden"
                    animate="visible"
                    className='pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Sasank Tanikella</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial = "hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-red-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Software Engineer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial = "hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-dark tracking-tighter '>
                        I am a passionate software engineer with a background in computer science and a strong foundation in software development methodologies. I am always eager to learn and improve my skills.
                    </motion.p>
                </div>
                {/* <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={profilepic} alt="profilepicture" />
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Hero