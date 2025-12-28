import React from 'react'
import { address, contact, dropdown, email, map } from '../assets'
import {Button} from '../components'

function Contact() {
    return (
        <section className=''>
            <div className=' bg-[rgba(209,242,255,1)]'>
                <div className=' px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:w-[55%] ss:mx-auto'>
                    {/* main */}
                    <div className='flex flex-col gap-[3rem] items-center justify-center py-[2rem]'>
                        <h3 className='text-[rgba(16,45,71,1)] text-center text-[2rem] font-bold'>Contact Us</h3>
                        <p className='text-[rgba(84,117,147,1)] text-center mt-[-2rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
                        <a href="#contact" className='text-[rgba(16,45,71,1)] flex items-center gap-2 text-[0.8rem]'>
                            Buy Now
                            <img src={dropdown} alt="" className='rotate-[-90deg] w-[1rem] h-[1rem]' />
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            {/* Email, Address */}
            <div className='flex flex-col gap-[3rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:flex-row ss:justify-between'>
                {/* Email */}
                <div className='flex items-center gap-4'>
                    <img src={email} alt="" className='w-[4rem] h-[4rem]' />
                    {/* info */}
                    <div>
                        <h4 className='font-semibold'>Email Us</h4>
                        <p className='text-[rgba(84,117,147,1)] text-[0.9rem]'>Feel free to contact us<span className='ss:block'>at info@nicktio.com we’ll respond promptly</span></p>
                    </div>
                </div>
                {/* Address */}
                <div className='flex items-center gap-4'>
                    <img src={address} alt="" className='w-[4rem] h-[4rem]' />
                    {/* info */}
                    <div>
                        <h4 className='font-semibold'>Address</h4>
                        <p className='text-[rgba(84,117,147,1)] text-[0.9rem]'>Feel free to contact us<span className='ss:block'>at info@nicktio.com we’ll respond promptly</span></p>
                    </div>
                </div>
            </div>
                {/* map */}
                <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
                    <img src={map} alt="" className='w-[100%] h-auto'/>
                </div>
                {/* contact form */}
                <div id='contact' className='flex flex-col gap-[2rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] mmd:flex-row mmd:gap-[1rem]'>
                    <div className=''>
                        <h3 className='font-bold text-[1.4rem] mb-[1.5rem] text-[rgba(16,45,71,1)] sm:text-[1.8rem]'>Get Online <span className='block'>Consultation</span></h3>
                        <form action=""  className='flex flex-col gap-[0.5rem] mmd:flex-row mmd:flex-wrap '>
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <label htmlFor="firstName" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>First Name*</label>
                                <input type="text" name='firstName' className='outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <label htmlFor="lastName" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>Last Name*</label>
                                <input type="text" name='lastName' className='outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <label htmlFor="email" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>Email*</label>
                                <input type="email" name='email' className='outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <label htmlFor="specialist" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>Specialist*</label>
                                <input type="text" name='specialist' className='outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <div className='flex flex-col gap-3 sm:gap-2 mmd:w-[11.3rem]'>
                                <label htmlFor="date" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>Date*</label>
                                <input type="date" name='date' className=' outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <div className='flex flex-col gap-3 sm:gap-2 mmd:w-[11.3rem]'>
                                <label htmlFor="time" className='text-[rgba(16,45,71,1)] text-[0.9rem]'>Time*</label>
                                <input type="time" name='time' className='outline-none border border-[rgba(84,117,147,1)] rounded-[0.5rem] px-[1rem] py-[0.3rem] text-[rgba(84,117,147,1)] text-[0.8rem] required'/> 
                            </div> 
                            <Button type='submit' className={'mt-[1rem]'}>Make an appoinment</Button>                          
                        </form>
                    </div>
                    {/* image */}
                        <img src={contact} alt="" className='w-[100%] h-auto mmd:w-[56%]'/>
                </div>
                {/* Branches */}
                <div className='bg-[rgba(47,115,242,1)] flex justify-center mb-[-3rem] ss:flex-col'>
                    <div className='flex flex-col gap-3 w-[50%] text-white px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] pt-[3rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[6rem] ss:flex-row ss:w-full ss:justify-between ss:border ss:border-l-0 ss:border-r-0 border-t-0 ss:border-[rgba(223,235,252,1)] ss:pb-[3rem]'>
                        <h3 className='font-bold mmd:text-[1.5rem]'>Pune Head Office</h3>
                        <p className='text-[0.8rem]'>4292 Mapleview Drive <span className='block'>Greenfield Zip code 38230</span></p>
                        <p className='text-[0.8rem]'>headoffice@nicktio.com <span className='block'>Call:731-621-5503</span></p>
                    </div>
                    <div className='flex flex-col gap-3 w-[50%] text-white px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:flex-row ss:w-full ss:justify-between'>
                        <h3 className='font-bold mmd:text-[1.5rem]'>Bangaluru Head Office</h3>
                        <p className='text-[0.8rem]'>4292 Mapleview Drive <span className='block'>Greenfield Zip code 38230</span></p>
                        <p className='text-[0.8rem]'>headoffice@nicktio.com <span className='block'>Call:731-621-5503</span></p>
                    </div>
                </div>
            
        </section>
    )
}

export default Contact

