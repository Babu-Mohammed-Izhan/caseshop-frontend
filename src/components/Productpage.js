import { useState } from "react";
import { Card } from "react-bootstrap";
import CartModal from "./CartModal";
import ProductModal from "./ProductModal";
import SuccessModal from "./SuccessModal";
import CancelledModal from "./CancelledModal";
import { useLocation } from "react-router-dom";

const Productpage = ({ cartShow, setcartShow }) => {
  const [modalShow, setModalShow] = useState(false);
  const [successmodalShow, setsuccessModalShow] = useState(false);
  const [cancelledmodalShow, setcancelledModalShow] = useState(false);
  const [selectedproduct, setSelectedproduct] = useState([]);

  const search = useLocation().search;
  const success = new URLSearchParams(search).get("success");
  const cancelled = new URLSearchParams(search).get("canceled");
  if (success) {
    setsuccessModalShow(true);
  }
  if (cancelled) {
    setcancelledModalShow(true);
  }

  const products = [
    {
      title: "phone1",
      price: 300,
    },
    {
      title: "phone2",
      price: 300,
    },
    {
      title: "phone3",
      price: 300,
    },
    {
      title: "phone4",
      price: 300,
    },
    {
      title: "phone5",
      price: 300,
    },
    {
      title: "phone6",
      price: 300,
    },
    {
      title: "phone7",
      price: 300,
    },
  ];
  return (
    <div className="container product-page">
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
        {products.map((product) => (
          <div
            className="col item-cards items"
            key={product.title}
            onClick={() => {
              setSelectedproduct(product);
              setModalShow(true);
            }}
          >
            <Card className="h-100 items">
              <Card.Img src={product.img} />
              <div className="text-center">
                {" "}
                <img
                  src="https://i.imgur.com/bUWshC0.jpg"
                  width="250"
                  alt=""
                />{" "}
              </div>
              <div className="text-center">
                <h5>{product.title}</h5>{" "}
                <span className="text-success">{product.price}</span>
              </div>
            </Card>
          </div>
        ))}
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={selectedproduct}
        />
        <CartModal show={cartShow} onHide={() => setcartShow(false)} />

        <SuccessModal
          show={successmodalShow}
          onHide={() => setsuccessModalShow(false)}
        />
        <CancelledModal
          show={cancelledmodalShow}
          onHide={() => setcancelledModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Productpage;
