import React from 'react';

const Service = () => {
    return (
        <section className="service" id="service">
            <div className="container">

                <p className="section-subtitle">Our Services</p>

                <h2 className="h2 section-title">SAGESTONES vs Estate Agents</h2>
                <p className="text-center" style={{ marginTop: '0' }}>
                    Curious about the best approach to sell your property? Explore the SAGESTONES advantage against traditional estate agents in our Ultimate Comparison. Discover why choosing us means a faster, more efficient, and ultimately more lucrative selling experience. From personalized attention to innovative strategies, find out how SAGESTONES redefines the selling process to maximize your property's potential. Make an informed choice for a seamless and rewarding sale with SAGESTONES.
                </p>


                <div className="service-list">
                    <li>
                        <div className="service-card">
                            <h3>Estate Agents</h3>
                            <ul>
                                <li className="about-item">6-12 months to find a buyer</li>
                                <li className="about-item">Sale may fall through at any point</li>
                                <li className="about-item">Agent commissions and hidden fees</li>
                                <li className="about-item">Requires renovation and constant</li><li className="about-item">cleaning</li>
                                <li className="about-item">Deal with selling chains</li>
                                <li className="about-item">No privacy with boards and listings</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="service-card">
                            <h3>Benefits of Selling to SAGESTONES</h3>
                            <ul>
                                <li className="about-item">We guarantee firm offer within 24 hours</li>
                                <li className="about-item">We guarantee quick completion</li>
                                <li className="about-item">No fees at all when you are selling to us</li>
                                <li className="about-item">We buy houses in any condition</li>
                                <li className="about-item">No selling chain at all</li>
                                <li className="about-item">Hassle-free with no renovations, </li><li className="about-item">fully confidential, and no Estate agent ‘For Sale’ boards</li>
                            </ul>
                        </div>
                    </li>
                </div>

            </div>
        </section>
    );
}

export default Service;
