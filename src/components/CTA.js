import React from 'react';
//import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import CustomModal from './CustomModal';



const CTA = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <section className="cta">
                <div className="container">

                    <div className="cta-card">
                        <div className="card-content">
                            <h2 className="h2 card-title"> ⁠Don’t let your property hold you down</h2>

                            <p className="card-text">⁠⁠Looking to travel abroad and spend time with your family.</p>

                            <h3 className="card-text">£500 cash for referrals that we successfully complete on.</h3>

                            <button className="btn cta-btn" onClick={handleShow}>
                                <span>Get offer Now</span>

                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </button>
                        </div>

                        <figure className="about-banner">
                            <img src="./assets/images/cta-image.png" alt="House interior" />
                        
                        </figure>
                    </div>
                </div>
            </section>
            {/* Use CustomModal component */}
            <CustomModal showModal={showModal} handleClose={handleClose} />
        </>
    );
}

export default CTA;
