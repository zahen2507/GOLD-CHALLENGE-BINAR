import * as React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <section className="jumbotron ps-5">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-lg-6 py-4 ps-5">
              <h1 className="pt-5 pb-3">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="fw-bold">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
                harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {props.isButtonShow ? (
                <div>
                  <button type="button" className="btn btn-success">
                    <Link to="/carimobil" style={{ textDecoration: "none", color: "#fff" }}>
                      Mulai Sewa Mobil
                    </Link>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="col-lg-6 p-0 m-0 text-end">
              <img src="img/CAR.png" alt="car" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
