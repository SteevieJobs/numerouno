import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import StaticMovie from "./images/staticmovie.gif"

export default function Home() {
  return (
    <main className='bg-c-white w-full h-screen'>
      <div className='flex justify-center flex-col h-full'>
        <Navbar />
        <div className='w-full flex flex-row h-full flex-auto'>
            <div className='flex justify-center items-center flex-1'>
                <div className='w-full flex justify-center flex-col items-center'>
                    <h1 className='text-3xl font-extrabold my-4'>What are we watching?</h1>
                    <div className='w-10/12 flex flex-row justify-evenly items-center my-4'>
                        <Link href="/" className='shadow-buttons text-center mx-3 w-full bg-c-red px-8 py-3 font-medium text-white rounded-md hover:bg-c-redorange duration-200'>Continue Show</Link>
                        <Link href="/" className='shadow-buttons w-full text-center border border-c-black border-solid px-8 py-3 font-medium rounded-md duration-200 hover:bg-c-black hover:text-white'>No Idea</Link>
                    </div>
                </div>
            </div>
            <div className='justify-center items-center flex-1 hidden lg:flex'>
                <div className='bg-black p-4 rounded-lg mr-10 shadow-tv w-full flex items-center justify-center'>
                    <Image className='border border-solid border-c-white w-full' src={StaticMovie} width={600} height={200} alt="static"></Image>
                    <div className="w-16  overflow-hidden inline-block absolute bg-c-white">
                    <div className=" h-20 w-20 bg-black rotate-45 transform origin-top-left"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
