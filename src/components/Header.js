import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="flex justify-between py-1 px-5 absolute w-full text-white">
            <div className="logo">
            <h2 className="text-3xl ml-5 mt-4 lg:text-4xl">
                <Link to="/">MOEIN 98</Link>
            </h2>

            </div>
            <nav>
                <ul className="flex mr-5 mt-5">
                    <li className="mr-5">
                        <Link to="/" className="font-semibold hover:text-green-500">Home</Link>
                    </li>
                    <li className="mr-5">
                        <Link to="/Projects" className="font-semibold hover:text-green-500">Projects</Link>
                    </li>
                    <li>
                        <Link className="bg-green-500 p-2 px- rounded font-semibold transition-all hover:bg-green-800 hover:text-green-500" to="/Hire">Hire me</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
