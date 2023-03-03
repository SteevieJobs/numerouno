'use client';

import React from 'react';
import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setOpen] = useState(false);
    const [logoColor, setLogoColor] = useState('text-c-red');
    const colors = ['text-c-white', 'text-c-red'];

    const toggleOverlay = () => {
        setLogoColor(colors[+isOpen]);
    };

    return (
        <nav className=" mx-auto mb-5 flex w-10/12 flex-row items-center py-5">
            <div className="flex w-full items-center">
                <h1
                    id="logo"
                    className={`z-30 mr-7 text-6xl font-semibold ${logoColor}`}
                >
                    <Link href="/">S</Link>
                </h1>
                <div className="hidden md:flex">
                    <h3 className="mx-3 text-lg hover:opacity-80">
                        <Link href="/">Home</Link>
                    </h3>
                    <h3 className="mx-3 text-lg hover:opacity-80">
                        <Link href="/popular">Popular</Link>
                    </h3>
                    <h3 className="mx-3 text-lg hover:opacity-80">
                        <Link href="/genres">Genres</Link>
                    </h3>
                </div>
            </div>
            <div className="flex w-full justify-end">
                <div className="flex w-10/12 justify-end">
                    <div onClick={toggleOverlay} className="z-30 md:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#161212"
                            duration={1}
                        />
                    </div>
                    <div className="hidden md:flex">
                        <Link
                            href="/"
                            className="mr-4 rounded-md border border-solid border-c-black px-8 py-2 font-medium duration-200 hover:bg-c-black hover:text-white"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/"
                            className="rounded-md bg-c-red px-8 py-2 font-medium text-white duration-200 hover:bg-c-redorange"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed top-0 left-0 z-20 h-screen w-screen overflow-hidden bg-c-red md:hidden">
                    <div className="flex w-11/12 flex-col py-20">
                        <h3 className="mx-3 my-2 transform cursor-pointer text-right text-lg transition duration-300 hover:translate-x-2 hover:text-c-white">
                            <Link href="/">Home</Link>
                        </h3>
                        <h3 className="mx-3 my-2 transform cursor-pointer text-right text-lg transition duration-300 hover:translate-x-2 hover:text-c-white">
                            <Link href="/popular">Popular</Link>
                        </h3>
                        <h3 className="mx-3 my-2 transform cursor-pointer text-right text-lg transition duration-300 hover:translate-x-2 hover:text-c-white">
                            <Link href="/genres">Genres</Link>
                        </h3>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
