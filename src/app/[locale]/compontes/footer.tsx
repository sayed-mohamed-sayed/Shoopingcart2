import Image from "next/image";
import { child, clothes, elect, home, micap } from "../data/data";
import { useTranslations } from "next-intl";

function Footer() {

const t = useTranslations("footer")
const y = useTranslations("elect")
const s = useTranslations("home")
const m = useTranslations("butefull")
const l = useTranslations("clothes")
const o = useTranslations("child")

return (
<div className="text-[#3f4042] bg-[#f8f5f5] relative w-[100%] overflow-hidden">
<Image className=" w-[100%] h-[300px]" width={200} height={200} src="/foter.jpg" alt="Image" />

<div className="flex justify-start w-screen absolute top-0">
<div className="m-2 sm:m-6 cursor-pointer">
<h1 className="text-[25px] font-bold">{t("header")}</h1>
<p>{t("title1")}</p>
<p>{t("title2")}</p>
<p>{t("title3")}</p>
<p>{t("title4")}</p>
<p>{t("title5")}</p>
</div>
<div className="m-2 sm:m-6 cursor-pointer">
<h1 className="text-[25px] font-bold">{t("contact")}</h1>
<p>010758765</p>
<p>011568677</p>
<p>faki@amail.com</p>
</div>
<div className="flex m-2 sm:m-6  flex-wrap">
<Image className="w-[40px] sm:w-[60px] h-[60px]" src="/insta.png" width={50} height={50} alt="Image" />
<Image className="w-[40px] sm:w-[60px] h-[60px]" src="/faceb.png" width={50} height={50} alt="Image" />
<Image className="w-[40px] sm:w-[60px] h-[60px]" src="/phone.png" width={50} height={50} alt="Image" />
</div>
</div>
<div className="flex items-start flex-wrap justify-start w-screen bg-[#2e3e5b] dark:bg-black">
<div className="  relative text-white pr-4 ">
<h1 className="font-bold text-[20px] text-[#e6c52f]">{y("header")}</h1>
<div className="grid grid-cols-2 gap-0">

<div >{y("title1")}</div>
<div >{y("title2")}</div>
<div >{y("title3")}</div>
<div >{y("title4")}</div>
<div >{y("title5")}</div>
<div >{y("title6")}</div>
<div >{y("title7")}</div>
<div >{y("title8")}</div>
<div >{y("title9")}</div>
<div >{y("title10")}</div>
<div >{y("title11")}</div>
<div >{y("title12")}</div>
<div >{y("title13")}</div>
<div >{y("title14")}</div>
<div >{y("title15")}</div>
<div >{y("title16")}</div>
<div >{y("title17")}</div>
<div >{y("title18")}</div>
<div >{y("title19")}</div>


</div>
</div>
<div className="w-[150px]  relative text-white pr-4 ">
<h1 className="font-bold text-[20px] text-[#e6c52f]">{s("header")}</h1>
<div className="grid grid-cols-1 gap-0">

<div >{s("title1")}</div>
<div >{s("title2")}</div>
<div >{s("title3")}</div>
<div >{s("title4")}</div>
<div >{s("title5")}</div>
<div >{s("title6")}</div>
<div >{s("title7")}</div>
<div >{s("title8")}</div>
<div >{s("title9")}</div>
</div>
</div>
<div className=" w-[150px] relative text-white pr-4">
<h1 className="font-bold text-[20px] text-[#e6c52f]">{m("header")}</h1>
<div className="grid grid-cols-1 gap-0">
<div >{m("title1")}</div>
<div >{m("title2")}</div>
<div >{m("title3")}</div>
<div >{m("title4")}</div>
<div >{m("title5")}</div>
<div >{m("title6")}</div>
</div>
</div>
<div className=" w-[150px]  relative text-white pr-4 ">
<h1 className="font-bold text-[19px] text-[#e6c52f]">{l("header")}</h1>
<div className="grid grid-cols-1 gap-0">
<div >{l("title1")}</div>
<div >{l("title2")}</div>
<div >{l("title3")}</div>
<div >{l("title4")}</div>
<div >{l("title5")}</div>

</div>
</div>

<div className=" w-[150px]  relative text-white pr-4 ">
<h1 className="font-bold text-[20px] text-[#e6c52f]">{o("header")}</h1>
<div className="grid grid-cols-1 gap-0">
<div >{o("title1")}</div>
                        <div >{o("title2")}</div>
                        <div >{o("title3")}</div>
                        <div >{o("title4")}</div>
</div>
</div>
</div>
</div>
);
};

export default Footer;