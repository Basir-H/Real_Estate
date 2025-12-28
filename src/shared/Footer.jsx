import React from 'react'
import { facebook, instagram, logoWhite, x } from '../assets'
import { Button } from '../components'

function Footer() {
  return (
    <footer className='bg-[rgba(37,60,80,1)] mt-[3rem]'>
        {/* Links container - This div is for bottom border */}
        <div className='border border-l-0 border-r-0 border-t-0 border-b-[rgba(84,117,147,1)]'>
            {/* links */}
            <div className='flex flex-col gap-[3rem] px-[0.8rem] py-[1rem] ss:py-[2rem] ss:flex-row ss:items-center ss:justify-between sm:px-[3rem] md:px-[6rem] lg:px-[10rem] '>
                {/* logo */}
                <img src={logoWhite} alt="" className='w-[10rem] h-[2rem] mx-auto ss:mx-0'/>
                {/*  */}
                <div className='flex gap-[1rem] ss:justify-between'>
                    <div className='flex flex-col gap-[1rem] w-[32%] '>
                        <h3 className='font-bold text-white text-[0.9rem] sm:text-[1rem]'>Address</h3>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Property Real estate 4263 Wilkinson Street Tennessee</p>
                        {/* Socials Icons */}
                        <div className='flex gap-[0.5rem]'>
                            <img src={facebook} alt="" className='w-[1rem] h-[1rem]'/>
                            <img src={x} alt="" className='w-[1rem] h-[1rem]'/>
                            <img src={instagram} alt="" className='w-[1rem] h-[1rem]'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1rem] w-[33%]'>
                        <h3 className='font-bold text-white text-[0.9rem] sm:text-[1rem]'>Quick Links</h3>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Contact Supports</p>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Properties</p>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Blog</p>
                    </div>
                    <div className='flex flex-col gap-[1rem] w-[33%]'>
                        <h3 className='font-bold text-white text-[0.9rem] sm:text-[1rem]'>Popular Searches</h3>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Appartment for Rent</p>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>House for Buy</p>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Office for Buy</p>
                        <p className='text-[rgba(102,129,153,1)] text-[0.6rem] sm:text-[0.7rem]'>Shop for Rent</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact */}
        <div className='flex flex-col items-center justify-center gap-[2rem] px-[0.8rem] py-[1rem] ss:flex-row ss:justify-between sm:px-[3rem] md:px-[6rem] lg:px-[10rem]'>
            <div className='flex items-center gap-[0.9rem]'>
                <h3 className='font-bold text-white text-[0.7rem] sm:text-[0.8rem]'>Phone:<span className='text-[rgba(84,117,147,1)] text-[0.6rem] sm:text-[0.7rem]'> +(690) 2560 0020</span></h3>
                <h3 className='font-bold text-white text-[0.7rem] sm:text-[0.8rem]'>Email:<span className='text-[rgba(84,117,147,1)] text-[0.6rem] sm:text-[0.7rem]'> real@property.com</span></h3>
            </div>
            <div className='flex items-center gap-[0.8rem]'>
                <p className='font-bold text-[0.7rem] text-white sm:text-[0.8rem]'>Newsletter</p>
                <form action="" className='flex items-center'>
                    <input type="text" placeholder='Email*' className='rounded-[0.5rem] px-[1rem] py-[0.3rem]'/>
                    <Button
                        className={'rounded-[0.5rem] px-[1rem] py-[0.5rem] ml-[-5rem]'}
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer