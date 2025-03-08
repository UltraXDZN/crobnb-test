import React from 'react';
import { PiSmileyXEyes } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20 gap-5 w-[715px] mx-auto text-center">
            <div className='flex items-center justify-center bg-primary-5 rounded-full'>
                <PiSmileyXEyes className='text-2xl text-primary-100 m-2' />
            </div>
            <h1 className="font-mulish font-bold text-[32px] leading-[44px] tracking-[0px] text-center">
                Error 404
            </h1>
            <p className="mt-4 font-mulish font-normal text-[20px] leading-[32px] tracking-[0px] text-center">
                Žao nam je, ali stranica koju tražite nije pronađena. Moguće je da je premještena, izbrisana ili da nikada nije postojala.
            </p>
            <p className="mt-2 font-mulish font-normal text-[20px] leading-[32px] tracking-[0px] text-center">
                Predlažemo da se vratite na Naslovnu stranicu.
            </p>
            <button
                onClick={handleGoBack}
                className="mt-6 w-auto h-[48px] gap-[8px] rounded-[5px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] text-lg bg-primary-80 text-white hover:bg-primary-100 cursor-pointer"
            >
                Natrag na Naslovnu
            </button>
        </div>
    );
};

export default ErrorPage;