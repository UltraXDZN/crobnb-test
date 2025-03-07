import React from 'react';
import SelectionInstance from './SelectionInstance';




import search from '../../assets/icons/search.svg'

const ReservationPanel: React.FC = () => {
    return (
        <div className="absolute top-[470px] left-1/2 transform -translate-x-1/2 w-[1216px] h-[124] bg-grayscale-white p-6 align-middle rounded-[5px] shadow-lg flex flex-row gap-4">
            <div className="flex flex-row items-center mt-8 gap-5">
                <SelectionInstance />
                <button className="w-[100px] h-[48px] bg-primary-80 hover:bg-primary-100 text-grayscale-white rounded-[5px] font-mulish font-bold text-lg flex flex-row justify-center items-center cursor-pointer mt-8">
                    <img src={search} alt="Traži" className="w-6 h-6" />
                    <span>Traži</span>
                </button>
            </div>
        </div>
    );
};

export default ReservationPanel;