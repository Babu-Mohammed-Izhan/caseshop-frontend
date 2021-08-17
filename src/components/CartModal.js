import { Modal } from "react-bootstrap"
import { useSelector } from 'react-redux'


const CartModal = ({ show,onHide }) => {

    const products = useSelector((state) => state.products)
    console.log(products)

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
