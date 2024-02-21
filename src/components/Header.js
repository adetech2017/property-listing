import React from 'react';
import { useState } from 'react';
import CustomModal from './CustomModal';




const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <header className="header" data-header>

                <div className="overlay" data-overlay></div>

                <div className="header-top">
                    <div className="container">
                        <ul className="header-top-list">
                            <li>
                                <a href="mailto:info@sagestones.com" className="header-top-link">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <span>info@sagestones.com</span>
                                </a>
                            </li>
                        </ul>

                        <div className="wrapper">
                            <button className="header-top-btn" onClick={handleShow}>Sell Now</button>
                        </div>
                    </div>
                </div>

                <div className="header-bottom" style={{ backgroundColor: 'red' }}>
                    <div className="container">
                        <a href="/" className="logo">
                            <img src="./assets/images/logo2.png" alt="SageStones logo" />
                        </a>
                    </div>
                </div>

            </header>
            {/* Use CustomModal component */}
            <CustomModal showModal={showModal} handleClose={handleClose} />
        </>

        
    );
}

export default Header;
