import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "./globals.css"

const NotFound = () => {

    return (
        <div>
            <section className="position-relative bg-secondary-dark py-40 overflow-hidden">
            <Image
                className="d-none d-md-block position-absolute top-0 end-0 mt-xl-40 mw-xs mw-lg-none Image-fluid"
                src="zospace-assets/images/five-stars.svg"
                alt=""
            />
            <div className="container position-relative">
                <div className="mw-lg mw-md-xl mw-xl-5xl mx-auto">
                    <div className="mw-xl">
                        <h2 className="h3 text-white mb-14">
                            Sorry, we can&apos;t find that page or something has gone wrong...
                        </h2>
                        <Link className="btn btn-dark btn-outline-light" href="/">
                            Home page
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )

}

export default NotFound;