import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img 
            className='w-full h-screen object-cover'
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-6xl text-5xl font-bold text-gray-500 bg-black/50 py-1'>I'm Harrison Sparks</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-500 bg-black/50 py-1'>I'm a
            <TypeAnimation
      sequence={[
        'Developer',
        2000, // delay
        'Coder',
        2000,
        'Web Developer',
        2000,
        'Tech Enthusiast',
        2000,
        'AI Startup Architect and Developer',
        2000,
        'AI Developer',
        2000,
        'Habitual Reader',
        2000,
        'Habitual Learner'
      ]}
      wrapper="span"
      speed={45}
      style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
        <a href="https://twitter.com/theallSparky_"><FaTwitter className='cursor-pointer hover:scale-110' size={45} /></a>
        <a href="https://www.facebook.com/harry.sparks.3914"><FaFacebookF className='cursor-pointer hover:scale-110' size={45} href="https://www.facebook.com/harry.sparks.3914" /></a>
        <a href="https://www.linkedin.com/in/harrisonsparks/" ><FaLinkedinIn className='cursor-pointer hover:scale-110' size={45} href="https://www.linkedin.com/in/harrisonsparks/" /></a>
    </div>
        </div>
        </div>
    </div>
  )
}

export default Main