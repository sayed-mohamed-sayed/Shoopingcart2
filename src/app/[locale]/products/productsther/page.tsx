"use client"
import Image from "next/image";
import { products } from "@/app/[locale]/data/data";
import { useState, useEffect } from "react";
import stars from "../../../../../public/stars.webp"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocale, useTranslations } from 'next-intl';
import { products_en } from "../../data/data_en";
import { Link } from "@/navigation";

function ProductOther() {
    const [change, setchange] = useState("")
    const [starImages, setStarImages] = useState([]);

    const locale = useLocale()
    const toastify = () => {
        toast.success(locale === "ar" ? "تم اضافة المنتج الي سلة المشتريات " : "The product has been added to the buyer", { position: toast.POSITION.TOP_RIGHT })
    }


    const product = locale === "ar" ? products : products_en.map((i) => {
        return i
    })
    useEffect(() => {
        const starImagesArray = [];

        for (let i = 0; i < 5; i++) {
            starImagesArray.push(stars);
        }

        setStarImages(starImagesArray as never[])
    }, []);

    return (
        <div className="dark:bg-black mt-20">
            <div className=" dark:text-white dark:bg-black bg-[#dcdada] w-screen mb-10">

                <h1 className={`  font-bold text-[20px] relative ${locale === "ar" ? 'right-6' : 'left-6'}`}>{locale === "ar" ? 'منتجات مشابهة لمنتجك' : 'other card'}</h1>
            </div>
            <div className="flex justify-center flex-wrap ">

                {
                    product.map((i: any) => (
                        <div className="dark:border-white bg-[#e6e6e6] p-[1px] m-2 border relative border-black border-solid cursor-pointer" key={i.id}>
<Link href={{
  pathname: '/products/[id]',
  params: {id:i.id}
}}>

                                <Image className="w-[250px] h-[300px]" width={300} height={300} src={i.img} alt="Image" />
                                <h1 className="pr-2">{i.title}</h1>
                                <div className="flex justify-center p-1">
                                    {
                                        starImages && starImages.map((i, o) => (
                                            <div className="cursor-pointer" key={o}>

                                                <Image width={20} height={20} src={i} alt="Image" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex text-center justify-center relative">
                                    <h1 className="m-2">{i.price} {locale === "ar" ? 'جنية ' : 'pound'}</h1>
                                </div>
                            </Link>
                            <div className="flex justify-center">
                                <button className="bg-[#223f63] dark:bg-black m-2 pl-2 pr-2 p-[1px] rounded-sm text-white">{locale === "ar" ? "شراء الان" : "buy now"}</button>
                                <button className="bg-[#dcdada] m-2 pl-2 pr-2 p-[1px] rounded-sm" onClick={() => toastify()}>{locale === "ar" ? "اضف للسلة" : "add to cart"}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductOther;