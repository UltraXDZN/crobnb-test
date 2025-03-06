import React, { useState, useRef, useEffect } from "react";

import croatiaFlag from "../assets/icons/flags/hr.svg";
import englishFlag from "../assets/icons/flags/en.svg";

import arrow_down from "../assets/icons/arrow_down.svg";

const languages = [
    {
        code: "HRV",
        name: "Hrvatski",
        flagSrc: croatiaFlag
    },
    {
        code: "ENG",
        name: "English",
        flagSrc: englishFlag
    },
];

const LanguageDropdown: React.FC = () => {
    const [selected, setSelected] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (lang: typeof languages[0]) => {
        setSelected(lang);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button 
                onClick={toggleDropdown}
                className="flex items-center space-x-2 p-2 rounded-md focus:outline-none"
            >
                <div className="flex flex-col items-center">
                    <img
                        src={selected.flagSrc}
                        alt={selected.name}
                        className="w-5 h-5 object-contain"
                    />
                    <span className="text-gray-700 font-medium">{selected.code}</span>
                </div>
                <img
                    src={arrow_down}
                    alt={selected.name}
                    className="w-5 h-5 object-contain"
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-38 bg-white border border-gray-300 shadow-md rounded-md z-10">
                    {languages.map((lang) => (
                        <button
                            key={lang.name}
                            onClick={() => handleLanguageSelect(lang)}
                            className="flex items-center w-full px-3 py-2 text-gray-700 p-8 gap-[4px] hover:bg-gray-200"
                        >
                            <img
                                src={lang.flagSrc}
                                alt={lang.name}
                                className="w-8 h-8 object-contain mr-2"
                            />
                            <span className="font-mulish-500 text-md">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;