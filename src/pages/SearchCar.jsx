import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Filter from "../components/Filter";

const SearchCar = () => {
  const [carData, setCarData] = useState([]);
  const [fName, setFname] = useState([""]);
  const [fCategory, setFcategory] = useState([""]);
  const [fStatus, setFstatus] = useState([""]);
  const [fPrice, setFprice] = useState([""]);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        console.log(res);
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleChangeName = (e) => {
    setFname(e.target.value);
  };
  console.log("fname", fName);

  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&isRented=${fStatus}&minPrice=${fPrice}&maxPrice=${fPrice}`
      )
      .then((res) => {
        console.log(res);
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  const handleChangeCategory = (e) => {
    setFcategory(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setFstatus(e.target.value);
  };

  const handleChangePrice = (e) => {
    setFprice(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Welcome isButtonShow={false} />
      <Filter
        disable={false}
        isButton={true}
        handleChangeName={handleChangeName}
        handleChangeCategory={handleChangeCategory}
        handleChangePrice={handleChangePrice}
        handleChangeStatus={handleChangeStatus}
        handleFilter={handleFilter}
        fCategory={fCategory}
        fStatus={fStatus}
        fPrice={fPrice}
      />

      <div className="">
        <section id="carList">
          <div className="container">
            <div className="row align-items-center">
              {!!carData.length
                ? carData.map((item) => (
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <img
                          src={item.image}
                          width={310}
                          height={190}
                          style={{ marginBottom: "40px", marginTop: "40px", marginLeft: "40px" }}
                        />
                        <br />
                        <h6 className="car-name">{item.name}</h6>
                        <h5 className="car-price">
                          <b>{item.price}/ hari</b>
                        </h5>
                        <h6 style={{ fontWeight: 600 }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </h6>
                        <Link to={`/detailmobil/${item.id}`}>
                          <button
                            type="button"
                            className="btn-sewa"
                            style={{ marginTop: "20px" }}
                          >
                            Pilih Mobil
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SearchCar;
