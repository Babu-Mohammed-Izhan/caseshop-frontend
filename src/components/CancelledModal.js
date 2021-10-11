import { Modal } from "react-bootstrap";

const CancelledModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div>You have cancelled your order.</div>
        <div>
          If there are any concerns or complaints, Please contact our customer
          service.Thank you.
        </div>
      </div>
    </Modal>
  );
};

export default CancelledModal;
