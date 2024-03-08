import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';
import Spinner from 'react-bootstrap/Spinner';




const CustomModal = ({ showModal, handleClose }) => {
    const [state, handleSubmit] = useForm("xdoqgwjy");
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation
        const formElements = e.target.elements;
        let hasErrors = false;

        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];

            if (element.required && element.value.trim() === "") {
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    [element.name]: "This field is required.",
                }));
                hasErrors = true;
            }
        }

        if (hasErrors) {
            // Stop form submission if there are validation errors
            return;
        }

        setLoading(true);

        // Wait for the form submission to complete
        await handleSubmit(e);

        setLoading(false);

        if (state.succeeded) {
            // Display a browser notification
            if (Notification.permission === "granted") {
                new Notification('Thanks for selling with us!');
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification('Thanks for selling with us!');
                    }
                });
            }
        }

        // Close the modal after successful submission
        handleClose();
    };


    return (
        <Modal show={showModal} onHide={handleClose} className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    Receive Your Free Cash Offer TODAY!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formHowQuickly">
                        <Form.Label>How quickly are you looking to sell? *</Form.Label>
                            <Form.Select name="HowQuick" id="HowQuick" aria-label="How quickly are you looking to sell?">
                            <option>Select option</option>
                            <option value="1">1 to 2 Months</option>
                            <option value="2">2 to 4 Months</option>
                            <option value="3">No Set Time</option>
                            <option value="4">Just want to get a valuation</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forSelling">
                        <Form.Label>What is the reason for selling? *</Form.Label>
                        <Form.Control type="text" name="Reason" id="Reason" placeholder="Reason for selling" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forEstimated">
                        <Form.Label>Estimated value of your property *</Form.Label>
                        <Form.Control type="number" name="EstimatedValue" id="EstimatedValue" placeholder="Estimated value" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forMortage">
                        <Form.Label>What is your outstanding mortgage? *</Form.Label>
                        <Form.Control type="number" name="OutstandingMortgage" id="OutstandingMortgage" placeholder="If no mortgage, please add 0" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forProperty">
                        <Form.Label>Do you have a secured loan/s on this property? *</Form.Label>
                        <Form.Control type="number" name="ExistingLoan" id="ExistingLoan" placeholder="If so, add amount. If not, add 0" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forOblibation">
                        <Form.Label>Are you happy for us to contact you for a no obligation informal chat? *</Form.Label>
                        <Form.Select name="Obligation" id="Obligation" aria-label="Default select example">
                            <option>Select option</option>  
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forName">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control name="FullName" id="FullName" type="text" placeholder="Fullname" />
                        <ValidationError prefix="FullName" field="FullName" errors={state.errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forPhone">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control name="Phone" id="Phone" type="text" placeholder="Phone number" />
                        <ValidationError prefix="Phone" field="Phone" errors={state.errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control name="Email" id="Email" type="email" placeholder="Email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address of property *</Form.Label>
                        <Form.Control name="Address" id="Address" type="text" placeholder="Address" />
                        <ValidationError prefix="Address" field="Address" errors={state.errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City *</Form.Label>
                        <Form.Control name="City" id="City" type="city" placeholder="City" />
                        <ValidationError prefix="City" field="City" errors={state.errors}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPostalCode">
                        <Form.Label>Postal code *</Form.Label>
                        <Form.Control name="PostCode" id="PostCode" type="text" placeholder="Postal code" />
                        <ValidationError prefix="PostCode" field="PostCode" errors={state.errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTermsAndConditions">
                        <Form.Check
                            type="checkbox"
                            label="I agree to the Terms and Conditions"
                            name="TermsAndConditions"
                            id="termsAndConditions"
                            required
                        />
                        <Form.Text className="text-muted">
                            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
                        </Form.Text>
                    </Form.Group>

                    {/* Display validation errors */}
                    {Object.keys(validationErrors).map((fieldName) => (
                        <p key={fieldName} className="text-danger">
                            {validationErrors[fieldName]}
                        </p>
                    ))}

                    <div className="d-grid gap-2">
                        <Button type="submit" disabled={state.submitting} variant="secondary" className="custom-submit-button" size="lg">
                            {loading ? (
                                <>
                                    <Spinner animation="border" size="sm" className="me-2" />
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
