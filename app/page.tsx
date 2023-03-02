import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import StaticMovie from "./images/staticmovie.gif"

export default function Home() {
  return (
    <main className='bg-c-white w-full h-screen overflow-hidden'>
      <div className='flex justify-center flex-col h-full'>
        <Navbar />
        <div className='w-full flex flex-row h-full flex-auto'>
            <div className='flex justify-center items-center flex-1'>
                <div className='w-10/12 lg:w-6/12 flex justify-center flex-col items-center bg-[url("./images/staticmovie.gif")] bg-no-repeat bg-center bg-cover mx-4 mb-14 py-24 md:py-36 border-8 border-c-white border-solid shadow-tv rounded-lg'>
                    <h1 className='text-3xl font-extrabold my-4 text-c-white text-center'>What are we watching?</h1>
                    <div className='w-10/12 flex flex-col md:flex-row justify-evenly items-center my-4'>
                        <Link href="/" className='shadow-buttons text-center mx-3 w-full bg-c-red px-8 py-3 font-medium text-c-black rounded-md hover:border-c-white hover:border-2 hover:text-c-white border-c-black border-2 border-solid duration-200'>Continue Show</Link>
                        <Link href="/popular" className='shadow-buttons w-full text-center  bg-c-white px-8 py-3 my-3 font-medium rounded-md duration-200 hover:border-c-red border-2 border-c-black hover:text-c-red'>No Idea</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
