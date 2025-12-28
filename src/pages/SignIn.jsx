import React from 'react'
import { Navbar } from '../shared'
import { Button } from '../components'
import { github, google, logo } from '../assets'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
        <section className='mt-[2rem] px-[1rem] flex justify-center items-center'>
            {/* sign in form */}
            <div className='rounded-[0.5rem] px-[0.5rem] xs:px-[2rem] py-[1rem] xs:py-[3rem] xs:my-[2rem] shadow-[0px_4px_17.4px_0px_rgba(0,0,0,0.08)] '>
                <img src={logo} alt="" className='w-[6rem] mx-auto mb-[2rem] '/>
                {/* Buttons container */}
                <div className='flex justify-center items-center gap-2 flex-wrap vs:gap-[1rem] '>
                    <Button variant='outline' className={'flex items-center gap-1 vs:gap-3 px-[1.8rem] py-[0.3rem] rounded-[0.5rem] border border-[rgba(209,242,255,1)]'}>
                        <span className='text-[rgba(16,45,71,1)]'>Sign Up</span> 
                        <img src={google} alt="" className='w-[0.9rem]'/>
                    </Button>
                    <Button variant='outline' className={'flex items-center gap-1 vs:gap-3 px-[1.8rem] py-[0.3rem] rounded-[0.5rem] border border-[rgba(209,242,255,1)]'}>
                        <span className='text-[rgba(16,45,71,1)]'>Sign Up</span>
                        <img src={github} alt="" className='w-[0.9rem]'/> 
                    </Button>
                </div>
                {/* line */}
                <div className='flex items-center gap-2 mt-[1.5rem] '>
                    <div className='py-[0.01rem] bg-[rgba(209,242,255,1)] w-[45%] '></div>
                    <p className='text-[rgba(84,117,147,1)]'>OR</p>
                    <div className='py-[0.01rem] bg-[rgba(209,242,255,1)] w-[45%] '></div>
                </div>
                {/* form */}
                <form action="" className='flex flex-col gap-[12px] mt-[1.5rem]'>
                 
                    <input type="text" placeholder='Email' className='text-[rgba(16,45,71,1)] outline-none border border-[rgba(209,242,255,1)] rounded-[0.5rem] p-2'/>
                    <input type="text" placeholder='Password' className='rgba(16,45,71,1) outline-none border border-[rgba(209,242,255,1)] rounded-[0.5rem] p-2'/>
                    <Button>Sign Up</Button>
                </form>
                {/* footer */}
                <div className='flex flex-col items-center justify-center text-center gap-2 mt-[1.5rem]'>
                    <p className='text-[rgba(16,45,71,1)] text-[0.8rem]'>
                        <a href="">Forgot Password?</a>
                    </p>
                    <p className='text-[rgba(16,45,71,1)] text-[0.8rem]'>
                        Not a Memeber yet? 
                        {/* <a href="./SignUp"> Sign Up</a> */}
                        <a href="./SignUp"> Sign Up</a>
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn