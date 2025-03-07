import React from "react";
import logo from "../../assets/icons/logo.svg";
import favorite from "../../assets/icons/favorite.svg";
import LanguageDropdown from "./LanguageDropdown.tsx";

interface NavbarProps {
    language: string;
    loggedIn: boolean;
}

class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <div className={"bg-grayscale-white text-grayscale-100 w-full p-4 flex justify-between items-center pl-[112px] pr-[112px] pt-[8px] pb-[8px] h-[82px]"}>
                <div className="flex flex-row items-center">
                    <img src={logo} alt={"logo"} className="mr-2" />
                    <span className="font-museoModerno text-xl">Crobnb</span>
                </div>
                <div className="font-mulish text-xl">
                    <span className="mx-2 cursor-pointer">Tipovi smještaja</span>
                    <span className="mx-2 cursor-pointer">Regije</span>
                    <span className="mx-2 cursor-pointer">Novosti</span>
                </div>
                <div className="flex flex-row items-center text-xl gap-[27px]">
                    <img src={favorite} alt="favorites"/>
                    <LanguageDropdown/>
                    <span className="mx-2 cursor-pointer">Prijava</span>
                </div>
            </div>
        );
    }
}

export default Navbar;
