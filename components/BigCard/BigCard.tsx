import React from 'react';
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Hbo from '../../app/images/hbo.png';
import Netflix from '../../app/images/netflix.png';
import Disney from '../../app/images/disney.png';

type Props = {
    rating: string;
    streamingService: string;
};

interface Service {
    image: StaticImageData;
    url: string | null;
}

interface Services {
    [key: string]: Service;
}

const Services: Services = {
    disney: {
        image: Disney,
        url: null,
    },
    hbo: {
        image: Hbo,
        url: null,
    },
    netflix: {
        image: Netflix,
        url: null,
    },
};

const BigCard = (props: Props) => {
    const [text, setText] = useState(props.rating);
    return (
        <div
            className='main-card scrollbar scrollbar-thumb-c-red scrollbar-track-transparent mx-4 inline-block aspect-[2/3] h-full cursor-pointer rounded-xl bg-[url("./images/mrrobot.jpg")]
            bg-contain bg-center p-2 shadow-BigCard transition-transform duration-200 ease-in-out hover:scale-105'
            data-text={text}
        >
            <div className="absolute bottom-0 mb-2 w-1/4 rounded-md bg-c-white ">
                <Image
                    src={Services[props.streamingService].image}
                    height={40}
                    width={80}
                    alt="streaming"
                    className="mx-auto object-contain"
                ></Image>
            </div>
        </div>
    );
};

export default BigCard;
