import { Modal } from "react-bootstrap";

const SuccessModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div>Thank you for buying at Casey.</div>
        <div>
          Your order has been recorded and it will be shipped in 3-5 business
          days.
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
