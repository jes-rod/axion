'use client'

import React, {useEffect} from 'react';
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const cookies = useCookies();
    const router = useRouter();
    const token = cookies.get("TOKEN");

    useEffect(() => {
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (let i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.remove('d-none');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.add('d-none');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('d-none');
                    }
                });
            }
        }
    },[]);

    const checkCookiesMain = () => {
        if (!token) {
            return (
                <>
                    <Link className="ms-auto btn text-white" href="/signup">Create an account</Link>
                    <Link className="btn btn-outline-light" href="/signin">Sign in</Link>
                </>
            
            )
        } else {
            return (
                <>
                    <button className="ms-auto btn text-white" onClick={logout}>Logout</button>
                    <Link className="btn btn-outline-light" href="/profile">My profile</Link>
                </>
            )
        }
    }

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        router.refresh();
    }

    const checkCookiesBurger = () => {
        if (!token) {
            return (
                <>
                    <Link className="w-100 mb-2 btn btn-outline-light" href="/signin">Sign in</Link>
                    <Link className="w-100 mb-2 btn btn-primary btn-dark" href="/signup">Sign up</Link>
                </>

            )
        } else {
            return (
                <>
                    <Link className="w-100 mb-2 btn btn-outline-light" href="/profile">My profile</Link>
                    <p className="w-100 mb-2 btn btn-primary btn-dark" onClick={logout}>Logout</p>
                </>

            )
        }
    }

    return (
        <div className="navbar-axion" style={{position: "sticky", top: 0, zIndex: 2}}>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid position-relative">
                    <button className="navbar-burger btn p-0">
                        <svg
                            width={39}
                            height={13}
                            viewBox="0 0 39 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width={39} height={2} rx={1} fill="#C4C4C4" />
                            <rect x={19} y={11} width={20} height={2} rx={1} fill="#C4C4C4" />
                        </svg>
                    </button>
                    <Link
                        className="position-absolute top-50 start-50 translate-middle navbar-brand h4 mb-0 text-decoration-none"
                        href="/">
                        <img
                            src="images/axion.png"
                            alt="Axion logo"
                            height={50}
                            width={187}
                        />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <Link className="ms-20 btn text-white" href="/products">
                            Our products
                        </Link>
                        {checkCookiesMain()}
                    </div>
                </div>
                <div
                    className="navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-sm d-none"
                    style={{ zIndex: 9999 }}
                >
                    <div
                        className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-secondary-dark"
                        style={{ opacity: "75%" }}
                    />
                    <nav className="position-relative h-100 w-100 d-flex flex-column py-8 px-8 overflow-auto bg-dark">
                        <div className="d-flex align-items-center mb-32">
                            <Link className="me-auto h4 mb-0 text-decoration-none" href="/">
                                <img
                                    src="images/axion.png"
                                    alt=""
                                    height={28}
                                    width={95}
                                />
                            </Link>
                            <button
                                className="navbar-close btn-close-white btn-close"
                                type="button"
                                aria-label="Close"
                            />
                        </div>
                        <div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark py-5 ps-8 bg-primary-light rounded"
                                        href="/products"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item" />
                                <li className="nav-item">
                                    <Link className="nav-link py-5 ps-8 text-white" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item" />
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="py-6">
                                {checkCookiesBurger()}
                            </div>
                            <p className="mb-4 small text-center text-muted">
                                <span>© 2023. All rights reserved.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </nav>

        </div>
    );

}

export default Navbar;