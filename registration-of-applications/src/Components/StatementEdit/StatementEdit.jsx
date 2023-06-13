import React from "react";
import s from './statementEdit.module.sass';
import {Modal, Button} from "react-bootstrap";
import {useNavigate, useParams} from "react-router";

const StatementEdit = (props) => {

    return(
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body> Woohoo, you are reading this text in a modal! </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default StatementEdit;