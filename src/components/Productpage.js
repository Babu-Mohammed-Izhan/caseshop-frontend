import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import ProductModal from "./ProductModal";

const Productpage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedproduct, setSelectedproduct] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/phoncase`).then((res) => {
      setproducts(res.data);
    });
  }, []);

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
                <h5>{product.title}</h5>{" "}
                <span className="text-success">Rs {product.price}</span>
              </div>
            </Card>
          </div>
        ))}
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={selectedproduct}
        />
      </div>
    </div>
  );
};

export default Productpage;
