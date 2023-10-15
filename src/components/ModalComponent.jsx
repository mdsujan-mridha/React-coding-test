import React, { Fragment } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal, title, data }) => {
    return (
        <Fragment>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <h2>{title}</h2>
                {/* fetch all data here  */}
                {/* but i don't find any data on you api  */}

            </Modal>
        </Fragment>
    );
};

export default ModalComponent;