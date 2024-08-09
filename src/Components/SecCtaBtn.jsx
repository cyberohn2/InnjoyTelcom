import { Link } from "react-router-dom";
const SecCtaBtn = ({text, link}) =>{
    return(
        <button className="border border-black hover:shadow-lg rounded-[4.5px] px-6 py-2 text-[#111d15] w-fit text-[12px] sm:text-[16px]"><Link to={link}>{text}</Link></button>
    )
}

export default SecCtaBtn;