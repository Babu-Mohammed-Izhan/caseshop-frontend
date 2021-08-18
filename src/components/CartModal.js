import { Modal,Button } from "react-bootstrap"
import { useSelector,useDispatch } from 'react-redux'
import { removeproduct } from "../states/shoppingcartslice"
import { handleBuy } from "./ProductModal"


const CartModal = ({ show,onHide }) => {

    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            {
                products.map((product) => {
                    return (
                        <div key={product.title}>
                            {product.title}
                            {product.price}
                            <Button variant="primary" onClick={() => {
                                dispatch(removeproduct(product))
                            }}>
                                Cancel
                            </Button>
                        </div>
                    )
                })
            }

            <Button
            onClick={() => {
                const totalprice = products.reduce((sum, current) => sum+current.price,0)
                console.log(totalprice)
                handleBuy({title:"multiple items", price:totalprice})
            }} 
            >
                Buy
            </Button>
        </Modal>
    )
}

export default CartModal
