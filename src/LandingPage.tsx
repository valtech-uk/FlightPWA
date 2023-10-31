import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import FlightDetails from './FlightDetails';
import logo from './logo.svg';
import blueSkyImage from './blueskies.jpg';

const LandingPage = () => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const toggleRegistrationModal = () => {
        setIsRegistrationModalOpen(!isRegistrationModalOpen);
    };

    const navigate = useNavigate();

    const handleRegistrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Replace 'lastName' and 'flightNumber' with the actual values entered by the user
      //  const lastName = 'UserLastName'; // Replace with actual value
     //   const flightNumber = 'Flight123'; // Replace with actual value

        navigate('/flight-details');
    };

    return (
        <div className="landing-page" style={{ backgroundImage: `url(${blueSkyImage})` }}>
            <img src={logo} alt="easyJet Logo" className="logo" />
            <div className="button-container">
                <button className="register-btn" onClick={toggleRegistrationModal}>
                    Register
                </button>
                <button className="login-btn" onClick={toggleRegistrationModal}>
                    Login
                </button>
            </div>

            {isRegistrationModalOpen && (
                <div className="registration-modal">
                    <div className="modal-content">
                        <h2>Registration Form</h2>
                        <form onSubmit={handleRegistrationSubmit}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required />

                            <label htmlFor="flightNumber">Flight Number:</label>
                            <input type="text" id="flightNumber" name="flightNumber" required />

                            <div className="button-container">
                                <button type="submit" className="register-btn">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="login-btn"
                                    onClick={toggleRegistrationModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
