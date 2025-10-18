import React from 'react'
import aboutImage from '../../assets/about-image.png'

const RightSection = ({ aboutList }) => {
  return (
    <div className='basis-1/2 flex flex-col justify-end'>
      <span className='text-gray-700 font-medium md:text-[1.5rem] text-[1.25rem]'>About us</span>
      <p 
        style={{fontFamily: '"Playfair Display", serif'}}
        className='md:text-[3rem] text-[2.75rem] font-bold' 
      >
        Why choose us
      </p>
      <div className='md:mb-12 mb-8'>
        <a href="" className='inline-flex items-center text-[0.95rem] gap-4 py-3 px-5 border-orange-400 border-[1px] border-t-2 text-orange-400 group'>
          Learn more
          <i className="fa-solid fa-arrow-right group-hover:translate-x-2 duration-200"></i>
        </a>
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-2 md:gap-x-24 gap-x-8 gap-y-8'>
        {aboutList.map((item, id) => (
          <div key={id} className='flex flex-col items-center gap-4'>
            <div className='md:text-5xl text-4xl p-5 border-2 border-orange-400 text-orange-400 bg-white'>
              {item.icon}
            </div>
            <span className='text-orange-400 text-[0.95rem] text-center'>{item.desc}</span>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const aboutList = [
    {icon: <i className="fa-regular fa-handshake"></i>, desc: 'Safety Standards'},
    {icon: <i className="fa-regular fa-truck"></i>, desc: 'Fast Delivery'},
    {icon: <i className="fa-regular fa-lemon"></i>, desc: 'Fresh Ingredients'},
    {icon: <i className="fa-regular fa-pen-to-square"></i>, desc: 'Custom Orders'},
    {icon: <i className="fa-regular fa-clipboard"></i>, desc: 'Wide Menu'},
    {icon: <i className="fa-solid fa-medal"></i>, desc: 'Rewards Program'}
  ]

  return (
    <section className='md:min-h-[100vh] h-auto md:px-10 px-4 md:py-20 py-16 bg-gray-200 
      flex lg:flex-row flex-col lg:gap-24 md:gap-18 gap-12'
    >
      <div className='basis-1/2'>
        <img 
          src={aboutImage} 
          className='w-full lg:h-full h-auto object-cover object-center rounded'
          alt="About Image" 
        />
      </div>
      <RightSection aboutList={aboutList} />
    </section>
  )
}
