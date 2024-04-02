"use client"
import Image from "next/image";
// import { header } from "../../data/data";
// import Link from "next/link";
import '../../[locale]/globals.css'
import { useState } from "react";
import { useLocale, useTranslations } from 'next-intl';
import { Link } from "@/navigation";
import ChangeLangage from "../changeLangauge";
import { useTheme } from "next-themes";
import Switch from "./darkmode";
type HeaderProps = {
    register: string;
    contact: string;
    search: string;
    home: string;
    elect: string;
    house: string;
    clothes: string;
    shoes: string;
};
export default function Header({ register, contact, search, home, elect, house, clothes, shoes}: HeaderProps) {

    const [toggle, settoggle] = useState(false)
    const { theme, setTheme } = useTheme();

    const  locel=useLocale()
   
    return (
        <div className="">
            {/* <Link href="/about">abbb</Link> */}
            <div className=" flex justify-around items-center bg-[#0000001c]">
                <div className="logo">
                    <Image className="w-[170px] h-[45px] Logo" width={200} height={50} src="/Logoss.png" alt="Logo" />
                </div>
                <div className="input w-[50%] h-8">
                    <input className="focus:outline-none w-[100%] rounded h-[100%] pr-4 text-black" type="search" name="search" placeholder={search} />
                </div>

                <div className="flex contact ">
                    <Link href={"/register/Login"}>
                        <div className="flex items-center cursor-pointer">
                            <Image width={20} height={20} src="/logn.png" alt='/login' />
                            <p className="font-bold mr-2">{register}</p>
                        </div>
                    </Link>
                    <Link href={"/contact"}>

                        <div className="flex items-center cursor-pointer mr-4">
                            <Image width={20} height={20} src="/red.png" alt='/login' />
                            <p className="font-bold mr-2">{contact}</p>
                        </div>
                    </Link>
                </div>
                    <div className="font-bold w-4">
                        <ChangeLangage/>
                    </div>
            </div>
            <div className=" w-[100%] mb-4 dark:mb-0 dark:border-solid border-b border-white relative  bg-[#2e3e5b] h-[40px] pt-1 dark:bg-black" >
                <div className={`toggles ${locel==="en"&&"absolute left-2"}`}>
                    <input type="checkbox" id="checkbox" />
                    <label onClick={() => settoggle(!toggle)} htmlFor="checkbox" className="toggle">
                        <div className="bar bar--top"></div>
                        <div className="bar bar--middle"></div>
                        <div className="bar bar--bottom"></div>
                    </label>

                </div>
                <div style={{ height: toggle ? "200px" : undefined }} className={`flex justify-start items-start card ${locel==="en"&&'bottom-[-35px]'}`}>

                    <div className="bg-[#2e3e5b] dark:bg-black  text-white font-bold cards relative right-2 ">
                   
                        <nav>
                            <ul style={{ height: toggle ? "200px" : undefined }} className="flex justify-start items-start card">
                                <li className="ml-4"><Link href="/">{home}</Link></li>
                                <li className="ml-4"><Link href={`/products/control`}>{elect}</Link></li>
                                <li className="ml-4"><Link href={`/products/Producthome`}>{house}</Link></li>
                                <li className="ml-4"><Link href="/products/Clothes">{clothes}</Link></li>
                                <li className="ml-4"><Link href="/products/Shoes">{shoes}</Link></li>

                            </ul>
                        </nav>
                    </div>
                    
                        {/* <button className=" w-44 text-white" onClick={()=>setTheme('light')}>light</button>
                        <button className="text-white" onClick={()=>setTheme('dark')}>dark</button> */}

                    
                    <div className="flex contactfill ">
                        <Link href={"/register/Login"}>
                            <div className="flex items-center cursor-pointer">
                                <Image width={20} height={20} src="/logn.png" alt='/login' />
                                <p className="font-bold mr-2">{register}</p>
                            </div>
                        </Link>
                        <Link href={"/contact"}>

                            <div className="flex items-center cursor-pointer mr-0 sm:mr-4">
                                <Image width={20} height={20} src="/red.png" alt='/login' />
                                <p className="font-bold mr-2">{contact}</p>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="flex items-start w-screen">
                    <div style={{ display: "none" }} className="absolute right-2 bottom-2 cursor-pointer toggle ">
                    </div>
                    <div className={`absolute ${locel==="ar"?"left-2":"right-[20px]"}  bottom-2 cursor-pointer flex justify-center items-center`}>
                        <div className="">
                        <Link href={`/products/cart`}>
                            <span className=" top-2 left-3 relative w-[20px] h-[20px] flex justify-center rounded-full bg-[#e6c52f]">0</span>
                            <Image  width={20} height={20} src="/cart.png" alt="Image" />
                        </Link>

                        </div>
                        <div className={`top-[10px]  relative ${locel==="ar"?"right-[4px]":"left-[18px]"} `}>

            <Switch/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
