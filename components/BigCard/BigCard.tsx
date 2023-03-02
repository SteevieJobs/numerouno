import React from 'react'
import "./BigCard.css"
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Hbo from '../../app/images/hbo.png'
import Netflix from '../../app/images/netflix.png'
import Disney from '../../app/images/disney.png'

type Props = {
    rating: string;
    streamingService: string;
}

const Services: { [key: string]: StaticImageData } = {
  'disney': Disney,
  'hbo': Hbo,
  'netflix': Netflix
};

const BigCard = (props: Props) => {
    const [text, setText] = useState(props.rating);
    return (
        <div className='bg-[url("./images/mrrobot.jpg")] bg-contain bg-center p-2 rounded-xl main-card h-full aspect-[2/3] inline-block mx-4 shadow-BigCard scrollbar scrollbar-thumb-c-red scrollbar-track-transparent' data-text={text}>
            <div className='bottom-0 mb-2 w-1/4 bg-c-white absolute rounded-md '>
                <Image src={Services[props.streamingService]} height={40} width={80} alt="streaming" className='mx-auto object-contain'></Image>
            </div>
        </div>
    )
}


export default BigCard
