import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="app"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
