import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-3">
            <p className="footer" style={{ fontWeight: 700 }}>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000 <br />
              <br />
              binarcarrental@gmail.com <br />
              <br />
              081-233-334-808
            </p>
          </div>
          <div className="col-lg-3">
            <p className="footer">
              Our Services <br />
              <br />
              Why Us <br />
              <br />
              Testimonial <br />
              <br />
              FAQ
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Connect with us <br />
              <br />
              <img src="img/FB.PNG" width={30} height={30} style={{ marginBottom: "20px" }} />
              <img
                src="img/IG.PNG"
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src="img/TW.PNG"
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src="img/MAIL.PNG"
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src="img/TC.PNG"
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Copyright Binar 2022 <br />
              <br />
              <img src="img/logo.png" alt="" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
