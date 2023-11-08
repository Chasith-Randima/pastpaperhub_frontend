"use client";
import { useState } from "react";
import Link from "next/link";
// import Message from "components/MessageAuth";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signup } from "@/actions/auth";
import Layout from "@/components/Layout";

const SignUp = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    error: "",
    loading: false,
    message: "",
  });

  const [tempError, setTempError] = useState(false);

  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };

  const { name, email, password, passwordConfirm, error, loading, message } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || values.name <= 0) {
      setTempError(true);
      return;
    }
    if (
      !values.email ||
      values.email.length <= 0 ||
      !values.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setTempError(true);
      return;
    }
    if (!values.password || values.password.length <= 0) {
      setTempError(true);
      return;
    }
    if (!values.passwordConfirm || values.passwordConfirm.length <= 0) {
      setTempError(true);
      return;
    }
    if (values?.password != values?.passwordConfirm) {
      setTempError(true);
      return;
    }

    setAlert({ ...alert, loading: true });
    setValues({ ...values, loading: true, error: false });

    const user = {
      name,
      email,
      password,
      passwordConfirm,
    };
    signup(user)
      .then((data) => {
        if (data.status && data.status == "success") {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            error: "",
            loading: false,
            message: data.statusText,
          });
          setTempError(false);
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

          router.push(`/`);
        } else {
          setAlert({
            ...alert,
            loading: false,
            message: "Check your credentials..",
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
          message: "Check your credentials...",
          error: true,
          success: false,
        });
      });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  let showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  let showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  let showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  return (
    <>
      {alert.error && (
        <Message message={alert.message} resetAlert={resetAlert} />
      )}
      {alert.success && (
        <Message message={alert.message} resetAlert={resetAlert} />
      )}
      {alert.loading && (
        <Message
          message={"Loading...Please Waite..."}
          resetAlert={resetAlert}
        />
      )}

      <Layout>
        <div className="flex flex-row  items-center justify-center min-h-screen py-2 bg-gray-100">
          <div className="flex flex-row  items-center justify-center md:w-full  md:px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl  md:w-3/5 md:max-w-4xl">
              <div className=" p-5">
                <div className="md:py-10">
                  <h2 className="text-3xl font-bold text-primary-500 mb-2">
                    Create Account
                  </h2>
                  <div className="border-2 w-10 border-primary-500 inline-block mb-2"></div>

                  <div className="mt-10 flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <AiOutlineUser className="text-gray-400 m-2" />
                      <input
                        type="text"
                        name="uname"
                        value={name}
                        onChange={handleChange("name")}
                        placeholder="Name"
                        className="bg-gray-100 outline-none text-sm"
                      />
                    </div>
                    {tempError && name?.length <= 0 && (
                      <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                        <h2 className="text-red-500 ">Please enter a name</h2>
                      </div>
                    )}
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <FaRegEnvelope className="text-gray-400 m-2" />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange("email")}
                        placeholder="Email"
                        className="bg-gray-100 outline-none text-sm"
                      />
                    </div>
                    {tempError &&
                      !email
                        ?.toLowerCase()
                        .match(
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        ) && (
                        <div className="flex justify-center mb-2 pl-2 pr-2 border-red-500 border-2 rounded-lg ">
                          <h2 className="text-red-500 ">
                            Please enter a valid email
                          </h2>
                        </div>
                      )}
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <MdLockOutline className="text-gray-400 m-2" />
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange("password")}
                        placeholder="Password"
                        className="bg-gray-100 outline-none text-sm"
                      />
                    </div>
                    {tempError && password?.length <= 0 && (
                      <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                        <h2 className="text-red-500 ">
                          Please Enter a Password
                        </h2>
                      </div>
                    )}
                    {tempError && password?.length < 8 && (
                      <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                        <h2 className="text-red-500 ">
                          Passwords must containe at least 8 chracters
                        </h2>
                      </div>
                    )}
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <MdLockOutline className="text-gray-400 m-2" />
                      <input
                        type="password"
                        name="cpassword"
                        value={passwordConfirm}
                        onChange={handleChange("passwordConfirm")}
                        placeholder="Confirm Password"
                        className="bg-gray-100 outline-none text-sm"
                      />
                    </div>
                    {tempError && password != passwordConfirm && (
                      <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                        <h2 className="text-red-500 ">
                          Passwords dosent match
                        </h2>
                      </div>
                    )}
                    {tempError && passwordConfirm?.length < 8 && (
                      <div className="flex justify-center col-span-3 border-red-500 border-2 rounded-lg mt-1 mb-1">
                        <h2 className="text-red-500 ">
                          Passwords must containe at least 8 chracters
                        </h2>
                      </div>
                    )}
                    <button
                      onClick={handleSubmit}
                      className="border-2 border-primary-500 text-primary-500 rounded-full px-11 py-1 font-semibold hover:bg-primary-500 hover:text-white"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* </Layout> */}
    </>
  );
};

export default SignUp;
