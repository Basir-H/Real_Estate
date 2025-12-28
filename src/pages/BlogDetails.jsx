import React from 'react'
import { useParams } from 'react-router-dom';
import { blogDetails } from '../constants';
import { Button } from '../components';
import { facebookIcon, linkedIn, twitter } from '../assets';

function BlogDetails() {
     const { id } = useParams()
  
    const property = blogDetails.find(
    (item) => item.id === Number(id)
  );

  return (
    <section>
        {/* Only for background */}
        <div className='bg-[rgba(209,242,255,1)]'>
            {/* Main */}
            <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
                {/* comments */}
                <div className='flex text-[rgba(16,45,71,1)]'>
                    <p className='text-[0.8rem] pr-[0.8rem]'>{property.date}</p>
                    <p className='text-[0.8rem] pl-[0.8rem] border border-l-[rgba(16,45,71,1)] border-t-0 border-r-0 border-b-0'>{property.comments} Comments</p>
                </div>
                <div className='flex flex-col gap-[1.5rem] mt-[1.7rem] ss:flex-row ss:items-center'>
                    <h3 className='text-[rgba(16,45,71,1)] font-bold ss:text-[1.2rem] mmd:text-[1.5rem] xmd:text-[1.8rem] llg:text-[2.2rem]'>Business from the brink of ruin by optimizing our website....</h3>
                    <div className='flex items-center gap-[1rem]'>
                        <img src={property.profImg} alt="" className='w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]'/>
                        <div>
                            <h4 className='font-bold text-[0.9rem]'>{property.authorName}</h4>
                            <p className='font-light text-[0.9rem] mt-[-0.2rem]'>Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] pt-[3rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[6rem]'>
            <img src={property.mainImg} alt="" className='ss:max-h-[26rem] w-full'/>
        </div>
        {/*  */}
        <div className='flex flex-col ss:flex-row ss:gap-[2rem] px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem]'>
            {/* main points */}
            <div className='mt-[2rem]'>
                <h3 className='text-[rgba(16,45,71,1)] font-bold text-[1.5rem]'>Main Heading & Points</h3>
                <div className='text-[rgba(16,45,71,1)] text-[0.9rem]'>
                    <p className='py-[2rem]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    </p>
                    <ul className='py-[2rem] px-[1rem] flex flex-col gap-[0.5rem] list-disc'>
                        <li>Vivamus eu lacus scelerisque, placerat commodo lectus.</li>
                        <li>Etiam et ante at ex porta fringilla.</li>
                        <li>Nullam dignissim sem eu magna aliquet, sit amet volutpat tellus</li>
                    </ul>
                    <p className='py-[2rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                        Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    </p>
                    <p className='py-[2rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                        We are a dedicated team of passionate product managers, developers, UX/UI designers, QA engineers experts helping businesses from new startups
                    </p>
                    <p className='py-[2rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable making this the first true generator on the Internet. It uses a dictionary
                    </p>
                    {/* Tags */}
                    <div className='flex flex-col gap-[2rem] py-[2rem] text-[rgba(16,45,71,1)] text-[0.9rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                        <h4 className='font-bold text-[1.5rem]'>Tags</h4>
                        <ul className='list-disc px-[1rem]'>
                            <li>Trends</li>
                            <li>Design</li>
                            <li>Research</li>
                        </ul>
                    </div>
                    {/* Share */}
                    <div className='flex flex-col gap-[2rem] py-[2rem] text-[rgba(16,45,71,1)] text-[0.9rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                        <h4 className='font-bold text-[1.5rem]'>Share</h4>
                        <ul className='list-disc px-[1rem]'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className='flex flex-col gap-[2rem] py-[2rem] text-[rgba(16,45,71,1)] text-[0.9rem]'>
                        <h4 className='font-bold text-[1.5rem]'>Join our newsletter</h4>
                        <p>Email Address:Subscribe</p>
                    </div>

                </div>
            </div>
            {/* Share */}
            <div className='flex flex-col gap-[2rem] py-[2rem] ss:max-h-[28rem] shadow-[0px_4px_17.4px_0px_rgba(0,0,0,0.08)]'>
                {/* socials */}
                <div className='px-[1rem] pb-[2rem] border border-b-[rgba(223,235,252,1)] border-r-0 border-l-0 border-t-0'>
                    <h4 className='font-bold text-[1.3rem] text-[rgba(16,45,71,1)]'>Share</h4>
                    {/* links */}
                    <div className='flex flex-col gap-[1rem] mt-[0.8rem]'>
                        <a href="" className='flex gap-[10px] items-center bg-[rgba(82,111,163,1)] text-white px-[1rem] py-[0.5rem]  rounded-[0.5rem]'>
                            <img src={facebookIcon} alt="" className='w-[1rem] h-[12px]'/>
                            Facebook
                        </a>
                        <a href="" className='flex gap-[10px] items-center bg-[rgba(70,196,255,1)] text-white px-[1rem] py-[0.5rem]  rounded-[0.5rem]'>
                            <img src={twitter} alt="" className='w-[1rem] h-[12px]'/>
                            twitter
                        </a>
                        <a href="" className='flex gap-[10px] items-center bg-[rgba(60,134,173,1)] text-white px-[1rem] py-[0.5rem]  rounded-[0.5rem]'>
                            <img src={linkedIn} alt="" className='w-[1rem] h-[12px]'/>
                            linkedIn
                        </a>
                    </div>
                </div>
                {/* join newsletter */}
                <div className='px-[1rem] flex flex-col gap-[1rem]'>
                    <h4 className='font-bold text-[1.3rem] text-[rgba(16,45,71,1)]'>Join our Newsletter</h4>
                    <form action="" className='flex flex-col gap-[0.7rem]'>
                        <input type="email" placeholder='Email address' className='text-[rgba(16,45,71,1)] outline-none border border-[rgba(223,235,252,1)] rounded-[0.3rem] px-[1rem] py-[0.5rem]'/>
                        <Button type='submit'>Subscribe</Button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogDetails