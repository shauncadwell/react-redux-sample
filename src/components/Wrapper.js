// Will wrap the App.js to provide snackbar to every page.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { closeSnackbar } from "../functions/reduxStateFunctions";

const Wrapper = ({ children, open, severity, message, closeSnackbar }) => {
  function handleClose() {
    closeSnackbar();
  }

  return (
    <>
      {children}
      <Snackbar open={open} autoHideDuration={2000} onClick={handleClose}>
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  open: state.snackbar.open,
  message: state.snackbar.message,
  severity: state.snackbar.severity,
});

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  severity: PropTypes.string.isRequired,
};

Wrapper.defaultProps = { message: "" };

export default connect(mapStateToProps, { closeSnackbar })(Wrapper);
