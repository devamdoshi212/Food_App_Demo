import { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalBootstrap = (props) => {
  const ModalFooter = (
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      {props.hasitems && (
        <Button variant="success" onClick={props.orderHandler}>
          Order
        </Button>
      )}
    </Modal.Footer>
  );
  return (
    <Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!props.hasitems && <h3>Your Cart is Empty.</h3>}
          {props.content}
          {props.hasitems && props.children}
        </Modal.Body>
        {!props.isCheckingOut && ModalFooter}
      </Modal>
    </Fragment>
  );
};
export default ModalBootstrap;
