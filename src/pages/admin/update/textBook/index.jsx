import React from "react";

const UpdateTextBook = () => {
  return (
    <>
      <div className="m-5 mx-20">
        {/* {alert.error && (
          <Message
            message={alert.message}
            // alert={"error"}
            resetAlert={resetAlert}
          />
        )}
        {alert.success && (
          <Message
            message={alert.message}
            // alert={"success"}
            resetAlert={resetAlert}
          />
        )}
        {alert.loading && (
          <Message
            message={"Loading...Please Waite..."}
            // alert={"loading"}
            resetAlert={resetAlert}
          />
        )} */}
        <h2 className="text-gray-400 text-2xl mt-2 mb-2 font-semibold ">
          Update Document
        </h2>

        <form>
          <div className="grid grid-cols-3 mt-1 mb-1">
            <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200 font-bold text-xl text-gray-600">
              Document Type
            </label>
            <select
              type="text"
              //   value={type}
              //   onChange={handleChange("type")}
              className={
                "col-span-2 p-2 rounded-lg ml-2 bg-gray-200 font-bold text-lg text-gray-600"
              }
              placeholder="Select Document Type"
            >
              <option value={"none"}>Select Document Type</option>
              <option value={"textbook"}>Text Book</option>
              <option value={"syllabus"}>Syllabus</option>
              <option value={"teachers guide"}>Teachers Guide</option>
            </select>
            {/* {error && !type && (
              <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                <h2 className="text-red-500 ">Please select a Type</h2>
              </div>
            )} */}
          </div>
          <div className="grid grid-cols-3 mt-1 mb-1">
            <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200 font-bold text-xl text-gray-600">
              Medium
            </label>
            <select
              type="text"
              //   value={status}
              //   onChange={handleChange("status")}
              className={
                "col-span-2 p-2 rounded-lg ml-2 bg-gray-200 font-bold text-lg text-gray-600"
              }
              placeholder="Select Status"
            >
              <option value={"none"}>Select Medium</option>
              <option value={"sinhala"}>Sinhala</option>
              <option value={"tamil"}>ITamil</option>
              <option value={"english"}>English</option>
            </select>
            {/* {error && !status && (
              <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                <h2 className="text-red-500 ">Please select Status</h2>
              </div>
            )} */}
          </div>

          <div className="grid grid-cols-3 mt-1 mb-1">
            <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200  font-bold text-xl text-gray-600">
              Subject
            </label>

            <input
              className={
                "col-span-2 p-2 rounded-lg ml-2 bg-gray-200 font-bold text-lg outline-none text-gray-600"
              }
              type="text"
              //   value={serialNumber}
              //   onChange={handleChange("serialNumber")}
              placeholder="Enter Subject"
            />
            {/* {error && !serialNumber && (
              <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                <h2 className="text-red-500 ">Please add a serial number</h2>
              </div>
            )} */}
          </div>
          <div className="grid grid-cols-3 mt-1 mb-1">
            <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200  font-bold text-xl text-gray-600">
              Year
            </label>

            <input
              className={
                "col-span-2 p-2 rounded-lg ml-2 bg-gray-200 font-bold text-lg outline-none text-gray-600"
              }
              type="text"
              //   value={serialNumber}
              //   onChange={handleChange("serialNumber")}
              placeholder="Enter Year"
            />
            {/* {error && !serialNumber && (
              <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                <h2 className="text-red-500 ">Please add a serial number</h2>
              </div>
            )} */}
          </div>
          <div className="grid grid-cols-3 mt-1 mb-1">
            <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200  font-bold text-xl text-gray-600">
              Drive Link
            </label>

            <input
              className={
                "col-span-2 p-2 rounded-lg ml-2 bg-gray-200 font-bold text-lg outline-none text-gray-600"
              }
              type="text"
              //   value={serialNumber}
              //   onChange={handleChange("serialNumber")}
              placeholder="Enter Drive Link"
            />
            {/* {error && !serialNumber && (
              <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                <h2 className="text-red-500 ">Please add a serial number</h2>
              </div>
            )} */}
          </div>

          <div className="flex justify-center mt-3">
            <button
              className="p-3 font-bold text-xl text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-all"
              //   onClick={handleSubmit}
            >
              Update Document
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateTextBook;
