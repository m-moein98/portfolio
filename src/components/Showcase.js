import React from 'react'
import { Link } from 'react-router-dom'
import is_iranian from "../region_check";

const Showcase = () => {
    if (is_iranian) {
        return (
            <section className="showcase">
                <div className="overlay flex flex-col items-center text-white justify-center">
                    <h1 className="text-center text-5xl font-bold mb-5 lg:text-7xl lg:px-56">
                        <span className="text-blue-500">محمدمهدی معین زاده</span>
                    </h1>
                    <h1 className="text-center text-3xl font-bold mb-5 lg:text-4xl lg:px-56">
                        <span className="text-green-500">برنامه نویس وب</span>
                    </h1>
                <div className="mt-5">
                    <Link className="mr-5 bg-blue-500 p-2 px-2 rounded font-semibold transition-all hover:bg-blue-800" to="/hire"> برای من پیام بزار</Link>
                    <Link className="mr-5 bg-white text-blue-500 p-2 px-2 rounded font-semibold transition-all hover:bg-blue-800 hover:text-white" to="/projects">نمونه کارهای من</Link>
                </div>
                </div>
            </section>
        )
    }
    else{
        return (
            <section className="showcase">
                <div className="overlay flex flex-col items-center text-white justify-center">
                    <h1 className="text-5xl font-bold text-right mb-5 lg:text-7xl lg:px-56">
                        It's <span className="text-blue-500">Moein98</span>
                    </h1>
                    <h1 className="text-center text-3xl font-bold mb-5 lg:text-4xl lg:px-56">
                        <span className="text-green-500">web developer</span>
                    </h1>
                <div className="mt-5">
                    <Link className="mr-5 bg-blue-500 p-2 px-2 rounded font-semibold transition-all hover:bg-blue-800" to="/hire">Hire me</Link>
                    <Link className="mr-5 bg-white text-blue-500 p-2 px-2 rounded font-semibold transition-all hover:bg-blue-800 hover:text-white" to="/projects">Projects</Link>
                </div>
                </div>
    
            </section>
        )
    }

}
export default Showcase