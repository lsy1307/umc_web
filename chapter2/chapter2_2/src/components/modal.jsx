function Modal({ isOpen, closeModal }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            marginLeft: "5px",
          }}
        >
          <h3>안녕하세요</h3>
          <p>모달 내용은 어쩌구...</p>
        </div>
        <div
          style={{
            textAlign: "right",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={closeModal}
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
