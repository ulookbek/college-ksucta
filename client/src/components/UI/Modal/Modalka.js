import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    height: "60%",
    width: "60%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
  },
};

function Modalka(props) {
  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(79, 100, 125, 0.5)",
            zIndex: 100,
          },
          content: {
            color: "rgba(0, 0, 255, 1);",
            width: "50%",
            margin: "auto",
          },
        }}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default Modalka;
