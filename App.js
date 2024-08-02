import Modal from "./Modal";
import { useState } from "react";
import "./App.css"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="app1"
    >
      <button onClick={openModal}>
        Open Modal
      </button>
      <div id="modal-root"></div> 
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>This is a modal!</h2>
        </Modal>
      )}
    </div>
  );
}

export default App;
