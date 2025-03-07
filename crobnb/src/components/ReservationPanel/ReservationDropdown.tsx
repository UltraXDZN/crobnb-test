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

import { FiMinus, FiPlus } from "react-icons/fi";


import { DropdownProps } from './ReservationDropdownTypes';

const ReservationDropdown: React.FC<DropdownProps> = (props) => {
    //const [isOpen, setIsOpen] = useState(false);


    const [selectedOption, setSelectedOption] = useState(props.options?.[0] || '');

    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

    const [adultCount, setAdultCount] = useState(props.minValue || 0);
    const [childCount, setChildCount] = useState(props.minValue || 0);

    const renderDropdownHeader = (selectedText: string) => (
        <div className="flex flex-col gap-4">
            <span className="font-mulish font-bold text-sm text-grayscale-80">
                {props.title}
            </span>
            <div className="relative">
                <div
                    className="group w-[250px] h-[48px] bg-grayscale-white rounded-[5px] border-2 border-grayscale-10 flex items-center justify-between p-[12px] hover:border-grayscale-80 hover:text-grayscale-80 cursor-pointer"
                    onClick={() => {
                        props.onToggle();
                    }}
                >
                    <div className="flex items-center gap-2 text-grayscale-60 group-hover:text-grayscale-80">
                        <img src={props.icon} alt={props.title} className="w-8 h-8 object-contain" />
                        <span className="flex-1 truncate whitespace-nowrap">
                            {selectedText}
                        </span>
                    </div>
                    <img
                        src={arrow_down}
                        alt="Arrow down"
                        className="w-4 h-4 object-contain group-hover:filter group-hover:brightness-50"
                    />
                </div>
                {props.isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-grayscale-10 rounded-[5px] shadow-lg">
                        {renderDropdownContent()}
                    </div>
                )}
            </div>
        </div>
    );

    const handleOptionSelected = () => {
        props.onToggle();
    };

    const renderDropdownContent = () => {
        switch (props.variant) {
            case 'standard':
                return <StandardDropdown options={props.options} />;
            case 'icon':
                return <IconDropdown options={props.options} icon={props.icon} />;
            case 'calendar':
                return <CalendarDropdown />;
            case 'guests':
                return <GuestsDropdown minValue={props.minValue} maxValue={props.maxValue} />;
        }
    }

    const StandardDropdown = ({ options }: { options: string[] }) => {

        const handleOptionClick = (option: string) => {
            setSelectedOption(option);
            handleOptionSelected();
        };

        return (
            <>
                {options.map((option, index) => (
                    <div key={index}
                        className='p-2 hover:bg-grayscale-10 cursor-pointer'
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </>
        )
    };


    const IconDropdown = ({ options, icon }: { options: string[], icon: string }) => {

        const handleOptionClick = (option: string) => {
            setSelectedOption(option);
            handleOptionSelected();
        };

        return (
            <>
                {options.map((option, index) => (
                    <div key={index}
                        className='p-2 hover:bg-grayscale-10 cursor-pointer flex items-center gap-2'
                        onClick={() => handleOptionClick(option)}
                        style={{
                            paddingLeft: index === 0 ? '0.5rem' : '2rem'
                        }}
                    >
                        {index === 0 && (
                            <img src={icon}
                                alt={option}
                                className='w-4 h-4 object-contain filter grayscale'
                            />
                        )}
                        {option}
                    </div>
                ))}
            </>
        )
    };

    const CalendarDropdown = () => {
        const [currentMonth, setCurrentMonth] = useState(new Date());


        const handleDayClick = (day: Date) => {
            if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
                setSelectedStartDate(day);
                setSelectedEndDate(null);
            }
            else {
                if (isBefore(day, selectedStartDate)) {
                    setSelectedStartDate(day);
                }
                else {
                    setSelectedEndDate(day);
                    setIsOpen(false);
                }
            }
            handleOptionSelected();
        }

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

        return renderCalendar();
    };

    const GuestsDropdown = ({ minValue, maxValue }: { minValue: number, maxValue: number }) => {

        const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
            if (value < maxValue) {
                setter(value + 1);
            }
        };

        const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
            if (value > minValue) {
                setter(value - 1);
            }
        };
        
        const CounterButton: React.FC<{
            type: 'increment' | 'decrement';
            onClick: () => void;
        }> = ({ type, onClick }) => {
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                    className="w-8 h-8 bg-primary-80 text-white rounded-[5px] flex items-center justify-center"
                >
                    {type === 'increment' ? (
                        <FiPlus fill="white" size={24} />
                    ) : (
                        <FiMinus fill="white" size={24} />
                    )}
                </button>
            );
        };

        const GuestCounter = ({
            label,
            count,
            onIncrement,
            onDecrement,
        }: {
            label: string;
            count: number;
            onIncrement: () => void;
            onDecrement: () => void;
        }) => {
            return (
                <div className="flex justify-between items-center">
                    <span className="font-mulish font-bold text-sm text-grayscale-80">
                        {label}
                    </span>
                    <div className="flex items-center gap-2">
                        <CounterButton type="decrement" onClick={onDecrement} />
                        <span className="font-mulish font-bold text-lg text-grayscale-100">
                            {count}
                        </span>
                        <CounterButton type="increment" onClick={onIncrement} />
                    </div>
                </div>
            );
        };

        return (
            <div className="p-2 flex flex-col gap-4">
                <GuestCounter
                    label="Odrasli"
                    count={adultCount}
                    onIncrement={() => handleIncrement(setAdultCount, adultCount)}
                    onDecrement={() => handleDecrement(setAdultCount, adultCount)}
                />
                <GuestCounter
                    label="Djeca"
                    count={childCount}
                    onIncrement={() => handleIncrement(setChildCount, childCount)}
                    onDecrement={() => handleDecrement(setChildCount, childCount)}
                />
            </div>
        );
    };

    let selectedText = 'Odaberi';
    if (props.variant === 'standard' || props.variant === 'icon') {
        selectedText = selectedOption || 'Odaberi';
    } else if (props.variant === 'calendar') {
        if (selectedStartDate && selectedEndDate) {
            selectedText = `${format(selectedStartDate, 'yyyy-MM-dd')} - ${format(selectedEndDate, 'yyyy-MM-dd', { locale: hr })}`;
        } else if (selectedStartDate) {
            selectedText = format(selectedStartDate, 'yyyy-MM-dd', { locale: hr });
        } else {
            selectedText = 'Odaberi datum';
        }
    } else if (props.variant === 'guests') {
        selectedText = `Odrasli: ${adultCount}, Djeca: ${childCount}`;
    }

    return renderDropdownHeader(selectedText);

};
export default ReservationDropdown;
