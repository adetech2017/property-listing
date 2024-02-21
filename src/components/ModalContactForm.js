import React, { useState } from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm';




function ModalContactForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <ContactForm closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default ModalContactForm;
