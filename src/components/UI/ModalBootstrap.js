import { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalBootstrap = (props) => {
  return (
    <Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.content}
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          {props.hasitems && (
            <Button variant="success" onClick={props.handleClose}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default ModalBootstrap;
