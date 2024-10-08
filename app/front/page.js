"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import Header from '../header/page';


const Front = () => {
    return (
        <>
      
        <section id="home" className='grid gap-20 grid-cols-2 mt-9 overflow-hidden min-md:left-20 pb-4 mb-10 h-full  w-full'>
            <div className='relative left-[30%] max-xl:left-[30%] flex flex-col   mb-4'>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-4xl text-6xl font-bold text-slate-700 mt-16'>Hii</h1>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-4xl text-6xl font-bold text-slate-700 mt-5'>I Am <span className='max-sm:text-6xl text-blue-500 font-serif text-7xl'>Rohit</span> </h1>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-6xl text-7xl font-bold text-blue-500 font-serif mt-5'>Meshram</h1>
                <pre className='Rohit max-sm:text-4xl md:text-5xl flex text-6xl max-sm:inline-block font-bold text-slate-700 mt-10 sticky '><span className='max-sm:hidden'>I Am a </span>
                    {
                        <Typewriter
                            className="inline"
                            options={{
                                strings: ['Web Devloper', 'React Developer', "Coder", "Problem Solver"],
                                autoStart: true,
                                loop: true,
                            }}

                        />
                    }
                </pre>

                <div class="flex mt-10 ">
                    <motion.a whileHover={{ scale: [null, 1, 1.03] }}
                     href='https://github.com/RohitMeshram45'   transition={{ duration: 0.2 }} class="  font-bold inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Github</motion.a>
                </div>
            </div>
           <div whileHover={{ scale: [null, 1, 1.02] }}
           transition={{ duration: 0.4 }} className='flex justify-center items-center'>
            <img  className="hover:bg-slate-100 flex max-sm:hidden hover:shadow-2xl  max-sm:h-[340px] object-cover   rounded h-[340px] p-3 bg-contain sm:h-[340px]" src="https://media.istockphoto.com/id/1147195672/photo/focused-developer-coding-on-computer-monitors-working-late-in-office.jpg?s=2048x2048&w=is&k=20&c=RlqlFsKnGBCjV10F2JnWJsHXoZwDnS4GvQ5hecrgQBU=" />
            </div>
        </section>
        </>
    )
}

export default Front
