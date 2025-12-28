import React from 'react'
import { Button, StepLine } from '../components'

function SaveMoney() {
  return (
    <section className='flex flex-col gap-[3rem] px-[1rem] sm:flex-row sm:gap-[5rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
       
       
        {/* informations */}
        <div className='flex flex-col gap-[1rem] sm:w-[45%] sm:mt-[4rem]'>
            <h3 className='text-[rgba(16,45,71,1)] font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]'>Save Your Money</h3>
            <p className='text-[rgba(16,45,71,1)]'>Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.</p>
            <StepLine className={'mt-[1rem]'}/>
            <div className='flex items-center justify-between'>
                    <h3 className='text-[rgba(16,45,71,1)] font-medium text-[0.9rem]'>
                        3% Save
                        <span className='text-[rgba(84,117,147,1)] font-light text-[0.7rem] block'>Above $50k</span>
                    </h3>
                    <h3 className='text-[rgba(16,45,71,1)] font-medium text-[0.9rem]'>
                        5% Save
                        <span className='text-[rgba(84,117,147,1)] font-light text-[0.7rem] block'>Above $75k</span>
                    </h3>
                    <h3 className='text-[rgba(16,45,71,1)] font-medium text-[0.9rem]'>
                        8% Save
                        <span className='text-[rgba(84,117,147,1)] font-light text-[0.7rem] block'>Above $90k</span>
                    </h3>
            </div>
            {/* Buttons */}
            <div className='flex gap-[0.8rem] mt-[1rem]'>
                <Button className={'px-[0.6rem] py-[0.3rem] font-light rounded-[0.5rem]'}>Buy House</Button>
                <Button variant='outline' className={'px-[0.6rem] py-[0.3rem] font-light'}>Sell House</Button>
            </div>
        </div>


         {/* card  */}
        <div className='rounded-[10px] bg-[rgba(47,115,242,1)] sm:w-[55%]'>
            {/* Body */}
            <div className='flex flex-col items-center justify-center py-[3rem]'>
                <h3 className='font-bold text-white text-[1.3rem] xs:text-[1.6rem]'>Savings Calculator</h3>
                {/* Buttons */}
                <div className='rounded-3xl border border-[rgba(53,180,246,1)] mt-[1.5rem] p-[0.5rem] w-[9rem]'>
                    <Button className={'outline-none font-light'}>Buy</Button>
                    <Button className={'bg-[rgba(53,180,246,1)] px-[1.5rem] py-[0.5rem] rounded-[4rem] font-light'}>Sell</Button>
                </div>
                <div className='flex flex-col items-center mt-[1.5rem]'>
                    <p className='font-bold text-white text-[0.8rem]'>SAVINGS</p>
                    <h3 className='font-bold text-[3rem] text-white'>$10000</h3>                    
                </div>
                {/* line */}
                <div className='h-[0.5rem] w-[90%] bg-[#102d472f] relative mt-[1.5rem] rounded'>
                    <div className='absolute w-[0.5rem] h-[0.5rem] rounded-full left-0 bg-[rgba(53,180,246,1)]'></div>
                </div>
                {/* prices */}
                <div className='flex justify-between w-[90%]'>
                    <p className='text-white text-[0.9rem] font-light'>$10</p>
                    <p className='text-white text-[0.9rem] font-light'>$400</p>
                </div>
            </div>
            {/* footer */}
            <div className='flex flex-col items-center  bg-[rgba(29,78,216,1)] py-[1rem] rounded-[10px]'>
                <h4 className='text-[rgba(255,255,255,0.4)]'>Have Questions?</h4>
                <h4 className='text-white'><span className='text-[rgba(255,255,255,0.4)]'>Call us:</span>+909 878 0980</h4>
            </div>
        </div>
    </section>
  )
}

export default SaveMoney