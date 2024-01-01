
function page() {
    return (
        <div>
            <form action="">
                <input className="m-2  pr-2  rounded-sm focus:outline-none h-6 w-[90%]" type="text" placeholder="اسم المنتج"/>
                <textarea className="m-2  pr-2 rounded-sm focus:outline-none h-6 w-[90%]" placeholder="وصف المنتج"/>
               
                <div className="flex w-[90%] text-center justify-center items-center m-auto">
                <input className="m-[1px] pr-2 w-[33%] rounded-sm focus:outline-none h-6 " type="text" placeholder="سعر المنتج"/>
                <input className=" m-[1px]  pr-2 rounded-sm focus:outline-none h-6 w-[33%]" type="text" placeholder="خصم علي المنتج "/>
                <input className="m-[1px]  pr-2 rounded-sm focus:outline-none h-6 w-[33%]" type="text" placeholder="نسبة الخصم علي المنتج"/>
                </div>
                <div className="w-[90%] m-auto mt-2 mb-2">
                <div className=" text-start ">
                    <label>اختر نوع المنتج :  </label>
                <select name="" id=""  >
                    <optgroup label="الكترونيات">

                    <option value="موبيلات">موبيلات</option>
                    <option value="لابتوب">لابتوب</option>
                    <option value="ساعات">ساعات</option>
                    <option value="سماعات">سماعات</option>
                    <option value="شواحن">شواحن</option>
                    </optgroup>
                    <optgroup label="مستلزمات المنزل">
                    <option value="مدخل البيت">مدخل البيت</option>
                    <option value="غرفة المعيشة">غرفة المعيشة</option>
                    <option value="غرفة النوم">غرفة النوم</option>
                    <option value="ادوات الحمام">ادوات الحمام</option>
                    <option value="ادوات المطبخ">ادوات المطبخ</option>
                    </optgroup>
                    <optgroup label="ملابس">
                    <option value="ملابس رجالي">ملابس رجالي</option>
                    <option value="ملابس حريمي">ملابس حريمي</option>
                    <option value="ملابس اطفال">ملابس اطفال</option>

                    </optgroup> 
                    <optgroup label="احذية">
                    <option value="احذية رجالي">احذية رجالي</option>
                    <option value="احذية حريمي">احذية حريمي</option>
                    <option value="احذية اطفال">احذية اطفال</option>

                    </optgroup>
                </select>
                </div>
                </div>
                <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[90%]" type="file"/>
                <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[90%]" type="file"/>
                <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[90%]" type="file"/>
            </form>
            <button className="bg-white w-[50%] m-auto text-bold rounded-sm mt-4 ">اضافة المنتج</button>
        </div>
    );
};

export default page;