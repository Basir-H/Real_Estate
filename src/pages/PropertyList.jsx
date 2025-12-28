import { burger, dropdown, sortIcon, windows,heart } from '../assets'
import { propList } from '../constants'
import { Button, Card } from '../components'
import { useNavigate } from 'react-router-dom'

function PropertyList() {
    const navigate = useNavigate()


  return (
    <section>
            <div className='bg-[rgba(209,242,255,1)]'>
                {/* main */}
                <div className='flex flex-col gap-[3rem] items-center justify-center py-[2rem]  px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:w-[55%] ss:mx-auto'>
                    <h3 className='text-[rgba(16,45,71,1)] text-center text-[2rem] font-bold'>Property List</h3>
                    <p className='text-[rgba(84,117,147,1)] text-center mt-[-2rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
                    <a href="#contact" className='text-[rgba(16,45,71,1)] flex items-center gap-2 text-[0.8rem]'>
                        Buy Now
                        <img src={dropdown} alt="" className='rotate-[-90deg] w-[1rem] h-[1rem]' />
                        Property List
                    </a>
                </div>
            </div>
                {/* property List */}
                <div className='ss:flex gap-4 py-[2rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] '>
                    {/* advance search */}
                    <div className='flex flex-col gap-[1.2rem] pt-[2rem] pb-[3rem] shadow-[0px_4px_17.4px_0px_rgba(0,0,0,0.08)] rounded-[12px] px-[2rem] mb-[1rem] ss:w-[40%]  ss:h-[26rem]'>
                        <h3 className='font-bold text-[rgba(84,117,147,1)] text-[1.2rem]'>Advance Search</h3>
                        <input type="text" placeholder='Keyword' className='text-[rgba(84,117,147,1)] outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] '/>
                        <select name="" id="" className='text-[rgba(84,117,147,1)] outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] '>
                            <option value="">Location</option>
                        </select>
                        <select name="" id="" className='text-[rgba(84,117,147,1)] outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] '>
                            <option value="">Category</option>
                        </select>
                        <select name="" id="" className='text-[rgba(84,117,147,1)] outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] '>
                            <option value="">Beds</option>
                        </select>
                        <select name="" id="" className='text-[rgba(84,117,147,1)]  outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] '>
                            <option value="">Garbages</option>
                        </select>
                        <Button>Find Property</Button>
                    </div>
                    {/* properties */}
                    <div>
                        {/* Sort */}
                        <div className='flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center'>
                            <p className='text-[rgba(84,117,147,1)] text-[0.9rem] ss:w-[25%]'>18 Properties Found</p>
                            <div className='flex flex-col gap-2 xs:flex-row xs:justify-between sm:justify-center sm:w-[75%] sm:gap-1'>
                                <div className='flex justify-center items-center gap-4 xs:w-[80%] sm:w-[70%] '>
                                    <span className='flex items-center gap-2 text-[rgba(84,117,147,1)] text-[0.8rem] sm:gap-1'>
                                        Sort by
                                        <img src={sortIcon} alt="" className='w-[1rem] h-[0.8rem]'/>
                                    </span>
                                    <select name="" id="" className='text-[rgba(84,117,147,1)] outline-none border border-[rgba(223,235,252,1)] text-[0.8rem] rounded-[0.3rem] px-[1rem] py-[6px] w-[70%]'>
                                        <option value="" className=''>Title</option>
                                    </select>
                                </div>
                                
                                {/* buttons */}
                                <div className='flex items-center justify-between xs:w-[20%] xs:justify-center xs:gap-2 ss:w-[25%]'>
                                    <Button variant='outline' className={'hover:bg-transparent px-[10px] py-[5px]'}>
                                        <img src={burger} alt="" className='w-[1.5rem]'/>
                                    </Button>
                                    <Button className={'px-[10px] py-[5px]'}>
                                        <img src={windows} alt="" className='w-[1.8rem]'/>
                                    </Button>
                                </div>
                                
                            </div>
                        </div>
                        {/* Properties container */}
                         <div className='flex flex-col ss:grid ss:grid-cols-2 gap-[1rem] mt-[3rem]'>
                        {
                            propList.map((prop) => {
                                return(
                                    <Card
                                        key={prop.propertyId}
                                        className={''}
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
                                        onClick={() => navigate(`/propertyDetails/${prop.propertyId}`)} 
                                    >
                                        
                                            

                                                <div className='px-[0.8rem] py-[0.8rem] '>
                                                    <p className='text-[rgba(84,117,147,1)] font-medium'>{prop.kind}</p>
                                                    <div className='flex justify-between items-center mt-[0.5rem] border-b border-b-[rgba(209,242,255,1)] pb-[1rem]'>
                                                        <h3 className='text-[rgba(16,45,71,1)] text-[1.2rem] font-bold'>{prop.price}</h3>
                                                        <p className='bg-[rgba(223,235,252,1)] px-[0.4rem] py-[0.10rem] text-[rgba(16,45,71,1)] text-[12px] rounded-[999px]'>{prop.location}</p>
                                                    </div>
                                        
                                                     {/*  */}
                                                    <div className='flex items-center justify-between mt-[1rem]  '>
                                                        {/* detail */}
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
        
                                    </Card>
                                )
                            })
                        }
                        </div>
                          
                    </div>
                </div>

          
        
    </section>
  )
}

export default PropertyList