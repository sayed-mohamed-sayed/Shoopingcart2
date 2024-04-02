
import Swiper from "@/app/[locale]/swiber/page"
import Page from "./pages/page"
import Products from "../../products/control/page"
import Lang from "../../products/offers/page";
function page() {
    return (
        <>
<div className="h-[250px] overflow-hidden">

            <Swiper/>
</div>
<Page/>
<Lang/>
        </>
    );
};

export default page;