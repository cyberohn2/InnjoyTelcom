import SecCtaBtn from "./SecCtaBtn"

const Pricing = () =>{
    return(
        <div className="py-[56.25px] isolate relative bg-[#3a40d4]">
            <div className="text-white max-w-[1080px] mx-auto px-8">
                <div className="max-w-[413.25px] mx-auto text-center mb-[30px]">
                    <p className="text-[15px]">Our Pricing</p>
                    <h2 className="sm:text-[33px] text-[24px] font-semibold ">Choose From Our Amazing Bonanza Prices</h2>
                    <p className="font-semibold mt-4">*Free SMS Available For All Plan </p>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Monthly Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">1000/</span>Month</div>
                        <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for a Month</p>
                        <a className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</a>
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">6 Month Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">5500/</span>6 Months</div>
                        <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for 6 Months </p>
                        <a className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</a>
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col items-center rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Yearly Package</p>
                        <div className="px-[30px] py-[15px] bg-[#474df3] self-stretch text-[12px] text-center rounded-[7.5px] mb-[27px]">₦ <span className="text-[24px] font-bold">10000/</span>Year</div>
                        <p className="text-[#111D15] mb-4">Enjoy Our Airtel Call BONANZA for a year</p>
                        <a className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]" href="#contact">Choose</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;