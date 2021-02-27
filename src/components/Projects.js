import React,{useState} from 'react'
import data from '../data'

const Projects = () => {
    const [items] = useState(data)
    return (
        <div className="showcase">
        <section class="project pt-20 sm:pt-20 lg:pt-0 w-auto px-5 grid grid-cols-1 gap-4 md:grid-cols-3 content-center">
            {items.map((item) => {
                const {id,path,desc, address, GithubAddress}=item
                return (
                    <div className="flex justify-center">
                    <div key={id} class="text-white p-5 bg-blue-400 rounded-lg text-center flex flex-col justify-center">
                        <img class="mb-2 hover:shadow-2xl w-80 transform hover:scale-105 hover:scale-y-110 rounded-2xl" src={path} alt={desc}/>
                        <label class="m-auto px-5 hover:shadow-inner" for="img">{desc}</label>
                        <div class="flex justify-center mx-2 mt-2">
                            <a href={GithubAddress}>
                                <button class="rounded-l-lg bg-gray-500 p-2 hover:bg-gray-600">
                                    <i class="lni lni-github-original lni-lg"></i> Github 
                                </button>
                            </a>
                            <a href={address}>
                                <button class="rounded-r-lg bg-gray-500 p-2 hover:bg-gray-600">
                                    Preview <i class="lni lni-producthunt lni-lg"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                    </div>
                )
            })}
        </section>
        </div>
    )
}

export default Projects;