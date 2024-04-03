import React from 'react';

const Order = (props) => {

    return (
        <section className="h-100 h-custom bg-secondary-dark">
            <div className="card bg-light text-dark rounded-3 p-10">
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center mb-10">
                        <h5 className="mb-0 h4">Purchase completed successfully</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <p className="h5">Your order has been placed under number {props.orderNumber}</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <p className="h5">Check your profile to review the details of your order</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Order;