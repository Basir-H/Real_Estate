import React from 'react'
import { Card } from '../components'
import { blogs } from '../constants'
import { useNavigate } from 'react-router-dom'

function Blog() {
      const navigate = useNavigate()
    
  return (
    <section id='blog' className='sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
        <h3 className='text-center text-[rgba(16,45,71,1)] font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]'>Blog Post</h3>
        <div className='flex flex-col gap-8 mt-[1.5rem] p-[1rem] xs:flex-row sm:justify-between'>
            {
                blogs.map((blog) => {
                    return(
                        <Card
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
    </section>
  )
}

export default Blog