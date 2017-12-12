import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = (props) => (
<div className="error-modal">
  <div className="error-modal-content">
    {props.message}<br/><br/>
    <button id="ok-button" onClick={props.clickThroughError}>OK</button>
  </div>
</div>
);

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired,
  clickThroughError: PropTypes.func.isRequired,
};

export default ErrorModal;

