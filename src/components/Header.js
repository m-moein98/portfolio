import React from 'react'
import { Link } from 'react-router-dom'
import is_iranian from "../region_check";
const Header = () => {
    if(is_iranian){
        return (
            <header className="flex justify-between py-1 px-5 absolute w-full text-white">
                <div className="logo">
                <h2 className="text-3xl ml-5 mt-4 lg:text-4xl sm:2xl">
                    <Link to="/">MOEIN 98</Link>
                </h2>

                </div>
                <nav>
                    <ul className="flex mr-5 mt-5 sm:text-sm sm:pt-1">
                        <li className="mr-5">
                            <Link to="/" className="font-semibold hover:text-blue-300">صفحه اصلی</Link>
                        </li>
                        <li className="mr-5">
                            <Link to="/Projects" className="font-semibold hover:text-blue-300">پروژه ها</Link>
                        </li>
                        <li>
                            <Link className="bg-blue-500 p-2 rounded font-semibold transition-all hover:bg-blue-500 hover:text-blue-300" to="/Hire">برای من پیام بزار</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
    else{
        return (
            <header className="flex justify-between py-1 px-5 absolute w-full text-white">
                <div className="logo">
                <h2 className="text-3xl ml-5 mt-4 lg:text-4xl sm:2xl">
                    <Link to="/">MOEIN 98</Link>
                </h2>

                </div>
                <nav>
                    <ul className="flex mr-5 mt-5 sm:text-base sm:pt-1">
                        <li className="mr-5">
                            <Link to="/" className="font-semibold hover:text-blue-300">Home</Link>
                        </li>
                        <li className="mr-5">
                            <Link to="/Projects" className="font-semibold hover:text-blue-300">Projects</Link>
                        </li>
                        <li>
                            <Link className="bg-blue-500 p-2 rounded font-semibold transition-all hover:bg-blue-500 hover:text-blue-300 sm:p-1" to="/Hire">Hire me</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
