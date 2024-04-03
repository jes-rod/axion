
'use client'
import React, { useEffect, useLayoutEffect  } from 'react';
import { useState } from 'react';
import { products, addOrder, profile } from '../api/api';
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'next-client-cookies';


const Checkout = (props) => {
    const cookies = useCookies();
    const email = cookies.get("email");

    const [xsuPrice, setXsuPrice] = useState(0);
    const [xsPrice, setXsPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [xsuQuantity, setXsuQuantity] = useState(0);
    const [xsQuantity, setXsQuantity] = useState(0);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const getProducts = async () => {
        const response = await products();
        setXsuPrice(response[0].price);
        setXsPrice(response[1].price);
        if(email){
            const response = await profile(email);
            if(response.error) {
                return;
            }
            setName(response.fullName);
            setAddress(response.address);
        }
    }


    

    useLayoutEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const cc_format = (value) => {
        if (value.length < 19 && (value.length === 5 || value.length === 10 || value.length === 15)) {
            value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
            return value;
        } else {
            return value;
        }
    }

    const checkDigit = (value) => {
        value = value.replace(/[^\d ]/g, '');
        return value;
    }


    useEffect(() => {
        const preTotal = (Math.round(((xsPrice * xsQuantity) + (xsuPrice * xsuQuantity)) * 100) / 100).toFixed(2);
        setSubTotal(preTotal);
        setTotal((Math.round((preTotal * 1.2) * 100) / 100).toFixed(2));
    },[xsPrice, xsQuantity, xsuPrice, xsuQuantity])

    const handleSubmit = async (e) => {

        if (total <= 0) {
            setAlertMessage("Please select the quantity of the items you want to purchase")
        } else if (!name) {
            setAlertMessage("Please enter the card holder name");
        } else if (!address) {
            setAlertMessage("Please enter your address")
        } else if (!cardNumber) {
            setAlertMessage("Please enter your card number")
        } else if (cardNumber.length < 19) {
            setAlertMessage("Please enter a valid card number")
        } else if (!month || !year) {
            setAlertMessage("Please enter the expiration date")
        } else if ((Number(month) > 12)) {
            setAlertMessage("Please enter a valid expiration date")
        } else if (!cvv) {
            setAlertMessage("Please enter your cvv")
        } else if (cvv.length < 3) {
            setAlertMessage("Please enter a valid cvv")
        } else {
            setAlertMessage("");
            const currentDate = new Date().getTime();
            const arrival = new Date(currentDate + (10 * (24 * 60 * 60 * 1000))).toLocaleString("en-US");
            const orderID = uuidv4();
            let products = "";
            if (xsuQuantity > 0) products = `${products}AXION XS ULTRA (${xsuQuantity} units)`;
            if (xsQuantity > 0 && products) products = `${products}, AXION XS (${xsQuantity} units)`;
            if (xsQuantity > 0 && !products) products = `${products}AXION XS (${xsQuantity} units)`
            const order = {
                orderID,
                email,
                products,
                address,
                arrival,
                totalCost: total
            }
            await addOrder(order)
            props.handlePurchaseChange(orderID);
        }


    }


    const handleCardChange = (e) => {
        const value = e.target.value;
        const firstCheck = checkDigit(value);
        const secondCheck = cc_format(firstCheck);
        setCardNumber(secondCheck);
    }

    return (
        <section className="h-100 h-custom bg-secondary-dark">
            <div id="checkout section" className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4 text-white bg-secondary-dark">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="h4 text-white">Shopping cart</p>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-md-flex justify-content-md-between">
                                                    <div className="d-md-flex flex-md-row align-items-center">
                                                        <div>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                className="Image-fluid rounded-3"
                                                                alt="Shopping item"
                                                                style={{ width: 65 }}
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h5 >
                                                                AXION XS ULTRA
                                                                <br />
                                                            </h5>
                                                            <p
                                                                className="small mb-0 text-secondary"

                                                            >
                                                                256 GB, White
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center col-md-3">
                                                        <div>
                                                            <input
                                                                type="number"
                                                                className="form-control text-dark"
                                                                id="input1"
                                                                defaultValue={0}
                                                                min={0}
                                                                onKeyDown={(evt) => (!(/[0-9]+/.test(evt.key)) && evt.key !== "Backspace") && (evt.preventDefault())}
                                                                onChange={(e) => setXsuQuantity(e.target.value)}

                                                            />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0 xsu-price">${xsuPrice}</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <i className="fas fa-trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-md-flex justify-content-md-between">
                                                    <div className="d-md-flex flex-md-row align-items-md-center">
                                                        <div>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                className="Image-fluid rounded-3"
                                                                alt="Shopping item"
                                                                style={{ width: 65 }}
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h5 >
                                                                AXION XS
                                                                <br />
                                                            </h5>
                                                            <p
                                                                className="small mb-0 text-secondary"

                                                            >
                                                                128 GB, Black
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center col-md-3">
                                                        <div >
                                                            <input
                                                                type="number"
                                                                className="form-control text-dark"
                                                                id="input1"
                                                                defaultValue={0}
                                                                onKeyDown={(evt) => (!(/[0-9]+/.test(evt.key)) && evt.key !== "Backspace") && (evt.preventDefault())}
                                                                min={0}
                                                                onChange={(e) => setXsQuantity(e.target.value)}
                                                            />
                                                        </div>
                                                        <div style={{ width: 80 }}>
                                                            <h5 className="mb-0 xs-price">${xsPrice}</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <i className="fas fa-trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card bg-light text-dark rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0 h4">Card details</h5>
                                                </div>
                                                <form className="mt-4">
                                                    <div className=" mb-4">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="typeName"
                                                            required=""
                                                        >
                                                            Cardholder&apos;s Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="typeName"
                                                            className="form-control form-control-lg"
                                                            size={17}
                                                            placeholder="John Smith"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />

                                                    </div>
                                                    <div className=" mb-4">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="typeName"
                                                            required=""
                                                        >
                                                            Delivery Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="typeAddress"
                                                            className="form-control form-control-lg"
                                                            placeholder="123 Main Street, Anytown, USA 12345"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />

                                                    </div>
                                                    <div className="mb-4">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="typeCard"
                                                            required=""
                                                        >
                                                            Card Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            pattern="[0-9.]+"
                                                            id="typeCard"
                                                            className="form-control form-control-lg"
                                                            size={17}
                                                            minLength={19}
                                                            maxLength={19}
                                                            placeholder='1234 1234 1234 1234'
                                                            onChange={(handleCardChange)}
                                                            value={cardNumber}

                                                        />

                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div>
                                                                <label className="form-label" htmlFor="typeExp">
                                                                    Expiration
                                                                </label>
                                                                <div className="d-flex justify-content-center">
                                                                    <input
                                                                        type="text"
                                                                        id="typeExp"
                                                                        className="form-control "
                                                                        placeholder="MM"
                                                                        size={2}
                                                                        minLength={2}
                                                                        maxLength={2}
                                                                        required=""
                                                                        value={month}
                                                                        onChange={(e) => setMonth(checkDigit(e.target.value))}
                                                                    />
                                                                    <p className="m-auto ps-2 pe-2"> / </p>
                                                                    <input
                                                                        type="text"
                                                                        id="typeExp"
                                                                        className="form-control "
                                                                        placeholder="YY"
                                                                        size={2}
                                                                        minLength={2}
                                                                        maxLength={2}
                                                                        required=""
                                                                        value={year}
                                                                        onChange={(e) => setYear(checkDigit(e.target.value))}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div >
                                                                <label className="form-label" htmlFor="typeText">
                                                                    CVV
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="typeText"
                                                                    className="form-control "
                                                                    placeholder="●●●"
                                                                    size={1}
                                                                    minLength={3}
                                                                    maxLength={3}
                                                                    required=""
                                                                    value={cvv}
                                                                    onChange={(e) => setCvv(checkDigit(e.target.value))}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">${subTotal}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping & Taxes</p>
                                                    <p className="mb-2">${(Math.round((subTotal * 0.20) * 100) / 100).toFixed(2)}</p>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-2"><strong>Total</strong></p>
                                                    <p className="mb-2"><strong>${total}</strong></p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-dark btn-outline-light"
                                                    onClick={handleSubmit}
                                                >
                                                    <div className="d-flex justify-content-between">
                                                        <span>
                                                            Checkout
                                                            <i className="fas fa-long-arrow-alt-right ms-2" />
                                                        </span>
                                                    </div>
                                                </button>
                                                <div id="Alert message" className="text-danger text-center">
                                                    <p id="alert">{alertMessage}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Checkout;