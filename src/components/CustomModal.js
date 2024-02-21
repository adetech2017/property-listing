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
                            <Form.Select name="how_quick" id="how_quick" aria-label="How quickly are you looking to sell?">
                            <option>Select option</option>
                            <option value="1">1 to 2 Months</option>
                            <option value="2">2 to 4 Months</option>
                            <option value="3">No Set Time</option>
                            <option value="4">Just want to get a valuation</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forSelling">
                        <Form.Label>What is the reason for selling? *</Form.Label>
                        <Form.Control type="text" name="reason" id="reason" placeholder="Reason for selling" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forEstimated">
                        <Form.Label>Estimated value of your property *</Form.Label>
                        <Form.Control type="number" name="estimated_value" id="estimated_value" placeholder="Estimated value" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forMortage">
                        <Form.Label>What is your outstanding mortgage? *</Form.Label>
                        <Form.Control type="number" name="outstanding_mortgage" id="outstanding_mortgage" placeholder="If no mortgage, please add 0" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forProperty">
                        <Form.Label>Do you have a secured loan/s on this property? *</Form.Label>
                        <Form.Control type="number" name="existing_loan" id="existing_loan" placeholder="If so, add amount. If not, add 0" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forOblibation">
                        <Form.Label>Are you happy for us to contact you for a no obligation informal chat? *</Form.Label>
                        <Form.Select name="obligation" id="obligation" aria-label="Default select example">
                            <option>Select option</option>  
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forName">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control name="name" id="name" type="text" placeholder="Fullname" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forPhone">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control name="phone" id="phone" type="text" placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control name="email" id="email" type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address of property *</Form.Label>
                        <Form.Control name="address" id="address" type="text" placeholder="Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City *</Form.Label>
                    <Form.Control name="city" id="city" type="city" placeholder="City" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPostalCode">
                        <Form.Label>Postal code *</Form.Label>
                        <Form.Control name="postcode" id="postcode" type="text" placeholder="Postal code" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button type="submit" disabled={loading} variant="secondary" className="custom-submit-button" size="lg">
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
