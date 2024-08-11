import { useState, memo } from "react";

const UserForm = memo(({ index, user, handleChange, errors }) => {
    return (
        <div className="mb-[22px] flex flex-col gap-[22px]">
            <p className="text-lg font-semibold">New User</p>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`firstName-${index}`}>First Name</label>
                <input
                    className="outline-none"
                    name="firstName"
                    id={`firstName-${index}`}
                    type="text"
                    value={user.firstName}
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`lastName-${index}`}>Last Name</label>
                <input
                    className="outline-none"
                    name="lastName"
                    id={`lastName-${index}`}
                    type="text"
                    value={user.lastName}
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`phoneNumber-${index}`}>AIRTEL Phone Number</label>
                <input
                    className="outline-none"
                    name="phoneNumber"
                    id={`phoneNumber-${index}`}
                    type="text"
                    value={user.phoneNumber}
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`ninNumber-${index}`}>NIN Number</label>
                <input
                    className="outline-none"
                    name="ninNumber"
                    id={`ninNumber-${index}`}
                    type="text"
                    value={user.ninNumber}
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.ninNumber && <p className="text-red-500 text-sm">{errors.ninNumber}</p>}
            </div>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`utilityBill-${index}`}>Utility Bill</label>
                <input
                    className="outline-none"
                    name="utilityBill"
                    id={`utilityBill-${index}`}
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.utilityBill && <p className="text-red-500 text-sm">{errors.utilityBill}</p>}
            </div>
            <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex flex-col">
                <label className="mb-[9px] block" htmlFor={`ninSlip-${index}`}>NIN Slip</label>
                <input
                    className="outline-none"
                    name="ninSlip"
                    id={`ninSlip-${index}`}
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleChange(e, index)}
                />
                {errors.ninSlip && <p className="text-red-500 text-sm">{errors.ninSlip}</p>}
            </div>
        </div>
    );
});

const SignupForm = () => {
    const [formData, setFormData] = useState([{ 
        firstName: "", 
        lastName: "", 
        phoneNumber: "", 
        ninNumber: "", 
        utilityBill: null, 
        ninSlip: null 
    }]);

    const [errors, setErrors] = useState([{}]);

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
            if (!user.ninNumber) userErrors.ninNumber = "NIN Number is required"; // Added validation
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
                formDataToSend.append(`user[${index}].firstName`, user.firstName);
                formDataToSend.append(`user[${index}].lastName`, user.lastName);
                formDataToSend.append(`user[${index}].phoneNumber`, user.phoneNumber);
                formDataToSend.append(`user[${index}].ninNumber`, user.ninNumber);  // Added ninNumber
                if (user.utilityBill) {
                    formDataToSend.append(`user[${index}].utilityBill`, user.utilityBill);
                }
                if (user.ninSlip) {
                    formDataToSend.append(`user[${index}].ninSlip`, user.ninSlip);
                }
            });

            fetch('innjoy-signup-production.up.railway.app/submit-form', {
                method: 'POST',
                body: formDataToSend,
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
        }
    };

    const addUser = () => {
        setFormData([...formData, { firstName: "", lastName: "", phoneNumber: "", ninNumber: "", utilityBill: null, ninSlip: null }]);
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
                <div className="max-w-[550px]">
                    <div className="mb-[30px]">
                        <h2 className="text-[27px] font-semibold mb-[12px]">PILOT ACCOUNT HOLDER'S DETAILS</h2>
                    </div>
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
                            className="py-[9px] px-[18px] rounded-[4.5px] bg-[#36B864] hover:bg-[#111D15] text-white cursor-pointer mb-4 mr-4"
                        >
                            Add Another Number
                        </button>
                        <input
                            className="py-[9px] px-[18px] rounded-[4.5px] bg-[#36B864] hover:bg-[#111D15] text-white cursor-pointer"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
    );
};

export default SignupForm;
