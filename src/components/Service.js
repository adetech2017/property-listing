import React from 'react';

const Service = () => {
    return (
        <section className="service" id="service">
            <div className="container">

                <p className="section-subtitle">Our Services</p>

                <h2 className="h2 section-title">SAGESTONES vs Estate Agents</h2>
                <p className="text-center" style={{ marginTop: '0' }}>
                    Discover why choosing us means a FASTER, more EFFICIENT, and ULTIMATELY more personalised selling experience. We in SAGESTONES have innovative strategies, that redefines the selling process to maximise your property's potential. Make an informed choice for a seamless and rewarding sale with SAGESTONES.
                </p>


                <div className="service-list">
                    <li>
                        <div className="service-card">
                            <h3>Estate Agents</h3>
                            <ul>
                                <li className="about-item">6-12 months to find a buyer</li>
                                <li className="about-item">Sale may fall through at any point</li>
                                <li className="about-item">Agent commissions and hidden fees</li>
                                <li className="about-item">Requires renovation</li>
                                <li className="about-item">Deal with stock in chains</li>
                                <li className="about-item">No privacy with boards and listings</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="service-card">
                            <h3>SAGESTONES</h3>
                            <ul>
                                <li className="about-item">We guarantee firm offer within 24 hours</li>
                                <li className="about-item">We guarantee quick completion</li>
                                <li className="about-item">No fees at all when you are selling to us</li>
                                <li className="about-item">We buy houses in any condition</li>
                                <li className="about-item">No selling chain at all</li>
                                <li className="about-item">No renovations </li>
                                <li className="about-item">Fully confidential, and no Estate agent</li>
                            </ul>
                        </div>
                    </li>
                </div>

            </div>
        </section>
    );
}

export default Service;
