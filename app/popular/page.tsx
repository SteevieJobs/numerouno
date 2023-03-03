'use client';

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import BigCard from '@/components/BigCard/BigCard';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

type Props = {};

const page = (props: Props) => {
    return (
        <main className="h-screen w-full overflow-hidden bg-c-white">
            <div className="flex h-full flex-col">
                <Navbar />
                <div className="flex-grow overflow-y-scroll">
                    <section className="mb-12 h-96">
                        <h1 className="my-2 mx-4 text-xl font-bold md:mx-20">
                            Popular Media
                        </h1>
                        <div className="h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap py-6 md:overflow-hidden">
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
                    <section className="mb-12 h-96">
                        <h1 className="my-2 mx-4 text-xl font-bold md:mx-20">
                            Recommended By Friends
                        </h1>
                        <div className="h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap py-6 md:overflow-hidden">
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
