import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("모달 열림");
  };
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("모달 닫힘");
  };
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button
        onClick={openModal}
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        버튼 열기
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
