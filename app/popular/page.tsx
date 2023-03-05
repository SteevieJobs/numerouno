'use client';

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import BigCard from '@/components/BigCard/BigCard';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRef } from 'react';

type Props = {};

const page = (props: Props) => {
    const refs = Array.from({ length: 2 }).map(() =>
        useRef<HTMLDivElement>(null)
    );

    const scroll = (refIndex: number, scrollOffset: number): void => {
        if (refs[refIndex]?.current != null) {
            refs[refIndex].current.scrollLeft +=
                scrollOffset * window.innerWidth;
        }
    };

    return (
        <main className="h-screen w-full overflow-hidden bg-c-white">
            <div className="flex h-full flex-col">
                <Navbar />
                <div className="flex-grow overflow-y-scroll">
                    <section className="relative mb-12 h-96">
                        <h1 className="my-2 mx-4 text-xl font-bold md:mx-20">
                            Popular Media
                        </h1>
                        <button
                            onClick={() => scroll(0, -1)}
                            className="absolute left-0 z-30 mx-6 mt-8 hidden h-5/6 w-12 rounded-lg bg-c-white text-xl font-bold text-c-black opacity-25 hover:opacity-100 md:block"
                        >
                            <ArrowBackIosIcon />
                        </button>
                        <button
                            onClick={() => scroll(0, 1)}
                            className="absolute right-0 z-30 mx-6 mt-8 hidden h-5/6 w-12 rounded-lg bg-c-white text-xl font-bold text-c-black opacity-25 hover:opacity-100 md:block"
                        >
                            <ArrowForwardIosIcon />
                        </button>

                        <div
                            ref={refs[0]}
                            className="flex h-full items-center overflow-y-hidden overflow-x-scroll scroll-smooth whitespace-nowrap py-6 md:overflow-hidden"
                        >
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="netflix"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                        </div>
                    </section>
                    <section className="relative mb-12 h-96">
                        <h1 className="my-2 mx-4 text-xl font-bold md:mx-20">
                            Recommended By Friends
                        </h1>
                        <button
                            onClick={() => scroll(1, -1)}
                            className="absolute left-0 z-30 mx-6 mt-8 hidden h-5/6 w-12 rounded-lg bg-c-white text-xl font-bold text-c-black opacity-25 hover:opacity-100 md:block"
                        >
                            <ArrowBackIosIcon />
                        </button>
                        <button
                            onClick={() => scroll(1, 1)}
                            className="absolute right-0 z-30 mx-6 mt-8 hidden h-5/6 w-12 rounded-lg bg-c-white text-xl font-bold text-c-black opacity-25 hover:opacity-100 md:block"
                        >
                            <ArrowForwardIosIcon />
                        </button>
                        <div
                            ref={refs[1]}
                            className="h-full overflow-y-hidden overflow-x-scroll scroll-smooth whitespace-nowrap py-6 md:overflow-hidden"
                        >
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="netflix"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="netflix"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="disney"
                                rating="7.6"
                            ></BigCard>
                            <BigCard
                                streamingService="hbo"
                                rating="7.6"
                            ></BigCard>
                        </div>
                    </section>
                    <section className="flex h-full flex-col">
                        <h1 className="my-2 mx-4 text-xl font-bold md:mx-20">
                            Top Services
                        </h1>
                        <div className="mx-auto flex w-10/12 flex-grow items-center justify-center pb-12">
                            <div className="grid w-full max-w-screen-xl grid-cols-2 grid-rows-2 gap-8 md:grid-cols-3 lg:w-10/12 lg:grid-cols-4">
                                <ServiceCard streamingService="netflix"></ServiceCard>
                                <ServiceCard streamingService="hbo"></ServiceCard>
                                <ServiceCard streamingService="prime"></ServiceCard>
                                <ServiceCard streamingService="disney"></ServiceCard>
                                <ServiceCard streamingService="mubi"></ServiceCard>
                                <ServiceCard streamingService="hulu"></ServiceCard>
                                <ServiceCard streamingService="discovery"></ServiceCard>
                                <ServiceCard streamingService="apple"></ServiceCard>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default page;
