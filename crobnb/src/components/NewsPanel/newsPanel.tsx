import React, { useState, useMemo } from 'react';
import NewsCard from './newsCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import newsCoverGastro from '@assets/background/news/01.jpeg';
import newsCoverGlazba from '@assets/background/news/02.jpeg';
import newsCoverKultura from '@assets/background/news/03.jpeg';

const NewsPanel: React.FC = () => {
    const newsItems = [
        {
            cover: newsCoverGastro,
            date: new Date(),
            title: 'Uskoro počinju dani vina 2023 - Istra',
            tag: 'Gastro Eventi',
            description: 'Na Dan vina svi vinoljupci, kao i oni koji će to tek postati, imaju priliku posjetiti nekog od istarskih vinara i saznati kako proizvode vrhunska i svjetski poznata vina...'
        },
        {
            cover: newsCoverGlazba,
            date: new Date(),
            title: 'Započela prodaja ulaznica za Ultra Europe 2023',
            tag: 'Glazba',
            description: 'Festival elektroničke glazbe održava se sredinom srpnja u Splitu. Započela je prodaja ulaznica i one se mogu kupiti po early-bird cijenama do kraja travnja na Eventim...'
        },
        {
            cover: newsCoverKultura,
            date: new Date(),
            title: 'Otvorene prijave na 32. Dana hrvatskog filma',
            tag: 'Kultura',
            description: '32. Dani Hrvatskog Filma održat će se od 15. do 20. svibnja 2023. u Studentskom centru Sveučilišta u Zagrebu, Savska 25. Prijave su otvorene sljedećim kategorijama...'
        },
        {
            cover: newsCoverKultura,
            date: new Date(),
            title: 'Otvorene prijave na 32. Dana hrvatskog filma',
            tag: 'Kultura',
            description: '32. Dani Hrvatskog Filma održat će se od 15. do 20. svibnja 2023. u Studentskom centru Sveučilišta u Zagrebu, Savska 25. Prijave su otvorene sljedećim kategorijama...'
        }
    ];

    // Group items into slides of 3
    const slides = useMemo(() => {
        const result = [];
        for (let i = 0; i < newsItems.length; i += 3) {
            result.push(newsItems.slice(i, i + 3));
        }
        return result;
    }, [newsItems]);

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='mt-[50px] mb-[100px] w-full bg-primary-5 py-16 relative'>
            <div className='max-w-[1360px] mx-auto px-4'>
                <div className='flex flex-row justify-between items-center mb-8'>
                    <h1 className="text-[32px] font-mulish font-bold text-grayscale-100 mb-8">Novosti</h1>
                    <div className='flex flex-row items-center w-auto h-[48px] gap-[8px] rounded-[5px] pt-[12px] mr-10 pb-[12px] text-primary-80 hover:text-primary-50 cursor-pointer'>
                        <span className='font-mulish font-bold text-[16px] leading-[24px] tracking-[0px]'>Vidi sve novosti</span>
                        <FaChevronRight className='text-lg' />
                    </div>
                </div>
                <div className='relative'>
                    {/* Carousel container */}
                    <div className='overflow-hidden'>
                        <div
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${activeIndex * 32}%)` }}
                        >
                            {slides.map((slideItems, slideIndex) => (
                                <div key={slideIndex} className='min-w-full flex-shrink-0 flex justify-between gap-4'>
                                    {slideItems.map((item, itemIndex) => (
                                        <div key={itemIndex} className='w-[32%]'>
                                            <NewsCard
                                                newsCardCover={item.cover}
                                                newsCardDate={item.date}
                                                newsCardTitle={item.title}
                                                newsCardTag={item.tag}
                                                newsCardDescription={item.description}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary-80' : 'bg-grayscale-10'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation arrows moved outside of inner container */}
            <button
                onClick={prevSlide}
                className="ml-20 absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
            >
                <FaChevronLeft className="text-primary-80 hover:text-primary-50 cursor-pointer" size={32}/>
            </button>

            <button
                onClick={nextSlide}
                className="mr-20 absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
            >
                <FaChevronRight className="text-primary-80 hover:text-primary-50 cursor-pointer" size={32}/>
            </button>
        </div>
    );
};

export default NewsPanel;