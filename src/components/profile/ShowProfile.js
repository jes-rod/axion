import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { profile } from '../../api/api';
import Cookies from 'universal-cookie';
const cookies = new Cookies()

const ShowProfile = (props) => {

    const user = props.user;

    const handleEdit = (e) => {
        props.changeEdit(true);
    }

    return (
        <div className="col-lg-8">
            <div id="profileInfo" className="card ">
                <div  className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.name}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Password</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0"><em>Click "Edit profile" to change your password</em></p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.phone}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.address}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4">
                            <button className="btn btn-secondary btn-sm" onClick={handleEdit}>Edit profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ShowProfile;