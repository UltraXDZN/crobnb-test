import React, { useState, JSX } from 'react';


import {
    addMonths,
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    isBefore,
    isAfter
} from 'date-fns';
import { hr } from 'date-fns/locale';

import arrow_down from '@assets/icons/arrow_down.svg';
import right_arrow from '@assets/icons/right_arrow.svg';
import left_arrow from '@assets/icons/left_arrow.svg';

interface DropdownProps {
    title: string;
    icon: string;
    options: string[];

    hasStartingIcon?: boolean;
    isCalendar?: boolean;
}

const ReservationDropdown: React.FC<DropdownProps> = ({ title, icon, options, hasStartingIcon, isCalendar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

    const toggledDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleDayClick = (day: Date) => {
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
            setSelectedStartDate(day);
            setSelectedEndDate(null);
        }
        else {
            if (isBefore(day, selectedStartDate)) {
                setSelectedStartDate(day);
            } else {
                setSelectedEndDate(day);
                setIsOpen(false);
            }
        }
    }

    //Provjera ako je prvi odabrani dan prije drugog odabranog dana
    const checkRange = (day: Date) => {
        if (selectedStartDate && selectedEndDate) {
            return (isAfter(day, selectedStartDate) || isSameDay(day, selectedStartDate)) &&
                (isBefore(day, selectedEndDate) || isSameDay(day, selectedEndDate));
        }
        return false;
    }


    const renderCalendar = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
        const days = eachDayOfInterval({ start: startDate, end: endDate });
        const dateFormat = "d";

        const rows: JSX.Element[] = [];
        let daysInRow: JSX.Element[] = [];

        days.forEach((day, i) => {
            const formattedDay = format(day, dateFormat);
            const isSelectedStart = selectedStartDate && isSameDay(day, selectedStartDate);
            const isSelectedEnd = selectedEndDate && isSameDay(day, selectedEndDate);
            const inRange = checkRange(day);
            daysInRow.push(
                <div
                    key={day.toString()}
                    onClick={() => {
                        handleDayClick(day);
                    }}
                    className={`cursor-pointer text-center p-2 flex items-center justify-center 
                        ${!isSameMonth(day, monthStart) ? 'font-mulish font-bold text-transparent text-sm' : 'font-mulish font-bold text-grayscale-100 text-sm'} 
                        ${isSelectedStart || isSelectedEnd ? 'bg-primary-80 text-white rounded-full'
                            : inRange ? 'bg-primary-30 text-grayscale-100'
                                : 'hover:bg-primary-20 rounded-full'}`}
                    style={{ width: '2rem', height: '2rem' }}
                >
                    {formattedDay}
                </div>
            );

            if (i % 7 === 6) {
                rows.push(
                    <div key={i} className="flex justify-between">
                        {daysInRow}
                    </div>
                );
                daysInRow = [];
            }
        });

        return (
            <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentMonth(addMonths(currentMonth, -1));
                        }}
                    >
                        <img src={left_arrow} alt='Left arrow' className="w-4 h-4" />
                    </button>
                    <span className="font-bold font-mulish text-md text-grayscale-100 capitalize">
                        {format(currentMonth, "LLLL yyyy", { locale: hr })}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentMonth(addMonths(currentMonth, 1));
                        }}
                    >
                        <img src={right_arrow} alt='Right arrow' className="w-4 h-4" />
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'].map((day, index) => (
                        <div key={index} className="text-center uppercase font-mulish font-medium text-sm text-grayscale-60">
                            {day}
                        </div>
                    ))}
                </div>
                <div>{rows}</div>
            </div>
        );
    };

    const getRangeText = () => {
        if (selectedStartDate && selectedEndDate) {
            return `${format(selectedStartDate, 'yyyy-MM-dd')} - ${format(selectedEndDate, 'yyyy-MM-dd', { locale: hr })}`;
        }
        if (selectedStartDate) {
            return format(selectedStartDate, 'yyyy-MM-dd', { locale: hr });
        }
        return 'Odaberi datum';
    };

    // If isCalendar true, display calendar dropdown; otherwise, a normal list dropdown
    if (isCalendar) {
        return (
            <div className="flex flex-col gap-4">
                <span className="font-mulish font-bold text-sm text-grayscale-80">
                    {title}
                </span>
                <div className="relative">
                    <div
                        className="group w-[250px] h-[48px] bg-grayscale-white rounded-[5px] border-2 border-grayscale-10 flex items-center justify-between p-[12px] hover:border-grayscale-80 hover:text-grayscale-80 cursor-pointer"
                        onClick={toggledDropdown}
                    >
                        <div className="flex items-center gap-2 text-grayscale-60 group-hover:text-grayscale-80">
                            <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                            <span className="flex-1 truncate whitespace-nowrap">
                                {getRangeText()}
                            </span>
                        </div>
                        <img
                            src={arrow_down}
                            alt="Arrow down"
                            className="w-4 h-4 object-contain group-hover:filter group-hover:brightness-50"
                        />
                    </div>
                    {isOpen && (
                        <div className="absolute z-10 mt-2 w-full bg-white border border-grayscale-10 rounded-[5px] shadow-lg">
                            {renderCalendar()}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <span className="font-mulish font-bold text-sm text-grayscale-80 ">
                {title}
            </span>
            <div className="relative">
                <div
                    className="group w-[250px] h-[48px] bg-grayscale-white rounded-[5px] border-2 border-grayscale-10 flex items-center justify-between p-[12px] hover:border-grayscale-80 hover:text-grayscale-80 cursor-pointer"
                    onClick={toggledDropdown}
                >
                    <div className="flex items-center gap-2 text-grayscale-60 group-hover:text-grayscale-80">
                        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                        <span className="flex-1 truncate whitespace-nowrap">
                            {selectedOption || 'Odaberi'}
                        </span>
                    </div>
                    <img
                        src={arrow_down}
                        alt="Arrow down"
                        className="w-4 h-4 object-contain group-hover:filter group-hover:brightness-50"
                    />
                </div>
                {isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-grayscale-10 rounded-[5px] shadow-lg">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="p-2 cursor-pointer hover:bg-grayscale-10 flex items-center gap-2"
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    paddingLeft: hasStartingIcon ? (index === 0 ? '0.5rem' : '2rem') : '0.5rem'
                                }}
                            >
                                {index === 0 && hasStartingIcon && (
                                    <img
                                        src={icon}
                                        alt={option}
                                        className="w-4 h-4 object-contain filter grayscale"
                                    />
                                )}
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReservationDropdown;