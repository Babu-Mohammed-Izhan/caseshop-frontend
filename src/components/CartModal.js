import { Modal } from "react-bootstrap"


const CartModal = ({ show,onHide }) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            
        </Modal>
    )
}

export default CartModal
