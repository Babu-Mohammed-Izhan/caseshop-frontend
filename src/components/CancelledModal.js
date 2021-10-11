import { Modal, Button } from "react-bootstrap";

const CancelledModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      This is the cancelled Modal. If there are any concerns or complaints
      Please contact our customer service.Thank you.
    </Modal>
  );
};

export default CancelledModal;
