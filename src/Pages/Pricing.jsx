import { Link } from "react-router-dom";
import Testimonials from "../Components/Testimonials";


const Pricing = () =>{
    const oneMonth = "₦3,000/Month"
    const sixMonth = "₦5,500/6 Months"
    const twelveMonth = "₦10,000/12 Months"
    return(
        <div>
            <div className="py-[56.25px] isolate relative bg-[#3a40d4]">
                <div className="text-white max-w-[1080px] mx-auto px-8">
                    <div className="max-w-[413.25px] mx-auto text-center mb-[30px]">
                        <p className="text-[15px]">Our Pricing</p>
                        <h2 className="sm:text-[33px] text-[24px] font-semibold ">Select a Plan to Register</h2>
                        <p className="font-semibold mt-4">*Free SMS Included in all Plans </p>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                        <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                            <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Monthly Package</p>
                            <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">3,000/</span>Month</div>
                            <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for 1 Month</p>
                            <Link to="/sign-up" state={{package:oneMonth}} className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</Link>
                        </div>
                        <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                            <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">6 Month Package</p>
                            <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">5,500/</span>6 Months</div>
                            <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for 6 Months </p>
                            <Link to="/sign-up" state={{package:sixMonth}} className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</Link>
                        </div>
                        <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                            <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">12 Months Package</p>
                            <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">10,000/</span>12 Months</div>
                            <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for 12 Months</p>
                            <Link to="/sign-up" state={{package:twelveMonth}} className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    )
}

export default Pricing;