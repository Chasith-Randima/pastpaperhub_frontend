"use client";

import { useState, useEffect } from "react";
import { getCookie } from "@/actions/auth";
import { createDocument } from "@/actions/textBooks";
import Layout from "@/components/Layout";

const TextBook = () => {
  const [values, setValues] = useState({
    medium: "",
    type: "",
    subject: "",
    year: "",
    driveLink: "",
  });

  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };

  const { medium, type, subject, year, driveLink } = values;

  const handleChange = (name) => (e) => {
    e.preventDefault();
    let value = name == "images" ? e.target.files[0] : e.target.value;
    if (name == "images") {
      // console.log(name, value, "workin..");
      formData.append(name, value);
      setValues({ ...values, [name]: value, formData });
    } else {
      setValues({ ...values, [name]: value });
    }
    // validateForm();
  };

  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();

    // -----------------------------------
    // if (!values.serialNumber || values.serialNumber.length <= 0) {
    //   setError(true);
    //   return;
    // }
    // if (!values.type || values.type.length <= 0) {
    //   setError(true);
    //   return;
    // }
    // if (!values.status || values.status.length <= 0) {
    //   setError(true);
    //   return;
    // }
    // if (!values.location || values.location.length <= 0) {
    //   setError(true);
    //   return;
    // }
    // if (!values.images || values.images.length <= 0) {
    //   setError(true);
    //   return;
    // }
    // -----------------------------------
    setAlert({ ...alert, loading: true });
    setValues({ ...values, loading: true, error: false });
    // console.log(values);
    // const data = {
    //   serialNumber,
    //   type,
    //   status,
    //   location,
    //   //   images,
    // };

    // for (const key in data) {
    //   formData.append(key, data[key]);
    //   setValues({ ...values, formData });
    // }

    let token = getCookie("token_user");
    console.log(values, "before sent");
    createDocument(values, token)
      .then((data) => {
        if (data.status && data.status == "success") {
          console.log(data);
          setValues({
            ...values,
            examType: "",
            medium: "",
            stream: "",
            subject: "",
            year: "",
            qPart1: "",
            qPart2: "",
            mScheme1: "",
            mScheme2: "",
          });
          setError(false);
          setAlert({
            ...alert,
            loading: false,
            message: data.message,
            error: false,
            success: true,
          });
          window.setTimeout(() => {
            setAlert({ ...alert, success: false, message: "" });
          }, 1000);
          router.reload();
          //   router.push(`/`);
        } else {
          setAlert({
            ...alert,
            loading: false,
            message: err.message,
            error: true,
            success: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          ...alert,
          loading: false,
          message: data.message,
          error: true,
          success: false,
        });
      });
  };

  return (
    <>
      <Layout>
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
            Create Document
          </h2>

          <form>
            <div className="grid grid-cols-3 mt-1 mb-1">
              <label className="col-span-1 p-2 rounded-lg mr-2 bg-gray-200 font-bold text-xl text-gray-600">
                Document Type
              </label>
              <select
                type="text"
                value={type}
                onChange={handleChange("type")}
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
                value={medium}
                onChange={handleChange("medium")}
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
                value={subject}
                onChange={handleChange("subject")}
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
                value={year}
                onChange={handleChange("year")}
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
                value={driveLink}
                onChange={handleChange("driveLink")}
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
                onClick={handleSubmit}
              >
                Create Document
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default TextBook;
