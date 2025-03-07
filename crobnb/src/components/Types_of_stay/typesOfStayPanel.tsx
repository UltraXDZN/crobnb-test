import React from 'react';
import TypeCard from './typeCard';

import { RiHotelLine } from 'react-icons/ri';
import { MdOutlineBed, MdOutlineDeck, MdOutlineVilla } from 'react-icons/md';
import { PiHouseLine } from 'react-icons/pi';

const TypesOfStayPanel: React.FC = () => {
    return (
        <div className='mt-[150px] w-full flex justify-center'>
            <div className='w-full max-w-7xl px-4 mx-auto'>
                <h1 className="text-[32px] font-mulish font-bold text-grayscale-100">Tipovi smještaja</h1>
                <div className='flex flex-row flex-wrap gap-4 mt-5 overflow-x-auto'>
                    <TypeCard typeName='Hoteli' typeIcon={RiHotelLine} />
                    <TypeCard typeName='Apartmani' typeIcon={MdOutlineBed} />
                    <TypeCard typeName='Ville' typeIcon={MdOutlineVilla} />
                    <TypeCard typeName='Turistička naselja' typeIcon={MdOutlineDeck} />
                    <TypeCard typeName='Mobilne kućice' typeIcon={PiHouseLine} />
                </div>
            </div>
        </div>
    );
};

export default TypesOfStayPanel;