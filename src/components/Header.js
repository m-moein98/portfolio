import React from 'react'
import { Link } from 'react-router-dom'
import is_iranian from "../region_check";

const Header = () => {
    if(is_iranian){
        return (
            <header className="flex justify-between absolute w-full text-white py-1 px-0 sm:px-4 md:px-5 lg:px-5 xl:px-8 2xl:px-10 ">
                <div className="logo">
                <h2 className="text-2xl ml-5 mt-4 lg:text-4xl md:text-3xl">
                    <Link to="/">MOEIN 98</Link>
                </h2>
                </div>
                <nav>
                    <ul className="flex mr-5 mt-5 sm:pt-1 text-sm lg:text-base md:text-base">
                        <li className="mr-3 sm:mr-4 md:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/" className="font-semibold hover:text-blue-300">صفحه اصلی</Link>
                        </li>
                        <li className="mr-3 sm:mr-4 md:mr-5 lg:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/projects" className="font-semibold hover:text-blue-300">پروژه ها</Link>
                        </li>
                        <li className="mr-3 sm:mr-4 md:mr-5 lg:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/skills" className="font-semibold hover:text-blue-300">مهارت ها</Link>
                        </li>
                        <li>
                            <Link className="hidden sm:inline bg-blue-500 p-2 rounded font-semibold transition-all hover:bg-blue-500 hover:text-blue-300" to="/Hire">برای من پیام بزار</Link>
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
                    <ul className="flex mr-5 mt-5 sm:pt-1 text-sm lg:text-base md:text-base">
                        <li className="mr-3 sm:mr-4 md:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/" className="font-semibold hover:text-blue-300">Home</Link>
                        </li>
                        <li className="mr-3 sm:mr-4 md:mr-5 lg:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/Projects" className="font-semibold hover:text-blue-300">Projects</Link>
                        </li>
                        <li className="mr-3 sm:mr-4 md:mr-5 lg:mr-5 xl:mr-8 2xl:mr-10">
                            <Link to="/skills" className="font-semibold hover:text-blue-300">Skills</Link>
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
