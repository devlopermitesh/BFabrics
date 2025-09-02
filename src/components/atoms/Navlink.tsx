import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

interface Navlink{
link:string,
name:string,
className?:string,
active:boolean,
}
const Navlink:React.FC<Navlink>=({link,name,active,className})=>{
return (
    <Link className={twMerge(` 
        font-primary text-inactive p-3 px-5 cursor-pointer 
        border-dashed border-2 border-lightdark
        text-sm rounded-lg  `,className,active && "text-white  bg-lightdark border-none opacity-75 ")} href={link}>{name}</Link>
)
}

export default Navlink