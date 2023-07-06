import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './register.css'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [confirmEmail,setConfirmEmail] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [newUsername,setNewUsername] = useState('');
    const [college,setCollege] = useState(''); // add handler functions for these three
    const [yrsInPrgm,setYrsInPrgm] = useState(''); //
    const [stuAge,setAge] = useState(''); //
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [emailError,setEmailError] = useState('');

    const navigate = useNavigate();

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

    const handleSetCollege = (event) => {
        setCollege(event.target.value)
    }

    const handleSetYrsProgram = (event) => {
        setYrsInPrgm(event.target.value)
    }

    const handleSetAge = (event) => {
        setAge(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || userEmail.trim() === '' || 
        confirmEmail.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '' || newUsername.trim() === ''
         || college.trim() === '' || yrsInPrgm.trim() === '' || stuAge.trim() === '') {
            setErrorMessage('Please fill out all fields to register');
            setSuccessMessage('');
         } else {
            setSuccessMessage('Successfully Registered!');
            setErrorMessage('');
        }

        if (newPassword.trim() !== confirmPassword.trim()) {
            setPasswordError('Passwords must match')
            setSuccessMessage('')
        } else {
            setPasswordError('')
        }

        if (userEmail.trim() !== confirmEmail.trim()) {
            setEmailError('Emails must match')
            setSuccessMessage('')
        } else {
            setEmailError('')
        }
        console.log('Successful Registration');
        navigate("/survey");
    };

    return (
    <div>
        <h2>Register</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* The error message appears in red color on the webpage. */}
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
        {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
        {emailError && <p style={{color: 'red'}}>{emailError}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    id="fistName"
                    value={firstName}
                    onChange={handleFirstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastName}
                />
            </div>
            <div>
                <label htmlFor="yrsInPrgm">Years in Say yes Buffalo: </label>
                <input
                    type="text"
                    id="yrsInPrgm"
                    value={yrsInPrgm}
                    onChange={handleSetYrsProgram}
                />
            </div>
            <div>
                <label htmlFor="stuAge">Age: </label>
                <input
                    type="text"
                    id="stuAge"
                    value={stuAge}
                    onChange={handleSetAge}
                />
            </div>
            <div>
                <label htmlFor="college">College: </label>
                <input
                    type="text"
                    id="college"
                    value={college}
                    onChange={handleSetCollege}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                />
            </div>
            <div>
                <label htmlFor="userEmail">Email: </label>
                <input
                    type = "text"
                    id = "userEmail"
                    value={userEmail}
                    onChange={handleUserEmail}
                />
            </div>
            <div>
                <label htmlFor="confirmEmail">Confirm Email: </label>
                <input
                    type = "text"
                    id = "confirmEmail"
                    value={confirmEmail}
                    onChange={handleConfrimEmail}
                />
            </div>
            <div>
                <label htmlFor="newUsername">Username: </label>
                <input
                    type = "text"
                    id = "newUsername"
                    value={newUsername}
                    onChange={handleNewUsername}
                />
            </div>
            <div>
                <label htmlFor="newPassword">Password: </label>
                <input
                    type = "password"
                    id = "newPassword"
                    value={newPassword}
                    onChange={handleNewPassword}
                />
            </div>
            <div>
                <label htmlFor="confrimPassword">Confirm Password: </label>
                <input
                    type = "password"
                    id = "confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                />
            </div>
            <button type="submit">Register!</button>
        </form>       
        <h4>Already have an account?&nbsp;
        <Link to="/login">Login</Link>
        </h4>
    </div>
    )
}

export default Register;