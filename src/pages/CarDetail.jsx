import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

import "./pages.css";
import Filter from "../components/Filter";
import usersImg from "../assets/users.png";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <header class="header-detail pb-lg-5">
        <div class="container-fluid p-0">

          <div class="header-1">
            <nav class="navbar fixed-top navbar-expand-lg">
              <div class="container-lg">
                <a class="navbar-brand" href="#">
                  <img src="/img/logo.png"
                    alt="logo"
                    class="d-inline-block align-text-top"
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse flex-grow-0 justify-content-around"
                  id="navbarNavAltMarkup">
                  <ul class="navbar-nav list-unstyled">
                    <li class="nav-item">
                      <a class="nav-link" href="#our-service">Our Service</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#why-us">Why Us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#faq">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div class="bg">
            <div class="container-fluid"></div>
          </div>
        </div>
      </header>
      <Filter disabled={true} isButton={false} />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6>Tentang Paket</h6>
                <h6>Include</h6>
                <ul class="text-muted">
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>

                <h6>Exclude</h6>
                <ul class="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <h6>Exclude</h6>
                <ul class="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">

              {Object.entries(car).length ? (
                <div className="card-body">
                  <img
                    src={car.image}
                    width={270}
                    height={160}
                    top={396}
                    left={904}
                    style={{
                      marginBottom: "40px",
                      marginTop: "40px",
                      marginLeft: "40px",
                      alignItems: "center",
                    }}
                  />
                  <h4 className="px-lg-4 py-lg-5">{car.name}</h4>

                  <div className="row">
                    <div className="col px-lg-5 py-lg-5">
                      <p className="fw-bold">
                        <img src={usersImg} />
                        {car.category === "Medium" && "4 - 6 Orang"}
                        {car.category === "small" && "2 - 4 Orang"}
                        {car.category === "medium" && "4 - 6 Orang"}
                        {car.category === "large" && "6 - 8 Orang"}
                      </p>
                    </div>
                    <div className="col px-lg-5 py-lg-5">
                      <p className="fw-bold">Total : Rp. {car.price}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <h1></h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
