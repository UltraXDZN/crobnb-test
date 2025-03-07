import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface RegionCardProps {
    regionName: string;
    regionImageUrl: string;
};

const RegionCard: React.FC<RegionCardProps> = ({ regionName, regionImageUrl }) => {
    return (
        <div
            className="w-[280px] h-[190px] relative rounded-[5px] overflow-hidden group"
            style={{
                backgroundImage: `url(${regionImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(0.52deg, rgba(0, 0, 0, 0.5) 0.48%, rgba(0, 0, 0, 0) 99.58%)'}}
            />
            <div className="absolute bottom-0 w-full h-[48px] bg-black/30 p-2 gap-[20px] flex flex-row items-center justify-between text-white cursor-pointer group-hover:text-primary-20">
                <span className="relative font-mulish text-[22px]">{regionName}</span>
                <FaChevronRight className='text-2xl'/>
            </div>
        </div>
    );
};

export default RegionCard;