import React, { useState } from 'react';
import Modal from '.';

const ParentModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalPopup = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <button onClick={handleModalPopup}>
        {!showModal ? 'Open Modal Popup' : ''}
      </button>

      {showModal && <Modal body={<div>Custom Body </div>} onClose={onClose} />}
    </div>
  );
};

export default ParentModal;
