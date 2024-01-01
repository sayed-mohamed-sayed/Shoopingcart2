
import Swiper from "../../swiber/page"
import Page from "./pages/page"
import Products from "../../products/control/page"
import Offers from "../../products/offers/page"
function page() {
    return (
        <>
<div className="h-[270px] overflow-hidden">

            <Swiper/>
</div>
<Page/>
<Offers/>
        </>
    );
};

export default page;