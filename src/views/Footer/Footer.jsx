import React from "react";
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator"/>
      <section className="footer-social-media">
        <a href="/support" target="_blank" rel="noopener">
          Contact us
        </a>
      </section>
      <section className="footer-info">
      <section className="footer-info-cent">
        <section className="footer-info__name">Caellum.es</section>
        <section className="footer-info__returns">Refund Policy</section>
      </section>
      </section> 
      <section className="footer-info-center"></section>
      <section className="footer-info__email">caellum@caellum.es</section>
      <section className="footer-info__terms">Terms and Conditions</section>
      <br />
      <i className="fa-regular fa-copyright"></i>
      <section className="footer-info-right"></section>
      <hr className="footer-seperator"/>
    </section>
  );
};

export default Footer;
