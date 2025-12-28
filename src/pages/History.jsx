import React from 'react'
import { Button } from '../components'
import { history } from '../assets'

function History() {
  return (
    <section className='flex flex-col ss:flex-row relative z-10 bg-[rgba(243,249,253,1)] mt-[3rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[6rem] '>
        {/* poistion - absolute card */}
        <div className='
            flex flex-col gap-[1rem] p-[1rem] 
            absolute top-[55%] left-[20%] z-20 ss:top-[25%] ss:left-[50%]
            border-[2px] border-[rgba(47,115,242,1)] bg-white rounded-[12px] '
        >
            {/* header */}
            <div>
                <h3 className='font-bold text-[1.2rem] text-[rgba(16,45,71,1)]'>BEST REAL ESTATE <span className='block'>COMPANY</span></h3>
            </div>
            {/* body */}
            <div className='flex justify-between gap-[2rem]'>
                {/* experience */}
                <div>
                    <p className='text-[rgba(16,45,71,1)] font-light leading-[1.3rem]'>Years <span className='block'>Experience</span></p>
                    <h4 className='font-extrabold text-[2.5rem] text-[rgba(16,45,71,1)]'>33</h4>
                </div> 
                {/* image */}
                <img src={history} alt="" className='w-[4rem]'/>
            </div> 

        </div>
        {/* History */}
            <div className='flex flex-col gap-[2rem] ss:w-[50%] pb-[10rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
                <h3 className='font-bold text-[1.2rem] text-[rgba(16,45,71,1)] vs:text-[1.4rem] xs:text-[1.5rem]'>Property History <span className='block'>How we became number one</span></h3>
                <p className='text-[0.7rem] text-[rgba(84,117,147,1)] xs:text-[1rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing. Various versions have evolved over the years, sometimes by accident, sometimes as necessary making release of Letraset sheets containing Lorem Ipsum passages.</p>
                <Button variant='outline' className={'w-[125px]'}>More Details</Button>
            </div>
    {/* Color */}
    <div className='bg-[rgba(188,207,225,1)] pb-[15rem] ss:pt-[13rem] ss:w-[40%]  ss:absolute right-0 lg:pt-[16.8rem]'></div>
    </section>
  )
}

export default History