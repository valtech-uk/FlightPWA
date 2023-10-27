import React, { useState } from 'react';
import logo from './logo.svg';
import blueSkyImage from './blueskies.jpg';

const LandingPage: React.FC = () => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const toggleRegistrationModal = () => {
        setIsRegistrationModalOpen(!isRegistrationModalOpen);
    };

    const handleRegisterClick = () => {
        toggleRegistrationModal();
    };

    const handleLoginClick = () => {
        // Handle login logic
    };

    const handleCancelClick = () => {
        toggleRegistrationModal(); // Close the modal when "Cancel" is clicked
    };

    return (
        <div className="landing-page" style={{ backgroundImage: `url(${blueSkyImage})` }}>
            <img src={logo} alt="easyJet Logo" className="logo" />
            <div className="button-container">
                <button className="register-btn" onClick={handleRegisterClick}>Register</button>
                <button className="login-btn" onClick={handleLoginClick}>Login</button>
            </div>

            {isRegistrationModalOpen && (
                <div className="registration-modal">
                    <div className="modal-content">
                        <h2>Register</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="flightNumber">Flight Number:</label>
                                <input type="text" id="flightNumber" name="flightNumber" />
                            </div>
                            <div className="button-container">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={handleCancelClick}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
