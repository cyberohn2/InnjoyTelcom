import {  memo } from "react";


const OptionalNoForm = memo(({ index, title, user, handleChange, errors, handleDelete }) => {
    
    return (
        <div className="mb-[22px] flex flex-col gap-[22px] border-b border-gray-400 py-2">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl">{title}</h3>
                {index > 1 && <p
                onClick={handleDelete}
                className="bg-red-500 cursor-pointer text-white py-1 px-2 rounded hover:bg-red-600"
            >
                Delete
            </p>}
            </div>
            <div className="flex flex-col items-start">
                <label className="mb-1 block text-gray-600 text-sm" htmlFor="firstName">First Name</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full">
                    <input
                        className="outline-none w-full"
                        name="firstName"
                        id="firstName"
                        type="text"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </div>
                {errors.firstName && <p className="text-[#ff4545] text-sm font-semibold">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col items-start">
                <label className="mb-1 block text-gray-600 text-sm" htmlFor="lastName">Last Name</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full">
                    <input
                        className="outline-none w-full"
                        name="lastName"
                        id="lastName"
                        type="text"
                        value={user.lastName}
                        onChange={handleChange}
                    />
                </div>
                {errors.lastName && <p className="text-[#ff4545] text-sm font-semibold">{errors.lastName}</p>}
            </div>
            <div className="flex flex-col items-start">
                <label className="mb-1 block text-gray-600 text-sm" htmlFor="phoneNumber">AIRTEL Phone Number</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full">
                    <input
                        className="outline-none w-full"
                        name="phoneNumber"
                        id="phoneNumber"
                        type="text"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        minlength="11"
                        maxlength="13"
                    />
                </div>
                {errors.phoneNumber && <p className="text-[#ff4545] text-sm font-semibold">{errors.phoneNumber}</p>}
            </div>
            <div className="flex flex-col items-start">
                <label className="mb-1 block text-gray-600 text-sm" htmlFor="nin">NIN</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3]">
                    <input
                        className="outline-none w-full"
                        name="nin"
                        id="nin"
                        type="text"
                        value={user.nin}
                        onChange={handleChange}
                        minlength="11"
                        maxlength="13"
                    />
                </div>
                {errors.nin && <p className="text-[#ff4545] text-sm font-semibold">{errors.nin}</p>}
            </div>
        </div>
    );
});

export default OptionalNoForm;
