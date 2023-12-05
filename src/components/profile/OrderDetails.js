
import React from 'react';



const OrderDetails = ({order}) => {


    return (
        <div className="container py-5 bg-dark-light">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-4 h-100">
                        <div className="card-body">
                            <h4 className="my-3 mb-10">Order {order.orderID}</h4>                      
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Items purchased</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{order.products}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Delivery Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{order.address}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Estimated date of delivery</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{order.arrival.substring(0, order.arrival.indexOf(","))}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Total</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">${order.totalCost}</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OrderDetails;