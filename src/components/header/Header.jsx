import { MdOutline10K } from "react-icons/md";
import Navbar from "../navbar/Navbar.jsx";
import {IoIosSearch} from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import MobileNavbar from "../navbar/MobileNavbar.jsx";

function Header() {

    return (
        <header className="flex flex-col gap-4 p-4 bg-gradient-to-b from-[#E9F8FF] to-white">

            <div className="md:flex justify-around p-4 hidden">
                <img src="https://placehold.co/100x30/black/white" 
                alt="Page Logo"/>

                <div className="flex items-center gap-4">

                    {/*Search Bar*/}
                    <div className="flex items-center gap-2 border-b-2 border-black" >
                        <label htmlFor="search">
                            <IoIosSearch/>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Search here" 
                        id="search" 
                        className="outline-none bg-transparent" 
                        />
                    </div>

                    {/*Contact Info*/}
                    <div className="hidden lg:flex items-center gap-4 px-4">
                        <a 
                        href="mailto:example@mail.com" 
                        target="_blank" 
                        className="flex items-center gap-2">
                        <MdOutlineEmail />    <span>example@mail.com</span>
                            </a>

                        <a 
                        href="tel:(000) 888-88" 
                        className="flex items-center gap-2">
                        <MdOutlineLocalPhone />   <span>(000) 888-88</span>
                            </a>
                    </div>

                </div>
            </div>

            <Navbar/>

            <MobileNavbar/>
        </header>
    )
}

export default Header
