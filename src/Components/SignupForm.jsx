import { useState, memo } from "react";

const UserForm = memo(({ index, user, handleChange, errors }) => {
    return (
        <div className="mb-[22px] flex flex-col gap-[22px]">
            <p className="text-lg font-semibold">New User</p>
            <div className="flex flex-col items-start">
                    <label className="mb-1 block text-gray-600 text-sm" htmlFor={`firstName-${index}`}>First Name</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] ">
                    <input
                        className="outline-none"
                        name="firstName"
                        id={`firstName-${index}`}
                        type="text"
                        value={user.firstName}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                {errors.firstName && <p className="text-[#ff4545] text-sm font-semibold">{errors.firstName}</p>}
            </div>
            <div className=" flex flex-col items-start">
                    <label className="mb-1 block text-gray-600 text-sm" htmlFor={`lastName-${index}`}>Last Name</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] ">
                    <input
                        className="outline-none"
                        name="lastName"
                        id={`lastName-${index}`}
                        type="text"
                        value={user.lastName}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                {errors.lastName && <p className="text-[#ff4545] text-sm font-semibold">{errors.lastName}</p>}
            </div>
            <div className="flex flex-col items-start">
                    <label className="mb-1 block text-gray-600 text-sm" htmlFor={`phoneNumber-${index}`}>AIRTEL Phone Number</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] ">
                    <input
                        className="outline-none"
                        name="phoneNumber"
                        id={`phoneNumber-${index}`}
                        type="text"
                        value={user.phoneNumber}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                {errors.phoneNumber && <p className="text-[#ff4545] text-sm font-semibold">{errors.phoneNumber}</p>}
            </div>
            <div className="flex flex-col items-start">
                    <label className="mb-1 block text-gray-600 text-sm" htmlFor={`nin-${index}`}>NIN Number</label>
                <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3]">
                    <input
                        className="outline-none"
                        name="nin"
                        id={`nin-${index}`}
                        type="text"
                        value={user.nin}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                {errors.nin && <p className="text-[#ff4545] text-sm font-semibold">{errors.nin}</p>}
            </div>
            <div className="flex gap-4">
                <div className=" flex flex-col">
                    <div className="flex gap-2">
                        <label className="mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor={`utilityBill-${index}`}>Utility Bill</label>
                        <input
                            className="outline-none hidden"
                            name="utilityBill"
                            id={`utilityBill-${index}`}
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                    {errors.utilityBill && <p className="text-[#ff4545] text-sm font-semibold">{errors.utilityBill}</p>}
                </div>
                <div className=" flex flex-col ">
                    <div className="flex gap-2">
                        <label className="mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" htmlFor={`ninSlip-${index}`}>NIN Slip</label>
                        <input
                            className="outline-none hidden"
                            name="ninSlip"
                            id={`ninSlip-${index}`}
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                    {errors.ninSlip && <p className="text-[#ff4545] text-sm font-semibold">{errors.ninSlip}</p>}
                </div>
            </div>
        </div>
    );
});

const SignupForm = () => {
    const [formData, setFormData] = useState([{ 
        firstName: "", 
        lastName: "", 
        phoneNumber: "", 
        nin: "",  
        utilityBill: null, 
        ninSlip: null 
    }]);

    const [errors, setErrors] = useState([{}]);
    const [message, setMessage] = useState(""); // New state for success/error message
    const [messageColor, setMessageColor] = useState(""); // New state for message color

    const handleChange = (e, index) => {
        const { name, value, files } = e.target;
        const newFormData = [...formData];

        if (files) {
            const file = files[0];
            const validTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

            if (file && !validTypes.includes(file.type)) {
                const newErrors = [...errors];
                newErrors[index] = {
                    ...newErrors[index],
                    [name]: "Invalid file type. Only JPG, PNG, and PDF files are allowed.",
                };
                setErrors(newErrors);
                newFormData[index][name] = null;
            } else {
                const newErrors = [...errors];
                newErrors[index] = { ...newErrors[index], [name]: null };
                setErrors(newErrors);
                newFormData[index][name] = file;
            }
        } else {
            newFormData[index][name] = value;
        }

        setFormData(newFormData);
    };

    const validate = () => {
        const newErrors = formData.map(user => {
            let userErrors = {};
            if (!user.firstName) userErrors.firstName = "First Name is required";
            if (!user.lastName) userErrors.lastName = "Last Name is required";
            if (!user.phoneNumber) userErrors.phoneNumber = "AIRTEL Phone Number is required";
            if (!user.nin) userErrors.nin = "NIN Number is required";
            if (!user.utilityBill) userErrors.utilityBill = "Utility Bill is required";
            if (!user.ninSlip) userErrors.ninSlip = "NIN Slip is required";
            return userErrors;
        });

        setErrors(newErrors);
        return newErrors.every(error => Object.keys(error).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formDataToSend = new FormData();
    
            formData.forEach((user, index) => {
                const userData = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    nin: user.nin,
                };
    
                // Append user data as JSON string
                formDataToSend.append(`user_${index}`, JSON.stringify(userData));
    
                // Append files separately
                if (user.utilityBill) {
                    formDataToSend.append(`utilityBill_${index}`, user.utilityBill);
                }
                if (user.ninSlip) {
                    formDataToSend.append(`ninSlip_${index}`, user.ninSlip);
                }
            });
    
            fetch('https://innjoy-signup-production.up.railway.app/submit-form', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    // 'Content-Type': 'multipart/form-data' // Do not set this manually when using FormData
                }
            })
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }
                return contentType && contentType.includes("application/json")
                    ? response.json()
                    : response.text();  // Parse response as text if it's not JSON
            })
            .then(data => {
                if (typeof data === "object") {
                    console.log('Success:', data);
                } else {
                    console.log('Success:', data);
                }
                setMessage("You have successfully registered, you'll be contacted shortly.");
                setMessageColor("text-green-500");
                setFormData([{ firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }]);
            })
            .catch(error => {
                console.error('Error:', error);
                setMessage("There was an error submitting the form. Please try again.");
                setMessageColor("text-red-500 font-bold"); // Set error message to bold and light red
            });
        }
    };
    

    const addUser = () => {
        setFormData([...formData, { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }]);
        setErrors([...errors, {}]);
    };

    return (
        <div id="contact" className="py-[56px] flex flex-col sm:flex-row-reverse justify-between gap-4 max-w-[1080px] mx-auto px-8">
         <div>
                <h2 className="font-bold text-[2.5rem] leading-tight max-w-[400px]">Join the CALL BONANZA of InnJoy Telcom</h2>
                <p className="text-[12px] text-[#666666] max-w-[350px]">
                    Airtel Lines and Details. <b>Phone Number</b>, <b>First Name</b>, <b>Last Name</b> and <b>NIN</b> of each user of the bonanza calls must be the same as captured by Airtel in their system during SIM registration.
                </p>
            </div>
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                {formData.map((user, index) => (
                    <UserForm 
                        key={index} 
                        index={index} 
                        user={user} 
                        handleChange={handleChange} 
                        errors={errors[index] || {}} 
                    />
                ))}
                <button 
                    type="button" 
                    onClick={addUser} 
                    className="mb-[22px] mr-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Another Number
                </button>
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
