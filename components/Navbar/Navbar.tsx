"use client"

import React from 'react'
import Link from 'next/link'
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className='w-10/12 flex flex-row mb-5 py-5 items-center mx-auto'>
            <div className='items-center w-full flex'>
                <h1 className='text-6xl text-c-red mr-7 font-semibold'><Link href="/">S</Link></h1>
                <div className='hidden md:flex'>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/">Home</Link></h3>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/popular">Popular</Link></h3>
                    <h3 className='mx-3 hover:opacity-80 text-lg'><Link href="/genres">Genres</Link></h3>
                </div>
            </div>
            <div className='w-full justify-end flex'>
                <div className='w-10/12 justify-end flex'>
                    <div className='md:hidden'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color="#161212"/>
                    </div>
                    <div className='hidden md:flex'>
                        <Link href="/" className='border border-c-black border-solid mr-4 px-8 py-2 font-medium rounded-md duration-200 hover:bg-c-black hover:text-white'>Log In</Link>
                        <Link href="/" className='bg-c-red px-8 py-2 font-medium text-white rounded-md hover:bg-c-redorange duration-200'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
