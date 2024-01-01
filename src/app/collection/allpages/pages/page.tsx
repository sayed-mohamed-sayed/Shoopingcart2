import { product } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";

function page() {
    return (
        <div className="flex justify-center text-center items-center w-[80%] flex-wrap m-auto gap-4 bg-[#e6e6e6] mt-10 pt-2">
            {
                product&&product.map((i)=>(
                    <div className="w-30% cursor-pointer" key={i.id}>
                        <Image className="w-[250px] h-[200px]" width={200} height={200} src={i.img} alt="Image"/>
                        <h1>{i.title}</h1>
                    <Link href={i.url}/>
                    </div>
                ))
            }
        </div>
    );
};

export default page;