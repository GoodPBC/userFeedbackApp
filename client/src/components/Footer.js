import React from 'react';

const Footer = () => {
  return (
    <footer className="footer page-footer grey darken-4">
      <div className="container">
        <div className="loor-llc left-align yellow-text text-darken-3">
          {' '}2016 All Rights Reserved. LOOR LLC{' '}
        </div>
        <div className="footer-links">
          <div className="link-item right-align yellow-text text-darken-3 flow-text">
            info@loor.life
          </div>
        </div>
        <div className="footer-social-networks">
          <i
            className="fa fa-facebook footer-social-icons"
            aria-hidden="true"
          />
          <i className="fa fa-twitter footer-social-icons" aria-hidden="true" />
          <i
            className="fa fa-instagram footer-social-icons"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
