import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1>Hello, world!</h1>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>This is a modal!</h2>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
