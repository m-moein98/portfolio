import React,{useState} from 'react'
import data from '../data'
const Projects = () => {
    const [items, setItems] = useState(data)
    return <>
        <section className="py-20 px-5 bg-green-800  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
            {items.map((item) => {
                const {id,path,desc}=item
                return (
                    <div key={id}>
                        <img src={path} alt={desc} className="p-5 bg-green-500 rounded"></img>
                        <smal className="block text-center text-white font-semibold text-lg ">{desc}</smal>
                    </div>
                )
            })}
        </section>
    </>
}

export default Projects
