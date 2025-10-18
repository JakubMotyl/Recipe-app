import React, { useState } from 'react'

export default function Navbar() {
  const navLinks = ['Home', 'About us', 'Dishes', 'Bookings', 'Blogs'];
  const [showList, setShowList] = useState(false)

  const handleShowList = () => {
    setShowList(prev => !prev);
  }
  
  return (
    <nav className='w-full border-b-3'>
      <div className='flex items-center md:px-10 px-4 md:h-24 h-16'>
        <div className="md:w-[45%] h-full flex items-center gap-4">
          <p className='md:text-3xl text-2xl font-bold cursor-pointer'>
            <span className='text-orange-400 font-bold'>Pizza</span>Punk
          </p>
          <div className='bg-black w-[3px] h-full'></div>
        </div>

        {/* Nav List */}
        <div className='flex items-center lg:justify-between md:justify-end justify-between lg:gap-0 md:gap-6 md:w-[55%] pl-2 w-full'>
          <ul className='hidden lg:flex items-center space-x-4'>
            {navLinks.map((item, key) => (
              <li className="text-[0.95rem] text-gray-700 cursor-pointer hover:text-orange-400 duration-200" key={key}>
                {item}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button 
            onClick={handleShowList} 
            className='lg:hidden flex md:text-2xl text-[1.25rem] text-orange-400 cursor-pointer hover:scale-95 duration-200'
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>

          {/* Hamburger List */}

          <div className={`md:hidden fixed inset-0 top-0 right-0 h-full w-full bg-orange-400 text-white flex flex-col 
            py-5 gap-10 duration-500 transition-transform ease-in-out
            ${showList ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}
          >
            <button 
              onClick={handleShowList} 
              className='text-2xl flex justify-end cursor-pointer hover:scale-95 duration-200 origin-right pr-5'
             >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className='flex flex-col gap-4 text-center divide-y-2 divide-white'>
              {navLinks.map((item, key) => (
                <li 
                  className="md:text-3xl text-2xl py-2 hover:ml-2 cursor-pointer duration-200" 
                  key={key}
                >
                  {item}
                </li>
              ))}
            </ul>  
          </div>

          {/* Get started btn */}
          <div>
            <a href="#" className='inline-flex orange-square items-center hover:-translate-y-1 hover:bg-orange-400 hover:text-white'>
              Get Started
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
