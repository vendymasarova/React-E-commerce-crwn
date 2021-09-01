import React from "react";
import { Button } from "./Button";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <serction className="footer-subscription">
        <p className="foooter-subscription-heading">
          Joint the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </serction>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              TRVL <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </div>
          <small className="website-rights"> Trvl 2018</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faBookOpen} />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faBookOpen} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
