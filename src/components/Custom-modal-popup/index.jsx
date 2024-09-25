import React from 'react';

import './styles.css';

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || 'Modal'} className='container'>
      <div className='modal-content'>
        <div className='header'>
          <h2>{header ? header : 'Header'}</h2>
          <span className='close-btn' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='body'>
          {body ? body : <div>This is our modal body</div>}
        </div>
        <div className='footer'>
          <h2>{footer ? footer : 'Footer'}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
