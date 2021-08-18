import axios from "axios";
import { Modal,Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addproduct } from '../states/shoppingcartslice';



const addtoCart = (product) => {
    console.log("added to cart");
} 

export const handleBuy = async (product) => {
    console.log(product);
    console.log("bought the case");
    const response = await axios.post('http://localhost:3001/create-checkout-session',product)
    console.log(response)
    window.location = response.data.url
}

const ProductModal = ({ show,onHide,product }) => {

    const dispatch = useDispatch();

    if(product===[]) {
        return(<div></div>)
    } 
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {product.title}
                {product.price}
            </Modal.Body>
            <Button variant="primary" onClick={() =>{
                addtoCart(product)
                dispatch(addproduct(product))
            }
            }>Cart</Button>
            <Button variant="primary" onClick={() =>{
                handleBuy(product)
            }
            }>Buy</Button>
        </Modal>
    )
}

export default ProductModal
