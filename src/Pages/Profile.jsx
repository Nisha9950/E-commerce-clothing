import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
// import defaultprofile from "../assets/defaultprofile.png";


import "./CSS/Profile.css";

const Profile = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user")); 
    const loggedInEmail = storedUser?.email || ""; 

    const [userData, setUserData] = useState({
        email: loggedInEmail, 
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        pinCode: "",
        phone: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("checkoutForm")) || {};
        const savedProfilePic = localStorage.getItem("profilePic");

        setUserData((prev) => ({
            ...prev,
            ...savedData,
            email: loggedInEmail 
        }));

        if (savedProfilePic) setProfilePic(savedProfilePic);
    }, [loggedInEmail]);

    const validateForm = () => {
        let newErrors = {};

        if (!/^[A-Za-z]+$/.test(userData.firstName)) {
            newErrors.firstName = "First Name must contain only letters.";
        }

        if (!/^[A-Za-z]+$/.test(userData.lastName)) {
            newErrors.lastName = "Last Name must contain only letters.";
        }

        if (!/^[A-Za-z]+$/.test(userData.city)) {
            newErrors.city = "City must contain only letters.";
        }

        if (!/^\d{6}$/.test(userData.pinCode)) {
            newErrors.pinCode = "Pin Code must be exactly 6 digits.";
        }

        if (!/^\d{10}$/.test(userData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        let updatedValue = value;
        let newErrors = { ...errors };

        if (name === "firstName" || name === "lastName" || name === "city") {
            if (!/^[A-Za-z]*$/.test(value)) {
                newErrors[name] = `${name.replace(/([A-Z])/g, " $1")} must contain only letters!`;
            } else {
                delete newErrors[name];
            }
        }

        if (name === "pinCode" && !/^\d{0,6}$/.test(value)) {
            newErrors.pinCode = "Pin Code must be exactly 6 digits.";
        } else {
            delete newErrors.pinCode;
        }

        if (name === "phone" && !/^\d{0,10}$/.test(value)) {
            newErrors.phone = "Phone number must be exactly 10 digits.";
        } else {
            delete newErrors.phone;
        }

        setErrors(newErrors);
        setUserData((prevData) => ({ ...prevData, [name]: updatedValue }));
    };

    const saveProfile = () => {
        if (validateForm()) {
            localStorage.setItem("checkoutForm", JSON.stringify(userData));
            setIsEditing(false);
        }
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
                localStorage.setItem("profilePic", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`profile-sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={onClose} style={{ width: '50px', height: '50px' }}>X</button>

            <div className="profile-section">
                <h2>Profile</h2>
                <div className="profile-pic-container">
                    <img src={profilePic ? profilePic:" defaultprofile.jpg"} alt="Profile" className="sidebar-profile-pic" />
                    <input type="file" accept="image/*" id="fileInput" onChange={handleProfilePicChange} style={{ display: "none" }} />
                    <button className="camera-icon" onClick={() => document.getElementById("fileInput").click()} style={{ width: '30px', height: '30px' }}>
                        <FaCamera />
                    </button>
                </div>
                <p className="full-name">{userData.firstName} {userData.lastName}</p> 
                <p className="email">{userData.email}</p>
            </div>

            {isEditing ? (
                <div className="edit-form">
                  

                    {["firstName", "lastName", "address", "city", "pinCode", "phone"].map((field) => (
                        <div key={field}>
                            <input
                                type="text"
                                name={field}
                                value={userData[field] || ""}
                                onChange={handleChange}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                className="input-field"
                            />
                            {errors[field] && <p className="error-text">{errors[field]}</p>}
                        </div>
                    ))}
                    <button className="save-button" onClick={saveProfile}>Save</button>
                </div>
           ) : Object.values(userData).some(value => value) ? (
            
                <div className="profile-details">
                  
                    {Object.entries(userData).map(([key, value]) => (
                        key !== "firstName" && key !== "lastName" && key !== "email"&&(
                            <p key={key} style={{margin:'10px 0px'}}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
                        )
                    ))}
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <p className="no-data-text">No data available</p>
            )}
        </div>
    );
};

export default Profile;





























