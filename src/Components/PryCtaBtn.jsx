import { Link } from "react-router-dom";
const PryCtaBtn = ({text, link}) =>{
    return(
        <button className="bg-[#3a40d4] hover:shadow-lg hover:bg-blue-500 rounded-[4.5px] px-6 py-2 text-white w-fit text-[12px] lg:text-[16px]"><Link to={link}>{text}</Link></button>
    )
}

export default PryCtaBtn;