import { useTranslations } from "next-intl";
import Header from "./header";

function Navpar() {
    const register=useTranslations("register")
    const contact=useTranslations("contact")
    const search=useTranslations("search")
    const header=useTranslations("header")
   
    return (
        <div>
           <Header register={register("title")}
            contact={contact("title")}
             search={search("title")}
              home={header("home")}
              elect={header("elect")}
              house={header("house")}
              clothes={header("clothes")}
              shoes={header("shoes")}

              
              /> 
        </div>
    );
};

export default Navpar;