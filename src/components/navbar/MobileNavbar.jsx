import {RxHamburgerMenu} from "react-icons/rx";
import {navMenus} from "./navMenus.js";
import { useState } from "react";

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="md:hidden self-end">
            <button onClick={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu/>
            </button>

            {isOpen && (
            <nav 
            className="debugger absolute right-4 flex flex-col w-fit gap-2 divide-y divide-gray-500 rounded-xl p-4 bg-gray-100"
            >
                {
                    navMenus.map((menu, index) => (
                        <a 
                        href={menu.link} 
                        key={index}
                        className="flex items-center gap-2 p-2 hover:bg-gray-200">
                            <menu.icon/>
                            {menu.name}
                        </a>
                    ))}
            </nav>
    )}
        </div>
    )
}

export default MobileNavbar
