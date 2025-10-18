import React from 'react'
import heroImage from '../../assets/hero-image.png'

const HeroLeft = () => {
  return (
    <div className='md:w-[45%] flex-1 min-h-full bg-gray-200 flex flex-col md:py-10 py-6 md:px-10 px-4 md:justify-between gap-6 md:border-r-3 box-border'>
      <span 
        className='lg:text-[5rem] md:text-[3.75rem] text-[2.25rem] font-medium leading-tight'
        style={{fontFamily: '"Playfair Display", serif'}}
      >
        Naturally <br /> Nourishing <br /> Taste
      </span>
      <p className='text-gray-700 lg:text-[1.15rem] md:text-[1rem] text-[0.95rem] break-words text-center mt-4'>
        We believe great food shouldn't take hours. That's why we serve chef-crafted meals made with fresh ingredients, delivered fast
        and packed with bold flavors that satisfy every craving.
      </p>
      <div className='flex items-center gap-3 w-full'>
        <input 
          className='orange-square w-full uppercase tracking-wider placeholder:tracking-normal placeholder:normal-case outline-none'
          type="text" 
          placeholder='Search your favorite food' 
        />
        <div className='bg-red-400 hover:bg-red-500 duration-200 text-white md:text-2xl text-[1.25rem] rounded md:py-3 py-2 md:px-5 px-3 flex items-center cursor-pointer'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
};

const HeroStatistics = ({ number, desc }) => {
  return (
    <div className="px-2 py-4 flex flex-col items-center justify-center gap-2 w-full h-full">
      <p
        className="lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-semibold"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {number}
      </p>
      <span className="lg:text-[1rem] md:text-[0.9rem] text-[0.8rem] text-gray-700 text-center font-light">
        {desc}
      </span>
    </div>
  )
}


const HeroRight = () => {
  return (
    <div className='md:w-[55%] hidden md:flex flex-1 flex-col'>
      {/* Obrazek */}
      <div className='flex-1 overflow-hidden'>
        <img 
          src={heroImage} 
          alt="Hero Image" 
          className='object-cover w-full h-full'
        />
      </div>
      {/* Statystyki */}
      <div className='hidden md:flex w-full items-stretch justify-between divide-x-[2px] divide-black'>
        <HeroStatistics number={'80+'} desc={'Breakfast Option'} />
        <HeroStatistics number={'95%'} desc={'On-time Delivery'} />
        <HeroStatistics number={'50+'} desc={'Years of experience'} />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className='flex md:flex-row flex-col w-full h-fit md:min-h-[calc(100vh-6rem)] border-b-3'>
      <HeroLeft />
      <HeroRight />
    </section>
  )
}
