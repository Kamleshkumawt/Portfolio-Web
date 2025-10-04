import React from 'react'
import Nav from '../components/Nav'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 w-full min-h-screen'>
      <Nav/>
      <div className="wrapper max-w-7xl mx-auto pt-25 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-start gap-8 w-full md:w-2/3">
          <h1 className="text-[#663399] tracking-[8px] text-3xl sm:text-4xl font-bold mb-2 animate-pulse">
            KAMLESH KUMWT
          </h1>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            FULL-STACK <br /> WEB DEVELOPER
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl">
            Hi, I'm Kamlesh! I craft modern, scalable web applications using the MERN stack and more. With a passion for clean code, and problem solving, I love building products that make a difference. I enjoy collaborating, learning new tech, and sharing knowledge with the community.
          </p>
          <div className="gap-4 mb-6 hidden md:flex">
            <a href='#Work' className="p-4 border border-white rounded-xl cursor-pointer font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition-transform">
              See the Latest Works
            </a>
            <a
              href="#Contact"
              className="p-4 border border-white bg-white text-gray-900 rounded-xl cursor-pointer font-semibold hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl animate-bounce">↓</span>
            <span
              className="text-gray-400 text-base cursor-pointer hover:text-white transition"
              onClick={() => {
                const aboutSection = document.getElementById('About');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
            >
              Scroll to explore more
            </span>
          </div>
        </div>
        <img
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl m-8 hidden md:block drop-shadow-amber-50 drop-shadow-sm"
          src="https://static.vecteezy.com/system/resources/thumbnails/042/055/246/small_2x/ai-generated-businessman-portrait-portrait-of-businessman-png.png"
          alt="Kamlesh Kumwt Portrait"
        />
      </div>
      {/* <div className="text-[10vw] absolute left-0 bottom-0 w-full font-sans whitespace-nowrap text-[#ffffff09] pointer-events-none select-none">
        Writer • Content Creator • Influencer
      </div> */}
    </div>
  )
}

export default Hero