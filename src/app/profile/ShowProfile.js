import React from 'react';

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
                            <p className="mb-0 fw-bold">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.name}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Password</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0"><em>Click &quot;Edit profile&quot; to change your password</em></p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{user.phone}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Address</p>
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