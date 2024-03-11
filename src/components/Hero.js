import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import CustomModal from './CustomModal';


const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    return (
        <>
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        {/* <p className="hero-subtitle">
                            <ion-icon name="home"></ion-icon>
                            <span>Real Estate Agency</span>
                        </p> */}
                        <h2 className="h1 hero-title">Are you fed up with Estate Agent?</h2>

                        <h3 className="h1 hero-titlet">
                            We Buy Houses Fast!
                        </h3>
                        
                        <Button as="a" className="btn cta-btn btn-danger" onClick={handleShow}>
                            Get Offer
                        </Button>
                    </div>

                    <figure className="hero-banner">
                        <img src="./assets/images/hero-banner1.png" alt="Modern house model" className="w-100" />
                    </figure>

                </div>
            </section>
            {/* Use CustomModal component */}
            <CustomModal showModal={showModal} handleClose={handleClose} />
        </>
        
        
    );
}

export default Hero;
