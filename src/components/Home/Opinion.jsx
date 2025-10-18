import React from 'react'
import reviewImage1 from '../../assets/review-image-1.jpg'
import reviewImage2 from '../../assets/review-image-2.jpg'
import reviewImage3 from '../../assets/review-image-3.jpg'

const CustomerReview = ({ image, name, job, opinion}) => {
  
  return (
    <div className="customer-card-container flex flex-col items-center pt-20 pb-6 px-6 text-center">
      {/* Avatar */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 p-1 bg-orange-400 rounded-full">
        <img
          className="object-cover h-full w-full border-2 border-white rounded-full"
          src={image}
          alt={name}
        />
      </div>

      {/* Content */}
      <div className="mt-20 flex flex-col items-center gap-1">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{job}</p>
        <span className="mt-3 text-gray-700 italic text-sm leading-relaxed">
          “{opinion}”
        </span>
      </div>
    </div>
  )
}

export default function Opinion() {
  const customersList = [
    {
      image: reviewImage1,
      name: 'Michael Lee',
      job:'Head Chef',
      opinion: 'The layout is simple and elegant — exactly what I needed to showcase our dishes in the best light.'
    },
    {
      image: reviewImage2,
      name: 'Sarah Williams',
      job:'Food Blogger',
      opinion: 'I love how clean and modern the design feels. It makes food look even more delicious.'
    },
    {
      image: reviewImage3,
      name: 'Emily Johnson',
      job: 'Restaurant Owner',
      opinion: 'This website design completely transformed our online presence. Customers find it easier to browse our menu and place orders.'
    }
  ]

  return (
    <section className='md:px-10 px-4 md:py-20 py-16 flex flex-col items-center'>
      <span className='text-orange-400 font-light lg:text-[1.5rem] md:text-[1.25rem] text-[1rem]'>Customer testimonial</span>
      <p className='lg:text-[2.75rem] md:text-[2.5rem] text-[2.25rem] text-black font-semibold md:mb-12 mb-8'>Listen from our client</p>
      <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {customersList.map((customer, id) => (
          <CustomerReview 
            key={id} 
            image={customer.image}
            name={customer.name}
            job={customer.job}
            opinion={customer.opinion}
          />
        ))}
      </div>
    </section>
  )
}
