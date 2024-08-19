import phoneIcon from "/phone-icon.svg";
import whatsAppIcon from "/whatsapp-icon.png";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const HowToPay = () => {
    const location = useLocation();
    const message = location.state?.message; // Safely accessing message

    useEffect(() => {
        document.title = "Innjoy - How To Pay"; 
    }, []);

    return (
        <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
            <h1 className="mb-[30px] sm:text-[30px] text-lg font-semibold text-center">
                {message ? message : "Choose A Suitable Method To Contact Us For Payment After Registering"}
            </h1>
            <div className="flex gap-2 flex-col md:flex-row items-center mt-6 text-sm">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex gap-2 items-center">
                    <img width={20} src={phoneIcon} alt="Phone Icon" />
                    <a href="tel:+2349076612310">Call Our Customer Service</a>
                </button>
                <p className="font-semibold text-center">OR</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex gap-2 items-center">
                    <img width={20} src={whatsAppIcon} alt="WhatsApp Icon" /> 
                    <a href="https://wa.me/+2349076612310">Message Our Customer Service</a>
                </button>
            </div>
        </div>
    );
}

export default HowToPay;
