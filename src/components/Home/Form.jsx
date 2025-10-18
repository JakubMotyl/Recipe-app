import React, { useEffect, useState } from 'react'
import formImage from '../../assets/form-image.png'

const FormRight = () => {
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const today = new Date().toISOString().split('T')[0];
      // console.log(today);
      setMinDate(today);
    }
    handleDate();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have send a message!')
  }

  return (
    <div className='basis-1/2 flex flex-col justify-between lg:gap-0 gap-12'>
      <p className='lg:text-[1.15rem] md:text-[1rem] text-[0.95rem] text-gray-700 leading-relaxed'>
        Schedule your appointment today for expert guidance and personalized
        support - quick, easy, and jest a few clicks away.
      </p>

      {/* Form content */}
      <form 
        action="#" 
        type='submit' 
        onSubmit={handleSubmit}
        className='flex flex-col gap-4'
      >
        {/* Full name */}
        <input 
          className='input-form'
          type="text" 
          id='fname' 
          placeholder='Full name' 
          required
        />

        {/* Email and Phone number */}
        <div className='flex w-full sm:flex-row flex-col gap-4'>
          <input 
            className='input-form basis-1/2'
            type="email" 
            id='email' 
            placeholder='Email Adress'
            required
           />
          <input 
            className='input-form basis-1/2'
            type="tel" 
            id='tel' 
            placeholder='Phone number' 
            required
          />
        </div>

        {/* Date and Time */}
        <div className='flex w-full sm:flex-row flex-col gap-4'>
          <input 
            className='input-form basis-1/2'
            type="date" 
            id='date'
            required
            min={minDate}
          />
          <input 
            className='input-form basis-1/2'
            type="time" 
            id='time' 
            required
          />
        </div>

        {/* Message */}
        <textarea 
          id="message" 
          placeholder='Message'
          className='input-form h-32 resize-none'
        ></textarea>

        {/* Submit */}
        <div className='flex justify-center'>
          <input 
            type="submit" 
            id='submit' 
            value='Send a message' 
            className='w-full py-[10px] px-9  cursor-pointer bg-orange-400 text-white border-2 border-orange-400
              rounded duration-200 hover:bg-white hover:text-orange-400'
          />
        </div>
      </form>      

    </div>
  )
}

export default function Form() {
  return (
    <section 
      className="md:min-h-[100vh] h-auto md:px-10 px-4 p-8
      flex flex-col md:gap-12 gap-8"
    >
      {/* Form Title */}
      <p
        className='font-medium md:text-[3rem] text-[2.5rem]'
        style={{fontFamily: '"Playfair Display", serif'}}
      >
        Unordinary Experience
      </p>

      {/* Form content */}
      <div className='flex-1 flex lg:flex-row flex-col lg:gap-24 md:gap-16 gap-12'>
        {/* Left image */}
        <div className="basis-1/2">
          <img 
            src={formImage} 
            className='w-full lg:h-full h-auto object-cover object-center rounded'
            alt="Reservation form" 
          />
        </div>

        {/* Right form section */}
        <FormRight />
      </div>
    </section>
  )
}
