
import Image from "next/image";
import { useTranslations } from "next-intl";
import Lang from "@/app/[locale]/products/offers/lang";

function Page() {
    const t=useTranslations("product")
     const keys=['mobil','lap','clock','furnutre','shose','shosesport','clothessport','tagmel','gamechild'] as const
    return (
        <div className="dark:bg-black w[100%] dark:pb-4">
        <div className="flex justify-center text-center items-center w-[80%] flex-wrap m-auto gap-4 bg-[#e6e6e6] dark:bg-black mt-10 pt-2">
            {
                keys.map((i)=>(
                    <div className="w-30% cursor-pointer" key={i}>
                        <Image className="w-[250px] h-[200px] border-b" width={200} height={200} src={t(`${i}.img`)} alt="Image"/>
                        <h1 className="bg-white font-bold rounded-b-sm ">{t(`${i}.title`)}</h1>
                    </div>
                ))
            }


        </div>

        </div>
    );
};

export default Page;