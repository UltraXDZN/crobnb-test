import React from 'react';
import aboutUs from '@assets/background/about/01.jpeg';

const AboutUs: React.FC = () => {
    const aboutUsText = [
        [
            "Crobnb je platforma za iznajmljivanje smještaja koja omogućava putnicima da brzo i jednostavno pronađu savršeni smještaj za svoj sljedeći put.",
            "Uz širok apartmana, vila i hotela diljem Hrvatske, naša platforma nudi putnicima mogućnost da pronađu idealan smještaj za svoje potrebe i proračun."
        ],
        [
            "Korisničko iskustvo je naš prioritet, stoga smo dizajnirali platformu koja je jednostavna za upotrebu i koja nudi detaljne informacije o smještaju,",
            "uključujući slike, informacije o lokaciji, cijene i dostupnost."
        ],
        [
            "Naš cilj je omogućiti putnicima da jednostavno i brzo pronađu smještaj po svojoj mjeri te da se osjećaju sigurno i pouzdano prilikom rezerviranja",
            "smještaja putem naše platforme."
        ]
    ];
    return (
        <div className='mt-[50px] mb-[100px] w-full flex justify-center'>
            <div className='max-w-[1216px] w-full px-4 mx-auto'>
                <div className='flex flex-row flex-wrap gap-[80px] items-center'>
                    <div className='flex flex-col gap-[22px] flex-1'>
                        <h1 className="text-[32px] font-mulish font-bold text-grayscale-100">
                            O nama
                        </h1>
                        {aboutUsText.map((paragraph, index) => (
                            <div key={index}>
                                {paragraph.map((text, subIndex) => (
                                    <span key={subIndex} className='font-mulish font-normal text-base leading-6 tracking-[0.2px]'>
                                        {text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='relative w-[384px] h-[297px] rounded-[5px]'>
                        <img 
                            src={aboutUs} 
                            alt="O nama" 
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                        <div className='absolute w-[200px] h-[200px] rounded-[5px] -top-[25px] -right-[25px] bg-primary-50 z-[-1]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;