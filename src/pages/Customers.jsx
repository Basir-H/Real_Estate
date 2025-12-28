import React from 'react'
import { customers, number } from '../assets'

function Customers() {
  return (
    <section>
        {/* container */}
        <div className='flex flex-col gap-[4rem] px-[1rem] ss:flex-row sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
            {/* image */}
            <div>
                <img src={customers} alt="" />
            </div>
            {/* info */}
            <div className='flex flex-col gap-[1.7rem] ss:gap-[1.4rem] ss:mt-[2rem]'>
                <img src={number} alt="" className='w-[4rem] xs:w-[5rem]'/>
                <p className='text-[rgba(84,117,147,1)] text-[0.7em] xs:text-[1rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Various versions have evolved over the years, sometimes</p>
                <h3 className='text-[rgba(16,45,71,1)] text-[0.9rem] xs:text-[1rem]'>Stephanie sue<span className='block text-[rgba(84,117,147,1)] font-light text-[0.6rem] xs:text-[0.7rem]'>Designation</span></h3>
            </div>            
        </div>
        {/* footer */}
        <div className='flex ml-[1rem] rounded-[12px] sm:ml-[3rem] md:ml-[6rem] lg:ml-[10rem] bg-[rgba(47,115,242,1)] text-white '>
            {/* Happy customer */}
            <div className='border border-l-0 border-t-0 border-b-0 border-r-[rgba(53,180,246,1)] p-[1rem] pr-0 pt-[1.5rem]'>
                <h4 className='font-semibold flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>99%<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] mmd:pr-[1rem]'>Happy Customer</span></h4>
            </div>
            {/* property sales */}
            <div className='border border-l-0 border-t-0 border-b-0 border-r-[rgba(53,180,246,1)] p-[1rem] pr-0 pt-[1.5rem]'>
                <h4 className='font-semibold  flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>780K<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] mmd:pr-[1rem]'>Property Sales</span></h4>
            </div>
            {/* Award */}
            <div className='p-[1rem] pr-0 pt-[1.5rem]'>
                <h4 className='font-semibold  flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>160+<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] ss:pr-[0.8rem] mmd:pr-[1rem]'>Award Wining</span></h4>            
            </div>
        </div>
    </section>
  )
}

export default Customers