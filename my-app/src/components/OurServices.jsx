import React from "react";
import img_service from "../assets/img/img_service.png";
import blue_check from "../assets/img/blue_check.png";
import "../assets/css/style.css";

const OurServices = () => {
  return (
    <section className="container my-5" id="ourServices">
      <div className="row align-items-center flex-column flex-md-row">
        <div className="col my-4 m-md-4 text-center">
          <img
            src={img_service}
            className="img-fluid lign-items-center justify-content-center"
            alt="our services" />
        </div>
        <div className="col my-4 m-md-4">
          <h3 className="fw-bold pb-4">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="p-0 fw-bold">
            <li className="list-unstyled py-1 color-black">
              <img src={blue_check} alt="checklist" />
              <span className="px-2">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </li>
            <li className="list-unstyled py-1 color-black">
              <img src={blue_check} alt="checklist" />
              <span className="px-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
            </li>
            <li className="list-unstyled py-1 color-black">
              <img src={blue_check} alt="checklist" />
              <span className="px-2">Sewa Mobil Jangka Panjang Bulanan</span>
            </li>
            <li className="list-unstyled py-1 color-black">
              <img src={blue_check} alt="checklist" />
              <span className="px-2">Gratis Antar - Jemput Mobil di Bandara</span>
            </li>
            <li className="list-unstyled py-1 color-black">
              <img src={blue_check} alt="checklist" />
              <span className="px-2">Layanan Airport Transfer / Drop In Out</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
