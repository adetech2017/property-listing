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
                            Unlock the potential of your property sale with our expert assistance. We specialize in maximizing your selling experience, 
                            offering personalized solutions that ensure a seamless and profitable transaction.
                        </p>

                        <ul className="about-list">

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Stop Repossession</p>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Relocation</p>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Broken Chain</p>
                            </li>

                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Probate</p>
                            </li>
                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Financial Difficulties </p>
                            </li>
                            <li className="about-item">
                                <ion-icon name='checkmark-circle'></ion-icon>
                                <p className="about-item-text">Divorce</p>
                            </li>

                        </ul>

                        <p className="callout">
                            Trust us to navigate the complexities, strategically market your property, and secure a swift, top-dollar sale. Your selling journey begins here, where your goals become our mission.
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
