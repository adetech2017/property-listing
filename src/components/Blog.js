import React from 'react';





const Blog = () => {
    return (
        <section className="property" id="property">
            <div className="container">
                {/* <p className="section-subtitle">News & Blogs</p> */}
                <h2 className="h2 section-title">How To Sell A House Fast</h2>

                <div className="blog-card">
                    <h3 className="text-center">Selling Your Property: A Stress-Free Process</h3>

                    <div className="blog-content">
                        <h3>Step 1: Fill In the Enquiry Form</h3>
                        <p style={{ margin: '10px 0' }}>
                            As soon as you’ve told us the few simple things we need to know, we’ll look into the house value. We don’t need to visit the house at this stage. We use our valuation software, linked to a housing market database and our extensive knowledge and experience of the industry. We’ll find what the property’s real value is in the current market.
                        </p>

                        <h3>Step 2: Receive Your Cash Offer</h3>
                        <p style={{ margin: '10px 0' }}>
                            We’ll be in touch with the best possible cash offer we are able to make for your house within 24 hours.
                        </p>

                        <h3>Step 3: We’ll Do The Rest Of The Work!</h3>
                        <p style={{ margin: '10px 0' }}>
                            Once you accept our offer, two things will happen:
                            <ol>
                                <li style={{ margin: '10px 0' }}>1). We’ll appoint an independent solicitor who specialises in cash fast sales to act for you.</li>
                                <li>2). We’ll organise for qualified RICS surveyors to value your property – at own cost. We will share their feedback with you, and complete the sale quickly, subject to satisfiy valuation at our own cost.</li>
                            </ol>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Blog;
