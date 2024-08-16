import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Title() {
    return (
        <div className='flex flex-col justify-between w-full h-full p-6'>
            <div className='flex justify-between items-center'>
                <div className='font-title text-3xl font-bold'>
                    VAIBHAV
                </div>
                <a href='/' className='text-white font-semibold flex justify-center w-24 h-24 relative'>
                    <div className='flex items-center'>
                        <div className='z-10 leading-[1.1]'>
                            Let's
                            <br />
                            Chat
                        </div>
                    </div>
                    <div className='absolute left-0 top-0 right-0 bottom-0 bg-black rounded-full'></div>
                </a>
            </div>
            <div>
                <div>
                    <div className='font-title text-5xl font-semibold leading-[1.1]'>
                        SOFTWARE
                        <br />
                        DEVELOPER.
                        <br />
                        ALWAYS
                        <br />
                        LEARNING.
                    </div>
                    <div className='rounded-full bg-white w-fit py-1 px-4 my-4 flex items-center justify-center'>
                        Available for&nbsp;
                        <span className='font-extrabold'>
                            Sep 2024
                        </span>&nbsp;
                        <div className='h-3 w-3 bg-green-600 rounded-full ml-1'></div>
                    </div>
                    <div className='my-4 font-medium'>
                        I help in creating a better world by 
                        <br />
                        developing software that solves
                        <br />
                        real-world problems.
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div className='font-medium bg-black text-white my-4 py-2 px-4 cursor-pointer rounded-full'>
                            ABOUT ME
                        </div>
                        <div className='flex mt-8 gap-3'>
                            <FaLinkedin size={'1.75em'} />
                            <FaGithub size={'1.75em'} />
                            <MdEmail size={'1.75em'} />
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title