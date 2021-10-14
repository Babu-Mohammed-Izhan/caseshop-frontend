import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmex,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-hny py-5 bg-dark">
      <div className="container py-lg-5">
        <div className="text-txt row">
          <div className="left-side col-lg-4">
            <h3>Cover Up</h3>
            <p>
              Wide variety of designs for a wide variety of phones. All at the
              click of a button.
            </p>
            <ul className="social-footerhny mt-lg-5 mt-4">
              <li>
                <FontAwesomeIcon
                  className="fa-icons fontsawesome"
                  icon={faFacebook}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="fa-icons fontsawesome"
                  icon={faTwitter}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="fa-icons fontsawesome"
                  icon={faInstagram}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="fa-icons fontsawesome"
                  icon={faLinkedin}
                />
              </li>
            </ul>
          </div>

          <div className="right-side col-lg-8 pl-lg-5">
            <h4>Opening Day Special Offer, Flat 50% Discount on all Cases</h4>
            <div className="sub-columns">
              <div className="sub-two-right">
                <h6>Our Store</h6>
                <p className="mb-4">
                  49436 Broaddus Honey Court Avenue, Madisonville MA 95020,
                  INDIA
                </p>

                <h6>We accept:</h6>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="fa-icons fontsawesome"
                      icon={faCcVisa}
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="fa-icons fontsawesome"
                      icon={faCcMastercard}
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="fa-icons fontsawesome"
                      icon={faCcPaypal}
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="fa-icons fontsawesome"
                      icon={faCcAmex}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
