'use client'
import './Profile.css'
import React, { useLayoutEffect } from 'react';
import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';
import OrderDetails from './OrderDetails';
import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { getOrders, profile } from '../api/api';



const Profile = () => {
    const cookies = useCookies();
    const email = cookies.get("email");
    const [editProfile, setEditProfile] = useState(false);
    const [orders, setOrders] = useState([]);
    const [orderFlag, setOrderFlag] = useState(false);
    const [order, setOrder] = useState({});
    const [user, setUser] = useState({});
    const [loadingFlag, setLoadingFlag] = useState(true);

    const handleEdit = (state, flag) => {
        setEditProfile(state);
        if(!flag){
            fetchOrdersProfile();
        }
    }

    const handleOrder = (e) => {
        const selectedOrder = orders.find((order) => order.orderID === e.target.value);
        setOrder(selectedOrder);
        setOrderFlag(true);
    }

    const showOrders = () => {
        if (orders.length > 0) {
            return orders.map((order) => {
                return <input type="text" className="col-9 text-primary" key={order.orderID} onClick={handleOrder} style={{ cursor: "pointer", outline: "none", border: "none" }} value={order.orderID} readOnly />
            })
        }
    }

    const fetchOrdersProfile = async () => {
        const orders = await getOrders(email);
        setOrders(orders);
        if (email) {
            const response = await profile(email);
            if (response.error) {
                return;
            }
            setUser({
                name: response.fullName,
                email: email,
                phone: response.phone,
                address: response.address
            })
            setLoadingFlag(false);
        }

    }

    useLayoutEffect(() => {
        fetchOrdersProfile();
    }, [])

    return (
        <div className="profile">
            {
                loadingFlag &&
                <div id="loading" className="bg-secondary-dark text-center">
                    <img alt="loading icon" className="h3 text-white p-5" height="100" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" />
                </div>
            }
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 bg-dark-light">
                    <div className="row">
                        {editProfile ? <EditProfile changeEdit={handleEdit} /> : <ShowProfile user={user} changeEdit={handleEdit} />}
                        <div className="col-lg-4">
                            <div className="card mb-4 h-100">
                                <div className="card-body text-center" style={{height:"370px"}}>
                                    <h4 className="my-3">Your orders</h4>
                                    <div style={{overflowY: "scroll", position:"relative", height:"300px"}}>
                                        {
                                            showOrders()
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {orderFlag ? <OrderDetails order={order} /> : <></>}
            </section>
        </div>
    )

}

export default Profile;