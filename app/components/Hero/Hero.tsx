import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="text-gray-900 body-font bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-cover">
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center   ">
    
      <Image src={"/images/jeans.jpg"} alt='hero ' width={600} height={600} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"/>
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">SIDDNOM JEANS</h1>
        <p className="mb-8 leading-relaxed font-serif font-medium">Siddnom Men&apos;s Jeans are crafted to endure the demands of every day while making a statement with sleek, effortless style. Built with durability at their core, these jeans are as ready for city streets as they are for the rugged trails. Each pair offers an unmatched balance of comfort and resilience, making them the perfect choice for those who lead a bold, active life. With quality you can feel and style that commands attention, Siddnom jeans are designed for those who make every moment count. Discover your perfect fit and experience jeans that move with you, wherever the day takes you.</p>
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
           
          <label htmlFor="hero-field" className="leading-7 text-sm  "></label>
            <input type="text" id="hero-field" name="hero-field" placeholder='Search your favourite jeans here' className="w-full bg-gray-100  text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            
          </div>
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
        </div>
         
      
      </div>
    </div>
    


  </section>
  )
}

export default Hero
