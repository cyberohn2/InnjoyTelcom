import { useState, memo } from "react";

const UserForm = memo(({ user, handleChange, errors }) => {
    return (
        <div className="mb-[22px] flex flex-col gap-[22px]">
            <p className="text-lg font-semibold">New User</p>
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
                        <label className="mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor="utilityBill">Utility Bill</label>
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
                        <label className="mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor="ninSlip">NIN Slip</label>
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
    );
});

const SignupForm = () => {
    const [formData, setFormData] = useState([
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Pilot Account
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Phone 2
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Phone 3 (Optional)
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Phone 4 (Optional)
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Phone 5 (Optional)
    ]);

    const [errors, setErrors] = useState([
        {}, {}, {}, {}, {}
    ]);  // Initialized as an array of empty objects

    const [message, setMessage] = useState(""); 
    const [messageColor, setMessageColor] = useState(""); 

    const handleChange = (e, index) => {
        const { name, value, files } = e.target;
        const newFormData = [...formData];
        const newErrors = [...errors];

        if (files) {
            const file = files[0];
            const validTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

            if (file && !validTypes.includes(file.type)) {
                newErrors[index] = {
                    ...newErrors[index],
                    [name]: "Invalid file type. Only JPG, PNG, and PDF files are allowed.",
                };
                newFormData[index][name] = null;
            } else {
                newErrors[index][name] = null;
                newFormData[index][name] = file;
            }
        } else {
            newFormData[index][name] = value;
        }

        setFormData(newFormData);
        setErrors(newErrors);
    };

    const validate = () => {
        const newErrors = formData.map(user => {
            const userErrors = {};
            if (!user.firstName) userErrors.firstName = "First Name is required";
            if (!user.lastName) userErrors.lastName = "Last Name is required";
            if (!user.phoneNumber) userErrors.phoneNumber = "AIRTEL Phone Number is required";
            if (!user.nin) userErrors.nin = "NIN Number is required";
            if (!user.utilityBill) userErrors.utilityBill = "Utility Bill is required";
            if (!user.ninSlip) userErrors.ninSlip = "NIN Slip is required";
            return userErrors;
        });

        setErrors(newErrors);
        return newErrors.every(userErrors => Object.keys(userErrors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            formData.forEach(user => {
                const formDataToSend = new FormData();
                Object.keys(user).forEach(key => {
                    formDataToSend.append(key, user[key]);
                });

                fetch('https://innjoy-signup-production.up.railway.app/submit-form', {
                    method: 'POST',
                    body: formDataToSend,
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to submit form");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    setMessage("You have successfully registered, you'll be contacted shortly.");
                    setMessageColor("text-green-500");
                })
                .catch(error => {
                    console.error('Error:', error);
                    setMessage("There was an error submitting the form. Please try again.");
                    setMessageColor("text-red-500 font-bold");
                });
            });
            setFormData([
                { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null },
                { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null },
                { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null },
                { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null },
                { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null },
            ]);
        }
    };

    return (
        <div id="contact" className="py-[56px] flex flex-col sm:flex-row-reverse sm:items-start justify-between gap-4 max-w-[1080px] mx-auto px-8 relative">
            <div className="basis-[40%] sm:sticky top-32">
                <h2 className="font-bold text-[2.5rem] leading-tight max-w-[400px]">Join the CALL BONANZA of InnJoy Telcom</h2>
                <p className="text-[12px] text-[#666666] max-w-[350px]">
                    Airtel Lines and Details. <b>Phone Number</b>, <b>First Name</b>, <b>Last Name</b> and <b>NIN</b> of each user of the bonanza calls must be the same as captured by Airtel in their system during SIM registration.
                </p>
            </div>
            <div></div>
            <div className="basis-[50%]">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-4 font-semibold text-xl">PILOT ACCOUNT HOLDER'S DETAILS</h3>
                    <UserForm 
                        user={formData[0]} 
                        handleChange={(e) => handleChange(e, 0)} 
                        errors={errors[0]}  // Updated to pass the correct errors
                    />
                    <h3 className="mb-4 font-semibold text-xl">Secondary Airtel Lines and Details</h3>
                    <p className="text-[12px] text-[#666666] max-w-[350px]">
                    <b>NB:</b> Each user of the bonanza calls must provide details which should be same as captured by AIRTEL in their system during SIM registration.
                    </p>
                    <h3 className="mb-4 font-semibold text-lg">Phone 2</h3>
                    <UserForm 
                        user={formData[1]} 
                        handleChange={(e) => handleChange(e, 1)} 
                        errors={errors[1]}  // Updated to pass the correct errors
                    />
                    <h3 className="mb-4 font-semibold text-lg">Phone 3 (Optional)</h3>
                    <UserForm 
                        user={formData[2]} 
                        handleChange={(e) => handleChange(e, 2)} 
                        errors={errors[2]}  // Updated to pass the correct errors
                    />
                    <h3 className="mb-4 font-semibold text-lg">Phone 4 (Optional)</h3>
                    <UserForm 
                        user={formData[3]} 
                        handleChange={(e) => handleChange(e, 3)} 
                        errors={errors[3]}  // Updated to pass the correct errors
                    />
                    <h3 className="mb-4 font-semibold text-lg">Phone 5 (Optional)</h3>
                    <UserForm 
                        user={formData[4]} 
                        handleChange={(e) => handleChange(e, 4)} 
                        errors={errors[4]}  // Updated to pass the correct errors
                    />
                    <button 
                        type="submit" 
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                    {message && <p className={`${messageColor} mt-4`}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignupForm;

