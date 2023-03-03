import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Hbo from '../../app/images/backgrounds/hbo.jpeg';
import Netflix from '../../app/images/backgrounds/netflix.jpg';
import Apple from '../../app/images/backgrounds/appletv.png';
import Discovery from '../../app/images/backgrounds/discovery.jpg';
import Disney from '../../app/images/backgrounds/disney.jpg';
import Hulu from '../../app/images/backgrounds/hulu.png';
import Mubi from '../../app/images/backgrounds/mubi.jpg';
import Prime from '../../app/images/backgrounds/prime.png';

type Props = {
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
    mubi: {
        image: Mubi,
        url: null,
    },
    discovery: {
        image: Discovery,
        url: null,
    },
    hulu: {
        image: Hulu,
        url: null,
    },
    prime: {
        image: Prime,
        url: null,
    },
    apple: {
        image: Apple,
        url: null,
    },
};

const ServiceCard = (props: Props) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${Services[props.streamingService].image.src})`,
    };

    return (
        <div
            className="flex aspect-square h-full cursor-pointer rounded-xl bg-cover bg-center shadow-serviceCard transition-transform duration-200 ease-in-out hover:scale-105"
            style={backgroundImageStyle}
        >
            <Link href="/" className="h-full w-full"></Link>
        </div>
    );
};

export default ServiceCard;
