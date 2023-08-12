import { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalBootstrap from "./ModalBootstrap";
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBootstrap
          title={props.title}
          content={props.content}
          handleClose={props.hide}
        >
          {props.children}
        </ModalBootstrap>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};
export default Modal;
