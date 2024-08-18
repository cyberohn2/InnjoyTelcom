import phoneIcon from "/phone-icon.svg"
import whatsAppIcon from "/whatsapp-icon.png"
import { useEffect } from "react"


const HowToPay = () =>{
    useEffect(() => {
        document.title = "Innjoy - How To Pay"; 
      }, []);
    return(
        <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
            <h1 className="mb-[30px] text-[30px] font-semibold text-center">Choose A Suitable Method To Contact Us For Payment</h1>
            <div className="flex gap-2 flex-col md:flex-row items-center mt-6 text-sm">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex gap-2 items-center">
                    <img width={20} src={phoneIcon} alt="" />
                    <a href="tel:+2349076612310">Call Our Customer Service</a>
                </button>
                <p className="font-semibold text-center">OR</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex gap-2 items-center">
                    <img width={20} src={whatsAppIcon} alt="" /> 
                    <a href="https://wa.me/+2349076612310">Message Our Customer Service</a>
                </button>
            </div>
        </div>
    )
}

export default HowToPay;