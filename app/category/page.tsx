import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from 'next/image'

const page = () => {
  return (
   
    <section className="text-gray-600 body-font bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400">
         <Header/>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 underline font-serif">
        Perfect Fit for Every Move</h1>
       
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-serif">Siddnom Jeans offers a range of styles crafted for every lifestyle whether you need rugged durability or sleek urban design.Explore our categories to find the perfect fit that&apos;s as bold and versatile as you are.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image  src={"/images/skinny.jpg"} alt="content" height={40} width={250} className=" rounded object-cover object-center mb-6"/>
          <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Category 1</h2>
          <h2 className="text-lg text-gray-900 font-medium mb-4">Skinny Jeans</h2>
          <p className="leading-relaxed text-base ">Men&apos;s skinny jeans offer a sleek, modern fit that hugs the legs for a sharp, streamlined look. Perfect for a night out or casual wear, these jeans bring style and comfort together effortlessly.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="rounded  object-cover object-center mb-6" src="/images/cargo.jpg" alt="cargo" height={40} width={250}/>
          <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font font-serif">Category 2</h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Cargo Jeans</h2>
          <p className="leading-relaxed text-base ">Cargo jeans combine rugged style with practical utility, featuring spacious pockets perfect for carrying essentials. Ideal for outdoor adventures or streetwear looks.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image className="rounded  object-cover object-center mb-6" src="/images/slimfit.jpg" alt="slimfit" height={40} width={250}/>
          <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font font-serif">Category 3</h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 ">Slimfit Jeans</h2>
          <p className="leading-relaxed text-base ">Slimfit jeans provide a modern, tailored look that&apos;s snug yet comfortable from hip to ankle. Versatile and stylish, they&apos;re perfect for both casual days and dressed up nights.</p>
        </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image className="rounded  object-cover object-center mb-6" src="/images/straightleg.jpg" alt="slimfit" height={40} width={250}/>
          <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font font-serif">Category 4</h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 ">Straight leg Jeans</h2>
          <p className="leading-relaxed text-base ">Straightleg jeans offer a timeless, relaxed fit that runs evenly from hip to hem, giving a classic silhouette. They are comfortable and versatile  for any casual or semiformal occasion.</p>
          
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</section>
  )
}

export default page
