import React from 'react'
import { dropdown } from '../assets'
import { blogList } from '../constants'
import { Card } from '../components'
import { useNavigate } from 'react-router-dom'

function BlogList() {
      const navigate = useNavigate()

  return (
    <section>
        <div className='bg-[rgba(209,242,255,1)]'>
            {/* main */}
            <div className='flex flex-col gap-[3rem] items-center justify-center py-[2rem]  px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] ss:w-[55%] ss:mx-auto'>
                <h3 className='text-[rgba(16,45,71,1)] text-center text-[2rem] font-bold'>Blog List</h3>
                <p className='text-[rgba(84,117,147,1)] text-center mt-[-2rem]'>Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou</p>
                <a href="#contact" className='text-[rgba(16,45,71,1)] flex items-center gap-2 text-[0.8rem]'>
                    Buy Now
                    <img src={dropdown} alt="" className='rotate-[-90deg] w-[1rem] h-[1rem]' />
                    Blog List
                </a>
            </div>
        </div>
        <div className='gap-4 py-[2rem] px-[1rem] lg:px-[10rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] '>
            <div className='flex flex-col items-center justify-center gap-8 mt-[1.5rem] p-[1rem] xs:flex-row xs:flex-wrap sm:justify-between'>
            {
            blogList.map((blog) => {
                return(
                    <Card
                        key={blog.id}
                        className={'flex flex-col gap-[0.2rem] shadow-none xmd:flex-row xmd:items-center'}
                        image={blog.image}
                        imageStyle={'rounded-[0.5rem] xmd:h-[10rem]'}
                        onClick={() => navigate(`/blogDetails/${blog.id}`)} 
                    >
                         {/* h-[6rem]  xs:h-[7rem] sm:h-[8rem] */}
                        <div className='flex flex-col gap-2 '>
                            <p className='text-[0.6rem] text-[rgba(84,117,147,1)] md:text-[0.8rem]'>{blog.date}</p>
                            <h4 className='font-bold sm:font-semibold text-[rgba(16,45,71,1)] text-[1rem] xmd:font-bold llg:text-[1.2rem]'>
                                {blog.title1}
                                <span className='block font-bold sm:font-semibold text-[rgba(16,45,71,1)] text-[1rem] xmd:font-bold llg:text-[1.2rem]e'>{blog.title2}</span>
                            </h4>
                            <a href="" className='text-[0.6rem] text-[rgba(47,115,242,1)] xmd:text-[0.8rem]'>{blog.link}</a>
                        </div>
                    </Card>
                )
            })
            }
        </div>
        </div>        
    </section>
  )
}

export default BlogList