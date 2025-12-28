import React from 'react'
import { useParams } from 'react-router-dom'
import { propDetails } from '../constants'
import { Button } from '../components'
import { dropdown } from '../assets'
import DiscoverProperty from './DiscoverProperty'

function PropertyDetails({propertyId}) {
    const { id } = useParams()
  
    const property = propDetails.find(
    (item) => item.propertyId === Number(id)
  );

    if (!property) return <div>No property found.</div>;
    
    return (
     <section>
        <div className='bg-[rgba(209,242,255,1)]'>
            {/* main */}
            <div className='flex flex-col gap-[3rem] items-center justify-center py-[2rem]  px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:w-[55%] ss:mx-auto'>
                <h3 className='text-[rgba(16,45,71,1)] text-center text-[2rem] font-bold'>Modern Appartment</h3>
            </div>
        </div>
        {/* Details */}
        <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
           
            <>
                {/* main */}
                <div className='flex flex-col gap-[2rem]'>
                    <img src={property.mainImg} alt="" className='rounded-[1.5rem] max-h-[30rem]'/>
                    <p className='text-center text-[rgba(84,117,147,1)] font-bold'>{property.description}</p>
                </div>
                {/* Awards */}
                <div className='flex rounded-[12px] sm:ml-[3rem] md:ml-[6rem] lg:ml-[10rem] bg-[rgba(47,115,242,1)] text-white mt-[5rem]'>
                    {/* Happy customer */}
                    <div className='border border-l-0 border-t-0 border-b-0 border-r-[rgba(53,180,246,1)] p-[1rem] pr-0 pt-[1.5rem]'>
                        <h4 className='font-semibold flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>{property.happyCustomers}<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] mmd:pr-[1rem]'>Happy Customer</span></h4>
                    </div>
                    {/* property sales */}
                    <div className='border border-l-0 border-t-0 border-b-0 border-r-[rgba(53,180,246,1)] p-[1rem] pr-0 pt-[1.5rem]'>
                        <h4 className='font-semibold  flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>{property.propertySales}<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] mmd:pr-[1rem]'>Property Sales</span></h4>
                    </div>
                    {/* Award */}
                    <div className='p-[1rem] pr-0 pt-[1.5rem]'>
                        <h4 className='font-semibold  flex items-center gap-2 xs:text-[1.3rem] mmd:text-[2rem] md:text-[2.3rem]'>{property.award}<span className='font-semibold text-[0.5rem] xs:text-[0.7rem] md:text-[1rem] pr-[0.3rem] xs:pr-[0.5rem] ss:pr-[0.8rem] mmd:pr-[1rem]'>Award Wining</span></h4>            
                    </div>
                 </div>
                 {/* Project Deatil */}
                 <div className='mt-[6rem]'>
                    {/* buttons - nav */}
                    <div className='flex justify-center items-center'>
                        <Button
                          variant=""
                          className=" hover:bg-transparent hover text-[rgba(84,117,147,1)] rounded-none border-0 focus:border-b-[0.1rem] focus:border-b-[rgba(47,115,242,1)] focus:text-[rgba(47,115,242,1)] focus:outline-none transition-all duration-200"
                        >
                          Project Complex
                        </Button>
                        <Button
                          variant=""
                          className=" hover:bg-transparent hover text-[rgba(84,117,147,1)] rounded-none border-0 focus:border-b-[0.1rem] focus:border-b-[rgba(47,115,242,1)] focus:text-[rgba(47,115,242,1)] focus:outline-none transition-all duration-200"
                        >
                          Project Park
                        </Button>
                        <Button
                          variant=""
                          className=" hover:bg-transparent hover text-[rgba(84,117,147,1)] rounded-none border-0 focus:border-b-[0.1rem] focus:border-b-[rgba(47,115,242,1)] focus:text-[rgba(47,115,242,1)] focus:outline-none transition-all duration-200"
                        >
                          Project Gallery
                        </Button>
                        <Button
                          variant=""
                          className=" hover:bg-transparent hover text-[rgba(84,117,147,1)] rounded-none border-0 focus:border-b-[0.1rem] focus:border-b-[rgba(47,115,242,1)] focus:text-[rgba(47,115,242,1)] focus:outline-none transition-all duration-200 " 
                        >
                          Project Villa
                        </Button>
                    </div>
                    {/* Info */}
                  <div className='mt-[3rem] flex flex-col gap-[2rem] ss:flex-row'>
                    <div className='flex flex-col gap-[1.5rem] ss:w-[50%]'>
                        <h3 className='font-bold text-[1.2rem] sm:text-[1.4rem]'>Values of smart living in Vista <span className='block'>Residence, NY</span></h3>
                        <p className='text-[rgba(84,117,147,1)] text-[0.8rem]'>Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.</p>
                        <div className='grid grid-cols-3 gap-[0.8rem]'>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Buy Now</p>
                            </a>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Fitness</p>
                            </a>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Conference</p>
                            </a>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Library</p>
                            </a>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Restaurant</p>
                            </a>
                            <a href="#" className='flex items-center gap-[0.4rem] text-[rgba(84,117,147,1)] text-[0.8rem]'>
                                <img src={dropdown} alt="" className='rotate-[-90deg] w-[0.8rem]'/>
                                <p>Bars</p>
                            </a>    
                        </div>
                    </div>
                    <img src={property.gallery} alt="" className='ss:w-[50%]'/>
                  </div>
                 </div>
            </>       
        </div>
        
        {/* Availablity */}
        <div className='bg-[rgba(243,249,253,1)]'>
            <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
                {/* Header */}
                <div className='flex flex-col gap-[1rem]'>
                    <h3 className='text-center font-bold  text-[rgba(16,45,71,1)] text-[1.3rem] ss:text-[1.6rem]'>Available</h3>
                    <p className='text-center text-[0.9rem] ss:text-[1.1rem] text-[rgba(84,117,147,1)]'>Sometime by accident, sometimes chunks as neccessary</p>
                </div>
                    {/* table */}
                    <div className='w-full overflow-x-auto mt-[3.5rem]'>
                        <table className='min-w-[700px] w-full text-center '>
                            <thead className='text-[rgba(84,117,147,1)] font-semibold border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>
                                <th className='px-[0.5rem] py-[1rem]'>Residence</th>
                                <th className='px-[0.5rem] py-[1rem]'>Room</th>
                                <th className='px-[0.5rem] py-[1rem]'>Bath</th>
                                <th className='px-[0.5rem] py-[1rem]'>View</th>
                                <th className='px-[0.5rem] py-[1rem]'>Floor</th>
                                <th className='px-[0.5rem] py-[1rem]'>Terrace</th>
                                <th className='px-[0.5rem] py-[1rem]'>Layout</th>
                            </thead>
                            <tbody>
                                {property.availlable.map((item, index) => {
                                    return(
                                        <tr key={index} hover:bg-gray-50 transition>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.residence}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.room}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.bath}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.view}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.floor}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>{item.terrace}</td>
                                            <td className='text-[0.8rem] text-[rgba(84,117,147,1)] px-[0.5rem] py-[1rem] border border-t-0 border-l-0 border-r-0 border-b-rgba(209,242,255,1)'>
                                                <a href="#" className='flex justify-center items-center gap-2'>
                                                    {item.layout}
                                                    <img src={dropdown} alt="" className='w-[0.7rem] rotate-[-90deg]'/>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>           
        </div>
        {/* Properties */}
        <DiscoverProperty/>
     </section>
    )
}

export default PropertyDetails