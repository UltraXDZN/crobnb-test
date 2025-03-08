import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import LloydsLogo from '@components/Icons/lloydsLogo';
import { FaArrowUp } from 'react-icons/fa';

interface FooterProps {
    email?: string;
    phone?: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
    };
    copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
    email = 'info@crobnb.hr',
    phone = '01 2377 654',
    socialLinks = {},
    copyright = '© Crobnb 2023. All rights reserved'
}) => {
    const { facebook = '#', twitter = '#', instagram = '#' } = socialLinks;
    const regionNames = [
        'Istočna Hrvatska',
        'Središnja Hrvatska',
        'Gorska Hrvatska',
        'Sjeverna Dalmacija',
        'Središnja Dalmacija',
        'Južna Dalmacija'
    ];

    const typesOfStay = [
        'Hoteli',
        'Apartmani',
        'Mobilne kućice',
        'Ville',
        'Turistička naselja',
        'Skijališta'
    ]

    return (
        <footer className="bg-primary-10 pt-8">
            <div className="container mx-auto px-4 font-mulish flex flex-row flex-wrap justify-between">
                <div className="flex flex-wrap justify-between gap-[46px]">
                    <div className="w-auto mb-4">
                        <h4 className="font-mulish font-normal text-xl leading-8 tracking-normal text-black mb-2">
                            Crobnb.hr
                        </h4>
                        <a href={`mailto:${email}`} className='mt-2 block text-grayscale-100 hover:text-primary-80 cursor-pointer'>
                            {email}
                        </a>
                        <span className='mt-2 block text-grayscale-100 hover:text-primary-80 cursor-pointer'>
                            {phone}
                        </span>
                    </div>
                    <div className="w-auto mb-4">
                        <h4 className="font-mulish font-normal text-xl leading-8 tracking-normal text-black mb-2">
                            Tipovi smještaja
                        </h4>
                        {typesOfStay.map((type) => (
                            <span
                                className='mt-2 block text-grayscale-100 hover:text-primary-80 cursor-pointer'
                                key={type}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                    <div className="w-auto mb-4">
                        <h4 className="font-mulish font-normal text-xl leading-8 tracking-normal text-black mb-2">
                            Regije
                        </h4>
                        {regionNames.map(region => (
                            <span
                                className='mt-2 block w-auto text-grayscale-100 hover:text-primary-80 cursor-pointer'
                                key={region}
                            >
                                {region}
                            </span>
                        ))}
                    </div>
                    <div className="w-auto mb-4">
                        <h4 className="font-mulish font-normal text-xl leading-8 tracking-normal text-black mb-2">
                            Prati nas
                        </h4>
                        <div className="flex space-x-4">
                            <a href={facebook}>
                                <FiFacebook className='text-primary-100 hover:text-primary-80 text-xl' />
                            </a>
                            <a href={twitter}>
                                <FiTwitter className='text-primary-100 hover:text-primary-80 text-xl' />
                            </a>
                            <a href={instagram}>
                                <FiInstagram className='text-primary-100 hover:text-primary-80 text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center items-center w-12 h-12 p-3 gap-2 rounded-md border border-primary-80 
                    group hover:border-primary-50 cursor-pointer
                    transition-all duration-300 ease-in-out hover:bg-primary-5 hover:-translate-y-1"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <FaArrowUp className='text-primary-80 text-xl group-hover:text-primary-50 transition-colors duration-300 ease-in-out' />
                </div>
            </div>
            <div className="text-left mt-8 bg-primary-5 flex flex-row justify-between p-4 border-t-[1px] border-grayscale-40">
                <span className='font-tt-norms font-normal text-base leading-5 tracking-normal text-center'>
                    {copyright}
                </span>
                <LloydsLogo />
            </div>
        </footer>
    );
};

export default Footer;