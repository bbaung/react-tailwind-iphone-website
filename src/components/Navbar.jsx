import React from "react";
import { appleImg } from "../utils/index";
import {navLists} from "../constants/index";
import {searchImg} from "../utils/index";
import {bagImg} from "../utils/index";


const Navbar = () => {
    return (
        <header className="!p-4">
            <nav className="list-none flex flex-row justify-between">
                <img src={appleImg} className="w-auto py-2" alt="appleImg" />

                <ul className="flex flex-1 justify-center">
                    {navLists.map((item, index) => 
                        <li className="px-3 opacity-70 hover:opacity-100 transition-all hidden md:block" key={index}>{item}</li>
                    )}
                </ul>

                <div className="block md:hidden flex flex-row">
                    <img className="aspect-square w-4 mx-2 opacity-70 hover:opacity-100 transition-all" src={searchImg} alt="searchImg" />

                    <img className="aspect-square w-4 mx-2 opacity-70 hover:opacity-100 transition-all" src={bagImg} alt="bagImg" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;