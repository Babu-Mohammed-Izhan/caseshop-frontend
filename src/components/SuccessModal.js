import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      This is the success page modal.
    </Modal>
  );
};

export default SuccessModal;
