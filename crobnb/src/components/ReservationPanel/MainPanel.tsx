import React from 'react';
import SelectionInstance from './SelectionInstance';

import { FiSearch } from 'react-icons/fi';

const ReservationPanel: React.FC = () => {
    return (
        <div className='bg-grayscale-white p-6 align-middle rounded-[5px] flex flex-row gap-4 border border-grayscale-10'>
            <div className="flex flex-row items-center mt-8 gap-5">
                <SelectionInstance />
                <button
                    className="w-[100px] h-[48px] bg-primary-80 hover:bg-primary-50 text-grayscale-white rounded-[5px] font-mulish font-bold text-lg flex flex-row justify-center items-center cursor-pointer mt-8"
                    onClick={() => window.location.href = "/smjestaj"}
                >
                    <FiSearch className='text-2xl text-grayscale-white' />
                    <span>Traži</span>
                </button>
            </div>
        </div>
    );
};

export default ReservationPanel;