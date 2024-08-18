import { useLocation } from 'react-router-dom';

const SuccessPage  = () =>{
    const location = useLocation();
    const { message } = location.state

    return(
        <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
            <h1 className="mb-[30px] text-[30px] font-semibold">{message}</h1>
        </div>
    )
}

export default SuccessPage;