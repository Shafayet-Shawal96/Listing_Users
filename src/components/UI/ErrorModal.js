import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  const okayHandler = (e) => {
    props.updateError(false);
  };
  return <div className={classes.backdrop} onClick={okayHandler} />;
};

const ModalOverlay = (props) => {
  const okayHandler = (e) => {
    props.updateError(false);
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={okayHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop updateError={props.updateError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          updateError={props.updateError}
        />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default ErrorModal;
