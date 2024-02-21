import React from 'react';
import Button from 'react-bootstrap/Button';
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
                            <h2 className="h2 card-title">Looking to sell a property?</h2>

                            <p className="card-text">We can turn your dream of selling your property into reality.</p>
                        </div>

                        <button className="btn cta-btn" onClick={handleShow}>
                            <span>Sell Properties</span>

                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </section>
            {/* Use CustomModal component */}
            <CustomModal showModal={showModal} handleClose={handleClose} />
        </>
    );
}

export default CTA;
