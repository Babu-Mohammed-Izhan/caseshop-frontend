import { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeproduct } from "../states/shoppingcartslice";
import { handleBuy } from "./ProductModal";

const CartModal = ({ show, onHide }) => {
  const [totalprice, setTotalprice] = useState(0);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalprice = products.reduce(
      (sum, current) => sum + current.price,
      0
    );
    setTotalprice(totalprice);
    console.log(totalprice);
  }, [products]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="row">
        <div className="col col-lg-8 col-12">
          {products.length > 0 ? (
            <div className="filled-cart">
              {products.map((product) => {
                return (
                  <div
                    key={product.title}
                    className="product-cart-cards container"
                  >
                    <img src={product.img} width="100" alt="" />
                    <h4>{product.title}</h4>
                    <h4>Rs. {product.price}</h4>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(removeproduct(product));
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-cart">
              <h2 className="empty-cart-info">The cart is Empty</h2>
            </div>
          )}
        </div>
        <div className="col col-lg-4 col-12 summary-column">
          <h3 className="total-price">Total Price: {totalprice}</h3>
          <Button
            variant="dark"
            className="cart-buy-button cart-buy"
            onClick={() => {
              handleBuy({ title: "multiple items", price: totalprice });
            }}
          >
            Buy
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
