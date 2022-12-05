import * as React from "react";

const BestCar = () => {
  return (
    <section className="ourService my-5 pb-lg-3">
      <div className="container my-5">
        <div className="row align-items-center flex-column flex-md-row">
          <div className="col my-4 m-md-4 text-center">
            <img src="img/LAPTOP.png" className="img-fluid" />
          </div>
          <div className="col my-4 m-md-4">
            <h3>
              Best Car Rental for any kind of trip in <br />
              (Lokasimu)
            </h3>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul class="p-0">
              <li class="list-unstyled py-1">
                <img src="img/checklist.png" alt="checklist" />
                <span class="px-2">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </li>
              <li class="list-unstyled py-1">
                <img src="img/checklist.png" alt="checklist" />
                <span class="px-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
              </li>
              <li class="list-unstyled py-1">
                <img src="img/checklist.png" alt="checklist" />
                <span class="px-2">Sewa Mobil Jangka Panjang Bulanan</span>
              </li>
              <li class="list-unstyled py-1">
                <img src="img/checklist.png" alt="checklist" />
                <span class="px-2">Gratis Antar - Jemput Mobil di Bandara</span>
              </li>
              <li class="list-unstyled py-1">
                <img src="img/checklist.png" alt="checklist" />
                <span class="px-2">Layanan Airport Transfer / Drop In Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCar;
