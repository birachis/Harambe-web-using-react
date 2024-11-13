import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const Navs = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Services'
        },
        {
            id: 3,
            link: 'Components'
        },
        {
            id: 4,
            link: 'About'
        },
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 bg-yellow-500 text-cyan-50 p-5 '>
        <div>
            <h1 className='cursor-pointer text-5xl font-light text-red-500'>Harambee</h1>
        </div>

        <ul className='hidden md:flex'>
            {Navs.map(({id, link}) => (
                <li key={id} className='text-red-500 px-4 cursor-pointer font-medium hover:scale-105 duration-200'>
                    {link}
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className=' block md:hidden cursor-pointer pr-4 z-10 text-red-500'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
        </div>
        <div className={nav? 'fixed md:hidden left-0 top-20 w-[45%] h-full bg-slate-700 bg-opacity-90 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='p-3 border-r border-red-500 h-full'>
                {Navs.map(({id, link}) => (
                    <li key={id} className='text-yellow-500 p-4 border-b border-red-500 cursor-pointer font-medium hover:scale-105 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    </div> 
  )
}

export default NavBar