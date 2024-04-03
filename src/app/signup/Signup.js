'use client'
import React from 'react';
import { useState } from 'react';
import "../../../public/css/main.css";
import EyeClosed from '@/components/global/EyeClosed';
import EyeOpen from '@/components/global/EyeOpen';
import { signUp } from '../api/api';



const Signup = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("");

    const changeViewPassword = () => {
        setViewPassword(!viewPassword);
    }
    const changeConfirmViewPassword = () => {
        setViewConfirmPassword(!viewConfirmPassword);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!fullName){
            setAlertMessage("Please enter your full name");
        }else if(!email){
            setAlertMessage("Please enter your email address");
        }else if(!password){
            setAlertMessage("Please enter a password");
        }else if(!confirmPassword){
            setAlertMessage("Please confirm your password");
        }else if((password && confirmPassword) && !(password === confirmPassword)){
            setAlertMessage("Passwords don't match");
        }else if(!checkbox){
            setAlertMessage("Please accept our terms and conditions");
        }else{
            setAlertMessage("");
            const response = await signUp({fullName, email, password});
            if(response === "Email address already exists") {
                setAlertMessage("The email address entered already exists");
                return;
            }
            setSuccessMessage("You have registered successfully")
            setTimeout(() => {  window.location.href = '/signin'; }, 2000);
        }
    }

    return (
        <div className="signup">
            <section className="position-relative bg-secondary-dark py-24 py-md-40 overflow-hidden">
                <div className="container position-relative">
                    <div className="row align-items-center signup">
                        <div className="col-12 col-lg-6 mb-16 mb-lg-0">
                            <div className="mw-md mx-auto">
                                <h2 className="h3 text-white mt-10 mb-14">
                                    Create an account to purchase our products
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="mw-md mx-auto pt-20 pb-24 px-8 px-md-12 px-xl-14 rounded bg-secondary">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="h5 text-white mb-10">Register Account</h3>
                                    <div className="position-relative mb-4 ps-14 py-2 pe-4 bg-white rounded-pill">
                                        <div className="position-absolute top-50 start-0 ms-8 translate-middle-y pe-4 py-1 border-end">
                                            <svg
                                                width={20}
                                                height={21}
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                                                    fill="black"
                                                />
                                                <rect
                                                    x={15}
                                                    y={15}
                                                    width={5}
                                                    height={1}
                                                    rx="0.5"
                                                    fill="black"
                                                />
                                                <rect
                                                    x={17}
                                                    y={18}
                                                    width={5}
                                                    height={1}
                                                    rx="0.5"
                                                    transform="rotate(-90 17 18)"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div className="form-floating ms-4">
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type="text"
                                                id="name"
                                                placeholder="Full name"
                                                defaultValue=""
                                                onChange={(e) => setFullName(e.target.value)}
                                            />
                                            <label htmlFor="username">Full name</label>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-4 ps-14 py-2 pe-4 bg-white rounded-pill">
                                        <div className="position-absolute top-50 start-0 ms-8 translate-middle-y pe-4 py-1 border-end">
                                            <svg
                                                width={20}
                                                height={21}
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                                                    fill="black"
                                                />
                                                <rect
                                                    x={15}
                                                    y={15}
                                                    width={5}
                                                    height={1}
                                                    rx="0.5"
                                                    fill="black"
                                                />
                                                <rect
                                                    x={17}
                                                    y={18}
                                                    width={5}
                                                    height={1}
                                                    rx="0.5"
                                                    transform="rotate(-90 17 18)"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div className="form-floating ms-4">
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type="email"
                                                id="email"
                                                placeholder="Your email"
                                                defaultValue=""
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label htmlFor="email">Your email</label>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-4 ps-14 py-2 pe-4 bg-white rounded-pill">
                                        <div className="position-absolute top-50 start-0 ms-8 translate-middle-y pe-4 py-1 border-end">
                                            {viewPassword ? <EyeClosed setViewPassword={changeViewPassword} /> : <EyeOpen setViewPassword={changeViewPassword} />}
                                        </div>
                                        <div className="form-floating ms-4">
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type={viewPassword ? "text" : "password"}
                                                placeholder="Password"
                                                id="password"
                                                defaultValue=""
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-6 ps-14 py-2 pe-4 bg-white rounded-pill">
                                        <div className="position-absolute top-50 start-0 ms-8 translate-middle-y pe-4 py-1 border-end">
                                            {viewConfirmPassword ? <EyeClosed setViewPassword={changeConfirmViewPassword} /> : <EyeOpen setViewPassword={changeConfirmViewPassword} />}
                                        </div>
                                        <div className="form-floating ms-4">
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type={viewConfirmPassword ? "text" : "password"}
                                                id="confirmPassword"
                                                placeholder="Repeat password"
                                                defaultValue=""
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <label htmlFor="confirmPassword">Repeat password</label>
                                        </div>
                                    </div>
                                    <div className="form-check mb-12">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="termsOfService"
                                            onChange={(e) => setCheckbox(!checkbox)}
                                        />
                                        <label className="form-check-label small text-secondary-light">
                                            <span>By signing up, you agree to our</span>
                                            <a
                                                className="d-inline-block text-decoration text-white"
                                                href="/"
                                            >
                                                Terms, Data Policy
                                            </a>
                                            <span> and </span>
                                            <a
                                                className="d-inline-block text-decoration text-white"
                                                href="/"
                                            >
                                                Cookies.
                                            </a>
                                        </label>
                                    </div>
                                    <div id="Alert message" className="text-danger text-center">
                                        <p id="alert">{alertMessage}</p>
                                    </div>
                                    <div id="Success Message" className="text-success text-center">
                                        <p id="success">{successMessage}</p>
                                    </div>
                                    <button className="btn w-100 btn-outline-light" type="submit">
                                        Get started
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Signup;