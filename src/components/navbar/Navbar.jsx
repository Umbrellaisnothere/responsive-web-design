import {SiGoogletranslate} from "react-icons/si";
import {PiCaretRight} from "react-icons/pi";
import {navMenus} from "./navMenus.js";

function Navbar() {

    return (
        <nav className="md:flex hidden items-center gap-8 p-4 lg:hidden">
            <div className="flex items-center gap-8">
                {
                    navMenus.map((menu, index) => (
                        <a key={index} href={menu.path}>{menu.name}</a>
                    ))
                }
            </div>

            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2">
                    <SiGoogletranslate/> <span>English</span>
                </button>

                <a href="/sign-up" className="flex items-center gap-2 bg-action w-fit rounded-lg px-4 py-2 text-white/90">
                <span>Sign up</span> 
                <PiCaretRight/></a>
            </div>
        </nav>
    )
}

export default Navbar
