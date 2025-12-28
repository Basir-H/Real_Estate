import React from 'react'
import { Card } from '../components'
import { featuredProp } from '../constants'
import { heart } from '../assets'
import { useNavigate } from 'react-router-dom'

function FeaturedPropperty() {
  const navigate = useNavigate()

  return (
    <section className='bg-[rgba(243,249,253,1)]' id='featuredProp'>
       <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
            <h3 className='text-[rgba(16,45,71,1)] font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]'>Featured Properties</h3>
            <div className='flex flex-col sm:flex-row sm:flex-wrap gap-[1rem] mt-[3rem]'>
                {
                    featuredProp.map((prop) => {
                        return(
                            <Card
                                key={prop.propertyId}
                                className={'mmd:w-[30%] lg:w-[32%] '}
                                image={prop.image}
                                topContent={
                                    <>
                                        <p className='flex items-center justify-center bg-white text-[rgba(47,115,242,1)] px-[0.5rem] py-[0.25rem] rounded-[0.25rem]'>
                                            Sell
                                        </p>
                                        <div className='flex items-center justify-center bg-white rounded-[0.5rem] px-[0.5rem] py-[0.5rem]'>
                                            <img src={heart} alt="" className='w-[1rem] h-[1rem]'/>
                                        </div>
                                    </>
                                }
                                    onClick={() => navigate(`/propertyDetails/${prop.propertyId}`)} // ✅ وقتی روی کارت کلیک شود به جزئیات Property می‌رود

                                >
                                
                                    <>
                                        <div className='px-[0.8rem] py-[0.8rem] '>
                                            <p className='text-[rgba(84,117,147,1)] font-medium'>{prop.kind}</p>
                                            <div className='flex justify-between items-center mt-[0.5rem] border-b border-b-[rgba(209,242,255,1)] pb-[1rem]'>
                                                <h3 className='text-[rgba(16,45,71,1)] text-[1.2rem] font-bold'>{prop.price}</h3>
                                                <p className='bg-[rgba(223,235,252,1)] px-[0.4rem] py-[0.10rem] text-[rgba(16,45,71,1)] text-[12px] rounded-[999px]'>{prop.location}</p>
                                            </div>
                                
                                            <div className='flex items-center justify-between mt-[1rem]'>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex items-center gap-1'>
                                                        <img src={prop.bedIcon} alt="" className='w-[1.2rem] h-[1.2rem]'/>
                                                        <p className='font-medium text-[1rem] text-[rgba(16,45,71,1)] '>{prop.bedCount}</p>                                        
                                                    </div>
                                                    <p className='text-[rgba(84,117,147,1)] text-[0.7rem]'>Bedroom</p>
                                                </div>
                                                <div className='flex flex-col gap-1 '>
                                                    <div className='flex items-center gap-1'>
                                                        <img src={prop.bathIcon} alt="" className='w-[1.2rem] h-[1.2rem]'/>
                                                        <p className='font-medium text-[1rem] text-[rgba(16,45,71,1)]'>{prop.bathCount}</p>
                                                    </div>
                                                    <p className='text-[rgba(84,117,147,1)] text-[0.7rem]'>Bathroom</p>
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex items-center gap-1'>
                                                        <img src={prop.livingIcon} alt="" className='w-[1.2rem] h-[1.2rem]'/>
                                                        <p className='font-medium text-[1rem] text-[rgba(16,45,71,1)]'>{prop.Area}</p>
                                                    </div>
                                                    <p className='text-[rgba(84,117,147,1)] text-[0.7rem]'>Living Area</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                
                            
                            </Card>
                        )
                    })
                }
            </div>
        </div>           
    </section>
  )
}

export default FeaturedPropperty
