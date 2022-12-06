import * as React from "react";
import imgFB from "../assets/FB.PNG";
import imgIG from "../assets/IG.PNG"
import imgMail from "../assets/MAIL.PNG"
import imgTW from "../assets/TW.PNG"
import imgTC from "../assets/TC.PNG"
import imgLogo from "../assets/LOGO.png"

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
              <img src={imgFB} width={30} height={30} style={{ marginBottom: "20px" }} />
              <img
                src={imgIG}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={imgTW}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={imgMail}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={imgTC}
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
              <img src={imgLogo} alt="" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
