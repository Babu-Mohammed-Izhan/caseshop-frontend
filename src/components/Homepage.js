import { Container, Row, Col } from "react-bootstrap";
const Homepage = () => {
  return (
    <Container variant="dark" className="homepage">
      <div className="container h-100">
        <section className="hero pb-3 bg-cover bg-center d-flex align-items-center">
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted text-uppercase mb-2">
                  New Inspiration 2020
                </p>
                <h1 className="text-uppercase mb-3">20% off on new season</h1>
                <a className="btn btn-dark" href="/products">
                  Browse collections
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Row className="point-1 point ">
        <Col md={6} xs={12}>
          High Quality Materials
        </Col>
        <Col md={6} xs={12}>
          <img
            src="https://res.cloudinary.com/dm8ogh4lv/image/upload/v1634053451/midnight-cravings-violet-realme-realme-8-hard-case-1626503522_large_mc5b3a.jpg"
            className="phone"
            alt="phone1"
          />
        </Col>
      </Row>
      <Row className="point-2 point">
        <Col md={6} xs={12}>
          <img
            src="https://res.cloudinary.com/dm8ogh4lv/image/upload/v1634053449/sugar-rush-peach-realme-realme-8-hard-case-1626518161_large_xfyx12.jpg"
            className="phone"
            alt="phone2"
          />
        </Col>
        <Col md={6} xs={12}>
          Sleek Design
        </Col>
      </Row>
      <Row className="point-3 point">
        <Col md={6} xs={12}>
          Cases for all phones
        </Col>
        <Col md={6} xs={12}>
          <img
            src="https://res.cloudinary.com/dm8ogh4lv/image/upload/v1634053449/sweat-tooth-teal-realme-realme-8-hard-case-1626540121_large_e9mm8o.jpg"
            className="phone"
            alt="phone3"
          />
        </Col>
      </Row>
      <div className="bg-light h-100">
        <div className="row text-center services">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Free shipping</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Festival offer</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
