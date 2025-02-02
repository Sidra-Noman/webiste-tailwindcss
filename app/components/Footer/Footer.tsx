import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-900 body-font bg-gray-300">
  
   

<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col  text-gray-900 ">
          <Image src={"/images/logo.jpg"} alt="Logo" height={40} width={40}  />
          <span className="ml-3 text-xl">My Brand</span>
        



    <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 copyright —@Siddnom
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
    
      <FaFacebookF className='ml-3 w-6 h-6'/>
      <FaInstagram  className='ml-3 w-6 h-6'/>
      <FaLinkedinIn className='ml-3 w-6 h-6'/>
     
     
    </span>
  </div>
</footer>
  )
}

export default Footer
