'use client'
import React, {useState} from 'react';
import EyeClosed from '@/components/global/EyeClosed';
import EyeOpen from '@/components/global/EyeOpen';
import { useCookies } from 'next-client-cookies';
import { checkPassword, update } from '../api/api';



const EditProfile = (props) => {
    const cookies = useCookies();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [alertMessage, setAlertMessage] = useState("");
    const [viewOldPassword, setViewOldPassword] = useState(false)
    const [viewNewPassword, setViewNewPassword] = useState(false)

    const userEmail = cookies.get("email");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {name, email, password: "", address, phone};
        if(!email) user.email = userEmail;
        if(oldPassword){
            const response = await checkPassword({email: user.email, password: oldPassword});
            if(response.success && newPassword){
                user.password = newPassword;
            }else if(response.success && !newPassword){
                setAlertMessage("Enter your new password");
                return;
            }else if(response.error){
                setAlertMessage("The password you entered doesn't match with your current one");
                return;
            }
        }
        const response = await update(user);
        if(response.error) {
            setAlertMessage(response.error.response.data);
            return;
        }
        document.location.reload(true);
        props.changeEdit(false);
        return;

    }

    const handleCancel = (e) => {
        e.preventDefault();
        props.changeEdit(false);
    }

    const changeOldPassword = () => {
        let x = document.getElementById("oldpassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        setViewOldPassword(!viewOldPassword);
    }

    const changeNewPassword = () => {
        let x = document.getElementById("newpassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        setViewNewPassword(!viewNewPassword);
    }

    return (
        <div className="col-lg-8">
            <div id="profileInfo" className="card mb-4">
                <form className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <input type='text' id="fullName" className="text-muted mb-0" placeholder='Enter full name' onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <input type='text' id="email" className="text-muted mb-0" placeholder='Enter email address' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Password</p>
                        </div>
                        <div className="col-sm-3">
                            <input id="oldpassword" type={viewOldPassword ? "text" : "password"} className="text-muted mb-0 col-sm-12" placeholder='Old password' onChange={(e) => setOldPassword(e.target.value)}/>
                        </div>
                        <div className="col-sm-1">
                            {viewOldPassword ? <EyeClosed setViewPassword={changeOldPassword} /> : <EyeOpen setViewPassword={changeOldPassword} />}
                        </div>
                        <div className="col-sm-3">
                            <input id="newpassword" type={viewNewPassword ? "text" : "password"} className="text-muted mb-0 col-sm-12" placeholder='New password' onChange={(e) => setNewPassword(e.target.value)}/>
                        </div>
                        <div className="col-sm-1">
                            {viewNewPassword ? <EyeClosed setViewPassword={changeNewPassword} /> : <EyeOpen setViewPassword={changeNewPassword} />}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <input id="phone" type='text' className="text-muted mb-0" placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0 fw-bold">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <input id="address" type='text' className="text-muted mb-0" placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="text-secondary opacity-75"><em>Any field left blank will not be modified</em></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="text-danger">{alertMessage}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button className="btn btn-secondary btn-sm" type="submit" onClick={handleSubmit}>Save changes</button>
                        </div>
                        <div className="col-sm-4">
                            <button id ="cancelBtn" className="btn btn-secondary-light btn-sm" type='submit' onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default EditProfile;