import React, { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [confirmEmail,setConfirmEmail] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [newUsername,setNewUsername] = useState('');
    const [college,setCollege] = useState(''); // add handler functions for these two
    const [yrsInPrgm,setYrsInPrgm] = useState(''); //
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value)
    }

    const handleConfrimEmail = (event) => {
        setConfirmEmail(event.target.value)
    }

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleNewUsername = (event) => {
        setNewUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || userEmail.trim() === '' || 
        confirmEmail.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '' || newUsername.trim() === '') {
            setErrorMessage('Please fill out all fields to register');
            return;
        }

        console.log('Successful Registration')
    };

    return (
    <div>
        <h2>Register</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* The error message appears in red color on the webpage. */}
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="fistName"
                    value={firstName}
                    onChange={handleFirstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastName}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                />
            </div>
        </form>       
    </div>
    )
}

export default Register;