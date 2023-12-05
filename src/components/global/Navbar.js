import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Navbar = (props) => {

    const token = cookies.get("TOKEN");


    const checkCookiesMain = () => {
        if(!token){
            return <Link className="btn btn-outline-light" to="/signin">Sign in</Link>
        }else{
            return <Link className="btn btn-outline-light" to="/profile">My profile</Link>
        }
    }

    const logout = () => {
        cookies.remove("TOKEN", {path: "/"});
        document.location.reload(true)
    }

    const checkCookiesBurger = () => {
        if(!token){
            return (
                <>
                    <Link className="w-100 mb-2 btn btn-outline-light" to="/signin">Sign in</Link>
                    <Link className="w-100 mb-2 btn btn-primary btn-dark" to="/signup">Sign up</Link>
                </>
            
            )
        }else{
            return (
                <>
                    <Link className="w-100 mb-2 btn btn-outline-light" to="/profile">My profile</Link>
                    <p className="w-100 mb-2 btn btn-primary btn-dark" onClick={logout}>Logout</p>
                </>
            
            )
        }
    }

    const returnHome = () => {
        window.location.href = "/";
    }

    return (
        <div className="navbar-axion">
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid position-relative">
                    <button className="navbar-burger btn p-0">
                        <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg></button>
                    <Link className="position-absolute top-50 start-50 translate-middle navbar-brand h4 mb-0 text-decoration-none" href="#">
                        <img onClick={returnHome} src="/images/Screenshot-2023-10-03-9-52-02-AM-removebg-preview.png" alt="" style={{height: '50px'}} width="auto" /></Link>
                    <div className="collapse navbar-collapse">
                        <Link className="ms-20 btn text-white" to="/products">Our products</Link><Link className="ms-auto btn text-white" to="/signup">Create an account</Link>{checkCookiesMain()}
                    </div>
                </div>
                <div className="navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-sm d-none" style={{zIndex: 9999}}>
                    <div className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-secondary-dark" style={{opacity: '75%'}}></div>
                    <nav className="position-relative h-100 w-100 d-flex flex-column py-8 px-8 overflow-auto bg-dark"><div className="d-flex align-items-center mb-32">

                        <button className="navbar-close btn-close-white btn-close" type="button" aria-label="Close"></button>
                    </div>
                        <div>
                            <ul className="nav flex-column"><li className="nav-item"><Link className="nav-link text-dark py-5 ps-8 bg-primary-light rounded" to="/products">Products</Link></li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item"><a className="nav-link py-5 ps-8 text-white" href="#specifications">Features</a></li>
                                <li className="nav-item">
                                </li>
                            </ul></div>
                        <div className="mt-auto">
                            <div className="py-6">
                                {checkCookiesBurger()}
                            </div>
                            <p className="mb-4 small text-center text-muted">
                                <span>© 2022. All rights reserved.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;