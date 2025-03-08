import React from 'react';
import { IconType } from 'react-icons';
import { FaChevronRight } from 'react-icons/fa';

interface TypeCardProps {
    typeName: string;
    typeIcon: IconType;
}

const TypeCard: React.FC<TypeCardProps> = ({ typeName, typeIcon }) => {
    const Icon = typeIcon;
    return (
        <div className='group border-grayscale-10 border-1 px-8 p-8 flex flex-col gap-2 justify-center items-center rounded-[5px] cursor-pointer'>
            <Icon className='text-primary-80 text-5xl group-hover:text-primary-50' />
            <div className='flex flex-row gap-2 justify-center items-center w-[160px]'>
                <span className='font-mulish text-base font-normal text-grayscale-100 leading-6'>{typeName}</span>
                <FaChevronRight  className='text-grayscale-40'/>
            </div>
        </div>
    );
};

export default TypeCard;