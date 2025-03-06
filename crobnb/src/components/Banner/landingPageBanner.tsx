import banner_image from '../../assets/background/banner_bg.jpeg';
import React, { useState, useEffect } from 'react';

const LandingPageBanner: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 10);
        return () => { };
    }, []);

    return (
        <div style={{ backgroundImage: `url(${banner_image})` }}
            className={`relative w-full h-[450px] bg-cover bg-center flex items-center justify-start p-[112px] transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" /> {/* Ovo je bijeli overlay*/}
            <div className={`relative transition-transform duration-1000 ease-out ${isLoaded ? 'translate-x-0' : 'translate-x-[100px]'}`}>
                <h1 className='text-6xl font-mulish text-primary-100 font-bold h-[144px]'>
                    <span>Otkrijte najbolje smještaje</span>
                    <br />
                    <span className='mt-4 block'>diljem Hrvatske</span>
                </h1>
                <p className='text-xl font-mulish text-primary-100 font-normal'>
                    <span>Odaberite između luksuznih vila, hotela, apartmana, mobilnih kućica ili</span>
                    <br />
                    <span>turističkih naselja i osigurajte svoj savršeni odmor po mjeri</span>
                </p>
            </div>
        </div>
    );
};

export default LandingPageBanner;