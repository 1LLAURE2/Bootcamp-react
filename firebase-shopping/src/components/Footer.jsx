import React, { useContext } from 'react'
import { IoHomeSharp,IoCartSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { AppContext } from '../App';


export const Footer= () => {
    const {setRoute}=useContext(AppContext);
    return (
        <footer
            className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'
        >
            <div
                className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
                onClick={()=>setRoute('home')}
            >
                <IoHomeSharp />
            </div>
            <div
                className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
                onClick={()=>setRoute('shopping')}
            >
                <IoCartSharp />
            </div>
            <div
                className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
                onClick={()=>setRoute('tasklist')}
            >
                <BsList />
            </div>
        </footer>
    )
}
