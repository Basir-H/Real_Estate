import React from 'react'
import { useEffect, useState } from "react";
import { heroImage, location, star } from '../assets';
import { Button } from '../components';
import '../App.css';

function Hero() {

useEffect(() => {
  const img = document.querySelector(".hero-parallax");

  const handleScroll = () => {
    if (!img) return;
    img.style.transform = `translateY(${window.scrollY * 0.06}px)`;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1200);
  return () => clearTimeout(timer);
}, []);


  return (
    <main className='bg-[rgba(209,242,255,1)]'>
      {/* main section */}
      <div className='flex flex-col mmd:flex-row mmd:items-center mmd:justify-between gap-[2rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] pt-[4.5rem] animate-hero'>
        {/* Search */}
        <div className='flex flex-col gap-[2rem]'>
            <h3 className="font-bold text-[1.5rem] ss:text-[2rem] mmd:text-[1.8rem] md:text-[2.2rem]">
              Find Your Best Real
              <span className="block">Estate</span>
            </h3>
            {/* Buttons */}
            <div className='flex items-center gap-[4px]'>
              <button className={'rounded-tl-[0.5rem] rounded-tr-[0.5rem] rounded-br-[0] rounded-bl-[0] px-[2.3rem] py-[0.7rem] bg-white text-black border-b-[0.19rem] border-[rgba(47,115,242,1)]'}>Sell</button>
              <button className={'rounded-tl-[0.5rem] rounded-tr-[0.5rem] rounded-br-[0] rounded-bl-[0] px-[2.3rem] py-[0.7rem] bg-white text-black'}>Buy</button>
            </div>
          {/* input */}
          <div className='flex flex-col gap-[1rem] bg-white px-[2rem] py-[2rem] mt-[-2.03rem] rounded-tl-[0] rounded-tr-[0.6rem] rounded-br-[0.6rem] rounded-bl-[0.6rem] '>
            <div className='flex items-center gap-[12px] px-[0.5rem] py-[0.5rem] border rounded-md'>
              <img src={location} alt="" className='w-[1rem] h-[1rem]'/>
              <input type="text" placeholder='Search Location' className='border-none outline-none text-[rgba(84,117,147,1)]'/>
            </div>
            {/* Search Buttons */}
            <div className='flex items-center gap-[9px]'>
              <Button className={'w-[40%] mmd:w-[35%] px-[1rem] py-[0.5rem] font-light'}>Search</Button>
              <Button className={'w-[60%] mmd:w-[75%] px-[1rem] py-[0.5rem] font-light bg-[rgba(53,180,246,1)]'}>Advance Search</Button>
            </div>
          </div>
          {/* Ratings */}
          <div className='flex flex-col gap-[0.25rem]'>
            {/* stars */}
            <div className='flex items-center gap-[0.5rem]'>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem]'/>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem]'/>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem]'/>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem]'/>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem]'/>
            </div>
            {/* Reviews */}
            <div>
              <p className='text-[rgba(16,45,71,1)]'>4.9/5- from 658 reviews</p>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div>
          {loading ? (
            <div className="w-full max-w-[500px] h-[300px] bg-gray-200 animate-pulse rounded-md" />
          ) : (
            <img
              src={heroImage}
              alt=""
              className="w-full max-w-[500px] hero-parallax"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Hero