import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addproduct } from "../states/shoppingcartslice";

const addtoCart = (product) => {
  console.log("added to cart");
};

export const handleBuy = async (product) => {
  console.log(product);
  console.log("bought the case");
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/create-checkout-session`,
    product
  );
  console.log(response);
  window.location = response.data.url;
};

const ProductModal = ({ show, onHide, product }) => {
  const dispatch = useDispatch();

  if (product === []) {
    return <div></div>;
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="row">
        <div className="col col-12 col-lg-6 phonecase-image d-flex align-items-center justify-content-center">
          <img src={product.img} width="250" alt="" />
        </div>
        <div className="col col-12 col-lg-6 product-details">
          <div className="product-details-text">
            <h2 className="product-title">{product.title}</h2>
            <h3 className="product-price">Rs {product.price}</h3>
          </div>
          <div className="product-modal-buttons">
            <Button
              variant="dark"
              className="cart-button cart-button-wrapper"
              onClick={() => {
                addtoCart({ ...product, quantity: 1 });
                onHide();
                dispatch(addproduct({ ...product, quantity: 1 }));
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="dark"
              className="buy-button buy-button-wrapper"
              onClick={() => {
                handleBuy({ ...product, quantity: 1 });
              }}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
