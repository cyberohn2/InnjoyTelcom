import { useState, useEffect, memo } from "react";

const UserForm = memo(({ user, handleChange, errors }) => {
  const [selectedFiles, setSelectedFiles] = useState({
    utilityBill: null,
    ninSlip: null,
  });
  const [uploadProgress, setUploadProgress] = useState({
    utilityBill: 0,
    ninSlip: 0,
  });
  const [uploadSuccess, setUploadSuccess] = useState({
    utilityBill: false,
    ninSlip: false,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFiles((prevFiles) => ({
          ...prevFiles,
          [name]: reader.result,
        }));
        simulateUpload(name);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFiles((prevFiles) => ({
        ...prevFiles,
        [name]: null,
      }));
    }

    handleChange(e);
  };

  const simulateUpload = (fileName) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress((prevProgress) => ({
        ...prevProgress,
        [fileName]: progress,
      }));
      if (progress >= 100) {
        clearInterval(interval);
        setUploadSuccess((prevSuccess) => ({
          ...prevSuccess,
          [fileName]: true,
        }));
        setTimeout(() => {
          setUploadSuccess((prevSuccess) => ({
            ...prevSuccess,
            [fileName]: false,
          }));
        }, 3000);
      }
    }, 100);
  };

  return (
    <div className="mb-[22px]">
      <div className="mb-[22px] flex flex-col gap-[22px] border-b border-black py-2">
        <h3 className="font-semibold text-xl">Pilot Number Details</h3>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-gray-600 text-sm" htmlFor="firstName">
            First Name
          </label>
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
          {errors.firstName && (
            <p className="text-[#ff4545] text-sm font-semibold">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-gray-600 text-sm" htmlFor="lastName">
            Last Name
          </label>
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
          {errors.lastName && (
            <p className="text-[#ff4545] text-sm font-semibold">
              {errors.lastName}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label
            className="mb-1 block text-gray-600 text-sm"
            htmlFor="phoneNumber"
          >
            AIRTEL Phone Number
          </label>
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
          {errors.phoneNumber && (
            <p className="text-[#ff4545] text-sm font-semibold">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-gray-600 text-sm" htmlFor="nin">
            NIN Number
          </label>
          <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full">
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
          {errors.nin && (
            <p className="text-[#ff4545] text-sm font-semibold">{errors.nin}</p>
          )}
        </div>
        
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div>
                  <label
                    className="relative mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    htmlFor="utilityBill"
                  >
                    Utility Bill
                  </label>
                  {uploadSuccess.utilityBill && (
                    <p className="text-green-500 text-sm mt-2">
                      Utility Bill Attached
                    </p>
                  )}
              </div>
              <input
                className="outline-none hidden"
                name="utilityBill"
                id="utilityBill"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
              />
              {selectedFiles.utilityBill && (
                <div>
                  <img
                    src={selectedFiles.utilityBill}
                    alt="Utility Bill Preview"
                    className="w-12 h-12 rounded-sm object-cover"
                  />
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress.utilityBill}%` }}
                    />
                  </div>
                  
                </div>
              )}
            </div>
            {errors.utilityBill && (
              <p className="text-[#ff4545] text-sm font-semibold">
                {errors.utilityBill}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div>
                  <label
                    className="relative mb-[9px] block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    htmlFor="ninSlip"
                  >
                    NIN Slip
                  </label>
                  {uploadSuccess.ninSlip && (
                    <p className="text-green-500 text-sm mt-2">
                      NIN Slip Attached
                    </p>
                  )}
              </div>
              <input
                className="outline-none hidden"
                name="ninSlip"
                id="ninSlip"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
              />
              {selectedFiles.ninSlip && (
                <div>
                  <img
                    src={selectedFiles.ninSlip}
                    alt="NIN Slip Preview"
                    className="w-12 h-12 rounded-sm object-cover"
                  />
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress.ninSlip}%` }}
                    />
                  </div>
                  
                </div>
              )}
            </div>
            {errors.ninSlip && (
              <p className="text-[#ff4545] text-sm font-semibold">
                {errors.ninSlip}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default UserForm;
