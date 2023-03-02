"use client"

import React from 'react'
import Link from 'next/link'
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    const [logoColor, setLogoColor] = useState('text-c-red');
    const colors = ["text-c-white", "text-c-red"]


    const toggleOverlay = () => {
        setLogoColor(colors[+isOpen])
    }

    return (
        <nav className='w-10/12 flex flex-row mb-5 py-5 items-center mx-auto'>
            <div className='items-center w-full flex'>
                <h1 id="logo" className={`text-6xl mr-7 font-semibold z-30 ${logoColor}`}><Link href="/">S</Link></h1>
                <div className='hidden md:flex'>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/">Home</Link></h3>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/popular">Popular</Link></h3>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/genres">Genres</Link></h3>
                </div>
            </div>
            <div className='w-full justify-end flex'>
                <div className='w-10/12 justify-end flex'>
                    <div onClick={toggleOverlay} className='md:hidden z-30'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color="#161212" duration={1}/>
                    </div>
                    <div className='hidden md:flex'>
                        <Link href="/" className='border border-c-black border-solid mr-4 px-8 py-2 font-medium rounded-md duration-200 hover:bg-c-black hover:text-white'>Log In</Link>
                        <Link href="/" className='bg-c-red px-8 py-2 font-medium text-white rounded-md hover:bg-c-redorange duration-200'>Sign Up</Link>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden z-20 bg-c-red h-screen w-screen fixed top-0 left-0'>
                    <div className='flex flex-col py-20 w-11/12'>
                        <h3 className='mx-3 my-2 text-lg text-right transform transition duration-300 hover:translate-x-2 hover:text-c-white cursor-pointer'><Link href="/">Home</Link></h3>
                        <h3 className='mx-3 my-2 text-lg text-right transform transition duration-300 hover:translate-x-2 hover:text-c-white cursor-pointer'><Link href="/popular">Popular</Link></h3>
                        <h3 className='mx-3 my-2 text-lg text-right transform transition duration-300 hover:translate-x-2 hover:text-c-white cursor-pointer'><Link href="/genres">Genres</Link></h3>
                    </div>
                </div>

            )}
        </nav>
    )
}

export default Navbar;
