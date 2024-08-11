import SecCtaBtn from "./SecCtaBtn"

const Pricing = () =>{
    return(
        <div className="py-[56.25px] isolate relative">
            <div className="absolute inset-x-0 top-0 h-[519.75px] bg-[#3a40d4] -z-10"></div>
            <div className="text-white max-w-[1080px] mx-auto px-8">
                <div className="max-w-[413.25px] mx-auto text-center">
                    <p className="text-[15px]">Our Pricing</p>
                    <h2 className="sm:text-[33px] text-[24px] font-semibold mb-[30px]">Choose From Our Amazing Bonanza Prices</h2>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-stretch rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Monthly Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">1000/</span>Month</div>
                        <p>Enjoy Our Airtel Call BONANZA for a Month</p>
                        <SecCtaBtn link="/sign-up" text="Register" />
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-stretch rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">6 Month Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">5500/</span>6 Months</div>
                        <p>Enjoy Our Airtel Call BONANZA for 6 Months </p>
                        <SecCtaBtn link="/sign-up" text="Register" />
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-stretch rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Yearly Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">10000/</span>Year</div>
                        <p>Enjoy Our Airtel Call BONANZA for a year</p>
                        <SecCtaBtn link="/sign-up" text="Register" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;