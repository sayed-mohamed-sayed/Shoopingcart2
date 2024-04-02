

import Image from "next/image";
import { products } from "../../data/data";
import stars from "../../../../../public/stars.webp"
import Lang from "./lang";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import "animate.css"
import "../../../[locale]/globals.css"
function Page() {

    const t = useTranslations("product")
    const y = useTranslations("foroffer")
    const keys = ['mobil', 'lap', 'clock', 'furnutre', 'shose', 'shosesport', 'clothessport', 'tagmel', 'gamechild'] as const


    const starImagesArray: string[] = [];

    for (let i = 0; i < 5; i++) {
        starImagesArray.push(stars.src);
    }



    return (
        <div className="mt-20 dark:mt-0 dark:bg-black pt-2">
            <div className="w-screen "></div>
            <h1 className=" text-start mr-10 text-lg font-bold animate__animated animate__bounce  dark:text-white">{y("title")}<span className="text-[red]"></span></h1>
            <div className="flex justify-center flex-wrap ">

                {
                    keys.map((i: any) => (
                        <div className="m-2 border relative border-black border-solid cursor-pointer dark:border-white bg-[#eee] p-[1px]" key={i.id}>
<Link href={{
  pathname: '/products/[id]',
  params: {id:t(`${i}.id`)}
}}>
                            <div className="absolute w-[80px] h-[80px] top-2 right-2 bg-red-500 rounded-full flex justify-center items-center flex-col text-white font-bold  dark:bg-black">
                                <span>{y("offer")}</span>
                                <span>{t(`${i}.offer`)}%</span>
                            </div>
                            <Image className="w-[250px] h-[300px]" width={300} height={300} src={t(`${i}.img`)} alt="Image" />
                            <h1 className="pr-2">{i.title}</h1>
                            <div className="flex justify-center p-1">
                                {
                                    starImagesArray && starImagesArray.map((i, o) => (
                                        <div className="cursor-pointer" key={o}>

                                            <Image width={20} height={20} src={i} alt="Image" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex text-center justify-center relative">
                                <h1 className=" m-2">{t(`${i}.price`)}{y("pound")}</h1>
                                <h2 className="m-2 ">{y("offerprice")}<span className="text-red-700 before:absolute  before:bg-red-700 before:w-[30px] before:h-[2px]  before:bottom-5">{t(`${i}.priceoffer`)}</span></h2>
                            </div>
                            </Link>
                            <Lang addcart={y("addcart")} buynow={y("buynow")} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;