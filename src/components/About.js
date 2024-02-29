import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import CustomModal from './CustomModal';



const About = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <section className="about" id="about">
                <div className="container">

                    <figure className="about-banner">
                        <img src="./assets/images/about-banner-1.png" alt="House interior" />
                        <img src="./assets/images/about-banner-2.jpg" alt="House interior" className="abs-img" />
                    </figure>

                    <div className="about-content">

                        <p className="section-subtitle">About Us</p>

                        <h2 className="h2 section-title">What We Can Help You Achieve!.</h2>

                        <p className="about-text">
                            Unlock the potential of your property sale with our expert assistance. We specialise in maximising your selling experience, 
                            offering personalised solutions that ensure a seamless and profitable transaction.
                        </p>

                        <ul className="about-list">

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#579BB1', fontSize: '20px' }}>
                                    Stop Repossession
                                </h3>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#D71313', fontSize: '20px' }}>Relocation</h3>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#ECB159', fontSize: '20px' }}>Broken Chain</h3>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#125B50', fontSize: '20px' }}>Probate</h3>
                            </li>
                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#0C359E', fontSize: '20px' }}>Financial Difficulties </h3>
                            </li>
                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <h3 className="about-item-text" style={{ textTransform: 'uppercase', color: '#FF7800', fontSize: '20px' }}>Divorce</h3>
                            </li>

                        </ul>

                        <p className="callout">
                            What ever circumstances, we have tailored solutions to help you move on with your life.
                        </p>

                        <Button as="a" variant="danger" onClick={handleShow}>
                            Get Offer
                        </Button>

                    </div>
                </div>
            </section>
            {/* Use CustomModal component */}
            <CustomModal showModal={showModal} handleClose={handleClose} />
        </>
    );
}

export default About;
