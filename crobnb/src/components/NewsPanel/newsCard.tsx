import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface NewsCardProps {
    newsCardCover: string;
    newsCardTitle: string;
    newsCardTag: string;
    newsCardDate: Date;
    newsCardDescription: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ newsCardCover, newsCardTitle, newsCardTag, newsCardDate, newsCardDescription }) => {
    return (
        <div className='border-2 border-grayscale-10 hover:border-primary-50 h-[520px] w-[390px] flex flex-col rounded-[5px] hover:shadow-[0px_4px_20px_0px_#00000014] group cursor-pointer'>
            <div className='w-full h-[215px] bg-primary-80'
                style={{
                    backgroundImage: `url(${newsCardCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

            </div>
            <div className='w-full h-[304px] bg-white p-4 flex flex-col gap-[16px] rounded-br-[5px] rounded-bl-[5px]'>
                <div className='flex flex-row justify-between font-mulish uppercase text-xs text-grayscale-60'>
                    <span>{newsCardTag}</span>
                    <span>{new Date(newsCardDate).toLocaleDateString('en-GB')}</span>
                </div>
                <h1 className='font-mulish text-[22px] font-medium leading-[32px] tracking-[0px] text-grayscale-100 group-hover:text-primary-80'>
                    {newsCardTitle}
                </h1>
                <p className='font-mulish text-[16px] font-normal leading-[24px] tracking-[0.2px] text-grayscale-60'>
                    {newsCardDescription}
                </p>
                <div className='flex flex-row items-center w-[357.33px] h-[48px] gap-[8px] rounded-[5px] pt-[12px] pr-[16px] pb-[12px] text-primary-80 group-hover:text-primary-50'>
                    <span className='font-mulish font-bold text-[16px] leading-[24px] tracking-[0px]'>Vidi više</span>
                    <FaChevronRight className='text-lg' />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;