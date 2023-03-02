"use client"

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import BigCard from '@/components/BigCard/BigCard'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='bg-c-white w-full h-screen overflow-hidden'>
      <div className='flex justify-center flex-col h-full'>
        <Navbar />
        <div className='w-full flex flex-col h-full'>
            <section className='h-full mb-12'>
                <h1 className='my-2 mx-4 md:mx-20 font-bold text-xl'>Popular Media</h1>
                <div className='h-full overflow-x-scroll overflow-y-hidden md:overflow-hidden whitespace-nowrap py-4'>
                    <BigCard streamingService='hbo' rating='7.6'></BigCard>
                    <BigCard streamingService='disney' rating='7.6'></BigCard>
                    <BigCard streamingService='netflix' rating='7.6'></BigCard>
                    <BigCard streamingService='hbo' rating='7.6'></BigCard>
                    <BigCard streamingService='disney' rating='7.6'></BigCard>
                    <BigCard streamingService='hbo' rating='7.6'></BigCard>
                </div>
            </section>
            <section className='h-full'>
                <h1 className='my-2 mx-4 md:mx-20 font-bold text-xl'>Top Services</h1>
                <div></div>
            </section>
        </div>
      </div>
    </main>
  )
}


export default page;
