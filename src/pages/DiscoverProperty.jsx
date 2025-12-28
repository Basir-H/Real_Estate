import React from 'react'
import { properties } from '../constants'

function DiscoverProperty() {
  return (
    <section className=' px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
        <h3 className='text-[rgba(16,45,71,1)] font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]'>Discover Properties</h3>
        {/* discover */}
        <div className='flex justify-between items-center flex-wrap gap-[1.5rem] mt-[3rem]'>
            {
                properties.map((property) => {
                    return(
                        <div className='flex flex-col gap-[1.5rem]'>
                            <img src={property.image} alt="" className='w-[5rem] h-[5rem] mx-auto'/>
                            <div key={property.propertyId} className=''>
                                <h4 className='font-bold text-[1.3rem] text-[rgba(16,45,71,1)]'>{property.title}</h4>
                                <p className='font-light text-[rgba(16,45,71,1)]'>{property.count}</p>                            
                            </div>
                        </div>

                    )
                })
            }
        </div>
    </section>
  )
}

export default DiscoverProperty