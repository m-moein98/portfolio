import React from 'react';
import '../skills.css';
import is_iranian from "../region_check";

const Skills =()=>{
    return(
        <section className="showcase sm:h-2/4 ">
        <div className="overlay flex flex-col items-center justify-center">
            <div className="skills bg-blue-500 rounded-2xl lg:w-3/5 sm:w-4/5">
                <div className="m-20 lg:m-28 sm:m-3/4">
                    {is_iranian ? (
                        <h1 id="title" className="text-2xl font-black text-center">توانایی های من</h1>
                    ) : (
                        <h1 id="title" className="text-2xl font-black text-center">My skills</h1>
                    )}
                    <li>
                        <h3>Python</h3>
                        <span className="bar mt-3">
                            <span className="html w-4/5"></span>
                        </span>
                    </li>
                    <li>
                        <h3>Django Template/ RestAPI</h3>
                        <span className="bar mt-3">
                            <span className="css w-5/6"></span>
                        </span>
                    </li>
                    <li>
                        <h3>DATABASE / EntityResult / ORM</h3>
                        <span className="bar mt-3">
                            <span className="jquery w-3/5"></span>
                        </span>
                    </li>
                    <li>
                        <h3>JAVASCRIPTS / REACT</h3>
                        <span className="bar mt-3">
                            <span className="javascript w-3/6"></span>
                        </span>
                    </li>
                </div>
            </div>
        </div>
        </section>
    )
};

export default Skills;