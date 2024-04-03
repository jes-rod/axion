'use client'
import React from 'react';
import "../../../public/css/main.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../api/api';
import { useCookies } from 'next-client-cookies';
import EyeClosed from '@/components/global/EyeClosed';
import EyeOpen from '@/components/global/EyeOpen';
import { revalidate } from '../revalidation';




const Signin = () => {
    const cookies = useCookies();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(cookies.get("TOKEN")){
            setAlertMessage("You are already logged in. We are redirecting you to your profile's page... ");
            setTimeout(() => {
                router.push('/profile');
            }, 5000);
            
        }else if(!email){
            setAlertMessage("Please enter your email address");
        }else if(!password){
            setAlertMessage("Please enter your password");
        }else{
            setAlertMessage("");
            const response = await login({email: email, password: password});
            if(response.error){
                console.log(response.error);
                setAlertMessage("Sorry we couldn't log you in, try again after a few minutes");
            }else{
                cookies.set("TOKEN", response.token, {
                    path: "/",
                  });
                cookies.set("email", response.email, {
                    path: "/",
                  });
                  await revalidate();
                  router.push('/profile');
            }
        }
    }

    const changeViewPassword = () => {
        setViewPassword(!viewPassword);
    }

    return (
        <div className="signin">
            <section className="position-relative bg-secondary-dark py-24 py-md-40 overflow-hidden">
                <img
                    className="d-none d-lg-block position-absolute top-50 start-0 w-100 translate-middle-y Image-fluid"
                    src="zospace-assets/lines/line-mountain.svg"
                    alt=""
                />
                <img
                    className="d-lg-none position-absolute top-0 start-0 mt-20 w-100 Image-fluid"
                    src="zospace-assets/lines/line-mountain.svg"
                    alt=""
                />
                <div className="container position-relative">
                    <div className="row align-items-center signin">
                        <div className="col-12 col-lg-6 mb-16 mb-lg-0">
                            <div className="mw-md mx-auto">
                                <h2 className="h3 text-white mt-10 mb-14">
                                    Sign in to purchase our products
                                </h2>
                                <p className="text-secondary-light"></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="mw-md mx-auto pt-20 pb-24 px-8 px-md-12 px-xl-14 rounded bg-secondary">
                                <form onSubmit={handleSubmit} >
                                    <h3 className="h5 text-white mb-10">Sign in</h3>
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
                                        <div className="form-floating ms-4">   {/* Email address input box */}
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type="email"
                                                id="emailAddress"
                                                placeholder="Your email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />  
                                            <label htmlFor="emailAddress">Your email</label>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-4 ps-14 py-2 pe-4 bg-white rounded-pill">
                                        <div className="position-absolute top-50 start-0 ms-8 translate-middle-y pe-4 py-1 border-end">
                                            {viewPassword ? <EyeClosed setViewPassword={changeViewPassword} /> : <EyeOpen setViewPassword={changeViewPassword} />}
                                        </div>
                                        <div className="form-floating ms-4">  {/* Password input box */}
                                            <input
                                                className="form-control border-0 bg-transparent"
                                                type={viewPassword ? "text" : "password"}
                                                placeholder="Password"
                                                id="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div id="Alert message" className="text-danger text-center">
                                        <p id="alert">{alertMessage}</p>
                                    </div>
                                    <button className="btn w-100 btn-outline-light" type="submit">
                                        Sign in
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

export default Signin;