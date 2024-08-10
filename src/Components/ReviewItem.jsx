import quotePng from "/quote-png.svg";

const ReviewItem = ({title, content, user, mail=""}) =>{
    return(
        <div className="p-4 pt-12 flex flex-col bg-white w-full rounded-xl shadow-sm border-t-[7.5px] border-r-[7.5px] border-[#3a40d4] relative ml-auto">
            <img className="absolute top-4 right-4" loading="lazy" src={quotePng} alt="quote" />
            <h4 className="text-[18px] font-semibold mb-4">{title}</h4>
            <p className="text-[12px] text-[#666666] mb-4">{content}</p>
            <p className="text-[15px] font-semibold">{user}</p>
            <p>{mail}</p>
        </div>
    )
}

export default ReviewItem;