import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="body-font bg-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-4">
          <Image src={"/images/logo.jpg"} alt="Logo" height={40} width={40} />
          <span className="ml-3 text-xl">My Brand</span>
        </div>

        {/* Navigation Links */}
        <div className="md:ml-auto text-gray-900">
          <ul className="flex flex-wrap items-center text-base justify-center">
            <li>
              <Link href="/" className="mr-5 hover:text-white">Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="mr-5 hover:text-white">About
              </Link>
            </li>
            <li>
              <Link href="/category"  className="mr-5 hover:text-white">Category
              </Link>
            </li>
            <li>
              <Link href="/contact"  className="mr-5 hover:text-white">Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>




    </header>
  )
}

export default Header
