import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6 underline">Our competitive advantage</h1>

    <p className="mb-6 text-gray-900 sm:text-lg md:mb-8">
     Siddnom Jeans stands out as a premium men’s denim brand by combining exceptional craftsmanship, sustainable practices, and innovative fabric technologies like stretch, moisture-wicking, and fade resistance. Offering a perfect fit for every body type with stylish and versatile designs, Siddnom caters to modern, fashion-conscious men. Its competitive pricing ensures premium quality at great value, while customization options allow for personalized style. With a strong brand identity rooted in boldness and confidence, backed by ethical manufacturing and celebrity endorsements, Siddnom Jeans delivers unmatched durability, comfort, and style, creating a loyal customer base and setting itself apart in the competitive denim market.<br /><br />
      
    </p>

    <h2 className="mb-2 text-2xl font-bold text-gray-900 text-center sm:text-3xl md:mb-4">About us</h2>

    <p className="mb-6 text-gray-900 sm:text-lg md:mb-8">At Siddnom Jeans, we celebrate the art of denim and the spirit of individuality. Inspired by the modern man’s drive to explore, create, and conquer, our journey began with a mission to redefine men’s fashion through exceptional jeans that blend comfort, durability, and timeless style. Every pair of Siddnom Jeans tells a story – of innovation, sustainability, and an uncompromising commitment to quality.

We believe denim is more than fabric; it’s a canvas for self-expression. From our thoughtfully crafted designs to our eco-conscious practices, everything we do is rooted in making you look good and feel even better. Whether it’s for the everyday grind or unforgettable adventures, Siddnom Jeans is here to accompany you every step of the way. Because at Siddnom, it’s not just about the jeans – it’s about the man who wears them.
</p>

     
    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <Image src="/images/image.jpg" alt="image 1" width={150} height={100}   className=" w-full h-full object-cover object-center" />
    </div>

    
  </div>
</div>
<Footer/>
    </div>
  )
}

export default page
