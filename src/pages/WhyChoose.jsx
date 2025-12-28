import React from 'react'
import { Card } from '../components'
import { card5, chooseSection, experience1,experience2,experience3, heart } from '../assets'

function WhyChoose() {
  return (
    <section className='flex flex-col gap-[3rem] items-stretch sm:flex-row sm:gap-[5rem] sm:justify-between px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] pt-[3rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[6rem]'>
      {/* Image Wrapper (IMPORTANT) */}
      <div className="relative w-full sm:w-[45%]">

        {/* Background Image */}
        <img
          src={chooseSection}
          alt=""
          className="w-full h-full object-cover z-10 "
        />
        

        {/* Card on Image */}
         <Card
          className="
            absolute
            left-1/2
            bottom-[0%]
            -translate-x-1/2
            z-20
            w-[70%]
            xs:w-[65%]
            ss:w-[55%]
            sm:w-[63%]
            

          "
          image={card5}
          imageStyle="
            h-[7rem]
            vs:h-[8rem]
            xs:h-[15rem]
            ss:h-[18rem]
            sm:h-[8rem]
            md:h-[10rem]
            

          "
          topContent={
            <div className="flex items-center justify-center bg-white rounded-[0.5rem] p-[0.5rem] absolute right-0">
              <img src={heart} alt="" className="w-[1rem] h-[1rem]" />
            </div>
          }
        >
        <div className=''>
            <div className="flex justify-between items-center mt-[0.5rem]">
              <h3 className="text-[rgba(16,45,71,1)] font-bold">
                $250,000
              </h3>
              <p className="bg-[rgba(209,242,255,1)] rounded-[0.25rem] px-[0.7rem] py-[0.3rem] text-[12px] font-light">
                Illinois
              </p>
            </div>
          
            <p className="text-[rgba(84,117,147,1)] text-[0.9rem] mt-[-0.1rem]">
              Palm Villa
            </p>
        </div>
        </Card>
      </div>

      {/* Info */}
      <div className='flex flex-col justify-center sm:w-[55%]'>
        <h3 className='text-[rgba(16,45,71,1)] font-bold text-[1.3rem] xs:text-[1.5rem] sm:text-[1.3rem] mmd:text-[1.5rem] md:text-[1.6rem]'>Why People Choose Property</h3>
        {/* container */}
        <div className='flex flex-col gap-[1.5rem] mt-[2rem] md:mt-[3rem] xs:gap-[1.7rem] sm:gap-[2.2rem] mmd:gap-[2rem] '>
            {/* card */}
          <div className='flex items-center gap-[1.8rem]'>
            <img src={experience1} alt="" className='w-[3rem] xmd:w-[4rem] '/>
            <div className=''>
                <h4 className='text-[rgba(16,45,71,1)] font-medium mb-[0.5rem] xmd:text-[1.4rem]'>Greate Experience</h4>
                <p className='text-[rgba(84,117,147,1)] text-[0.6rem] mmd:text-[0.7rem] md:text-[0.8rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
            </div>
          </div>
          {/* card */}
          <div className='flex items-center gap-[1.8rem]'>
            <img src={experience2} alt="" className='w-[3rem] xmd:w-[4rem]'/>
            <div className=''>
                <h4 className='text-[rgba(16,45,71,1)] font-medium mb-[0.5rem] xmd:text-[1.4rem] '>Greate Experience</h4>
                <p className='text-[rgba(84,117,147,1)] text-[0.6rem] mmd:text-[0.7rem] md:text-[0.8rem] '>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
            </div>
          </div>
          {/* card */}
          <div className='flex items-center gap-[1.8rem]'>
            <img src={experience3} alt="" className='w-[3rem] xmd:w-[4rem]'/>
            <div className=''>
                <h4 className='text-[rgba(16,45,71,1)] font-medium mb-[0.5rem] xmd:text-[1.4rem] '>Greate Experience</h4>
                <p className='text-[rgba(84,117,147,1)] text-[0.6rem] mmd:text-[0.7rem] md:text-[0.8rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
            </div>
          </div>
        </div>
        
      </div>

    </section>

  )
}

export default WhyChoose