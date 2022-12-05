import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./pages.css";
import Filter from "../components/Filter";
import "../assets/users.png";

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
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Filter disabled={true} isButton={false} />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <h1>Tentang Paket</h1>
            <h2>Include</h2>
            <p></p>
            <p className="list">Apa saja yang termasuk dalam paket misal durasi max 12 jam</p>
            <p className="list">Sudah termasuk bensin selama 12 jam</p>
            <p className="list">Sudah termasuk Tiket Wisata</p>
            <p className="list">Sudah termasuk pajak</p>

            <h3>Exclude</h3>
            <p className="list">Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
            <p className="list">
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="list">Tidak termasuk akomodasi penginapan</p>
            <p></p>
            <h4>Refund, Reschedule, Overtime</h4>
            <p className="list">Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
            <p className="list">
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="list">Tidak termasuk akomodasi penginapan</p>
            <p className="list">Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
            <p className="list">
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="list">Tidak termasuk akomodasi penginapan</p>
            <p className="list">Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
            <p className="list">
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="list">Tidak termasuk akomodasi penginapan</p>
          </div>
          <div className="col-lg-6">
            {Object.entries(car).length ? (
              <div>
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
                <h1>{car.name}</h1>

                <p>
                  <img src="../assets/users.png" />
                  {car.category === "Medium" && "4 - 6 Orang"}
                  {car.category === "small" && "2 - 4 Orang"}
                  {car.category === "medium" && "4 - 6 Orang"}
                  {car.category === "large" && "6 - 8 Orang"}
                </p>
                <p>Total : Rp. {car.price}</p>
              </div>
            ) : (
              <h1></h1>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
