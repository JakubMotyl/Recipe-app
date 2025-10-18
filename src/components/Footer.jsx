import React from 'react'

export default function Footer() {
  const footerData = [
    {
      title: "Company",
      links: [
        { label: "About us", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", url: "#" },
        { label: "Contact us", url: "#" },
        { label: "Privacy Policy", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Delivery", url: "#" },
        { label: "Custom Orders", url: "#" },
        { label: "Rewards", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", url: "#" },
        { label: "Terms & Conditions", url: "#" },
        { label: "Support", url: "#" },
      ],
    }
  ];

  
  return (
    <footer className='md:px-10 px-4 md:pt-20 pt-16 pb-4 flex flex-col'>
      {/* Name */}
      <p className='md:text-5xl text-4xl font-bold md:mb-12 mb-8'>
        <span className='text-orange-400 font-bold'>Pizza</span>Punk
      </p>

      {/* Footer Links */}
      <div className='grid md:grid-cols-4 grid-cols-2 gap-8'>
        {footerData.map((item, id) => (
          <div key={id} className='flex flex-col gap-4'>
            <span className='md:text-[1.15rem] text-[1.05rem] text-orange-400 font-medium'>{item.title}</span>
            <ul className='flex flex-col ml-3 space-0.5'>
              {item.links.map((link, id) => (
                <li key={id} className='md:text-[0.95rem] text-[0.85rem] font-light hover:text-gray-500'><a href={link.url}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className='h-[3px] w-full bg-orange-400 mt-10 mb-4'></div>

      {/* Copyright */}
      <div className='flex items-center justify-between'>
        <span className='font-light md:text-[0.85rem] text-[0.75rem]'>Copyright © PizzaPunk</span>
        {/* Back to Top */}
        <div className='flex items-center gap-4'>
          <span className='font-light md:text-[0.85rem] text-[0.75rem]'>Back to top</span>
          <button 
            className='py-1 px-2 w-fit bg-transparent border-2 border-orange-400 duration-200
            text-orange-400 md:text-[0.85rem] text-[0.75rem] cursor-pointer hover:-translate-y-1 hover:bg-orange-400 hover:text-white'
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}
