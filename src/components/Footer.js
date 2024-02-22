import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="faq">

            <div className="footer-top">
                <div className="container">

                    <div className="footer-content">
                        <h2 className="h2 section-title" style={{ padding: '10px' }}>Frequently Asked Questions</h2>
                        <p className="text-center" style={{ marginTop: '0' }}>Please contact us if you cannot find an answer to your question.</p>

                        <h4 style={{ margin: '10px 0' }}>Q: How fast can my house be purchased?</h4>
                        <p>
                            Subject to a satisfactory valuation, we will aim to complete between four to six weeks. We have a highly experienced team that works rapidly, and we have investors who are ready to buy your house immediately.
                        </p>

                        <h4 style={{ margin: '10px 0' }}>Q: Will I get a good price for my property?</h4>
                        <p>
                            Yes, because we will always give you the highest CASH offer based on its location and condition of your property. Remember that there are no additional costs, and you won't be required to pay agent fees.
                        </p>

                        <h4 style={{ margin: '10px 0' }}>Q: Why should I sell to you?</h4>
                        <p>
                            Our team has years of experience in real estate, and we have helped hundreds of customers to sell their homes. When selling to us, you will NOT pay any fees, which is why we are different from Estate agents.
                        </p>

                        <h4 style={{ margin: '10px 0' }}>Q: What’s the catch?</h4>
                        <p>
                            There is no catch because our aim is to provide the best solution for your situation, whether it’s a cash offer for a quick completion or an alternative solution to help you move on. While we may not be able to give you full market value for your property, we are completely transparent in our offer and we take the stress out of selling your home by ensuring a fast and smooth transaction throughout.
                        </p>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        <p>Contact Us</p>
                        <p>Call us: 0736 825 8439</p>
                        <p>Email us: info@sagestones.com </p>
                        &copy; 2024 Copyright. All Rights Reserved
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
