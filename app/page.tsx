import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import StaticMovie from './images/staticmovie.gif';

export default function Home() {
    return (
        <main className="h-screen w-full bg-c-white">
            <div className="flex h-full flex-col justify-center">
                <Navbar />
                <div className="flex h-full w-full flex-auto flex-row">
                    <div className="flex flex-1 items-center justify-center">
                        <div className='mx-4 mb-14 flex w-10/12 flex-col items-center justify-center rounded-lg border-8 border-solid border-c-white bg-[url("./images/staticmovie.gif")] bg-cover bg-center bg-no-repeat py-24 shadow-tv md:py-36 lg:w-6/12'>
                            <h1 className="my-4 text-center text-3xl font-extrabold text-c-white">
                                What are we watching?
                            </h1>
                            <div className="my-4 flex w-10/12 flex-col items-center justify-evenly md:flex-row">
                                <Link
                                    href="/"
                                    className="mx-3 w-full rounded-md border-2 border-solid border-c-black bg-c-red px-8 py-3 text-center font-medium text-c-black shadow-buttons duration-200 hover:border-2 hover:border-c-white hover:text-c-white"
                                >
                                    Continue Show
                                </Link>
                                <Link
                                    href="/popular"
                                    className="my-3 w-full rounded-md  border-2 border-c-black bg-c-white px-8 py-3 text-center font-medium shadow-buttons duration-200 hover:border-c-white hover:bg-c-black hover:text-c-white"
                                >
                                    No Idea
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
