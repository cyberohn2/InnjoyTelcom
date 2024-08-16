import {  memo } from "react";
import OptionalNoForm from "./OptionalNoForm";


const UserForm = memo(({ user, handleChange, errors }) => {
    return (
        <div className="mb-[22px]">
            <div className="mb-[22px] flex flex-col gap-[22px] border-b border-black py-2">
                <h3 className="font-semibold text-xl">Pilot Number Details</h3>
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
                        />
                    </div>
                    {errors.phoneNumber && <p className="text-[#ff4545] text-sm font-semibold">{errors.phoneNumber}</p>}
                </div>
                <div className="flex flex-col items-start">
                    <label className="mb-1 block text-gray-600 text-sm" htmlFor="nin">NIN Number</label>
                    <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3]">
                        <input
                            className="outline-none w-full"
                            name="nin"
                            id="nin"
                            type="text"
                            value={user.nin}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.nin && <p className="text-[#ff4545] text-sm font-semibold">{errors.nin}</p>}
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <label className="relative mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor="utilityBill">Utility Bill <span className="is-selected absolute top-0 right-0 text-[8px] p-1 text-green-500"></span></label>
                            <input
                                className="outline-none hidden"
                                name="utilityBill"
                                id="utilityBill"
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleChange}
                            />
                        </div>
                        {errors.utilityBill && <p className="text-[#ff4545] text-sm font-semibold">{errors.utilityBill}</p>}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <label className="relative mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor="ninSlip">NIN Slip <span className="is-selected absolute top-0 right-0 text-[8px] p-1 text-green-500"></span></label>
                            <input
                                className="outline-none hidden"
                                name="ninSlip"
                                id="ninSlip"
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleChange}
                            />
                        </div>
                        {errors.ninSlip && <p className="text-[#ff4545] text-sm font-semibold">{errors.ninSlip}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default UserForm;