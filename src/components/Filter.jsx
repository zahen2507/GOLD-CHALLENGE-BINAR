import React from "react";

const Filter = (props) => {
  return (
    <div
      className="card position-relative start-50 translate-middle"
      style={{ width: "1000px" }}
    >
      <div className="card-body">
        <p className="card-title">
          <b>Pencarianmu</b>
        </p>
        <form action>
          <div className="row justify-content-center">
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="namaMobil" className="form-label">
                  Nama Mobil
                </label>
                <input
                  disabled={props.disabled}
                  onChange={props.handleChangeName}
                  type="text"
                  placeholder="Ketik Nama/tipe mobil"
                  className="form-control"
                  id="namaMobil"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
                </label>
                <select
                  disabled={props.disabled}
                  id="kategoriMobil"
                  className="form-select"
                  aria-label="Default select example"
                  value={props.fCategory}
                  onChange={props.handleChangeCategory}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <option selected>Masukkan Kapasitas Mobil</option>
                  <option value="small">2-4 Orang</option>
                  <option value="medium">4-6 Orang(medium)</option>
                  <option value="Medium">4-6 Orang(Medium)</option>
                  <option value="large">6-8 Orang</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="hargaMobil" className="form-label">
                  Harga
                </label>
                <select
                  disabled={props.disabled}
                  id="hargaMobil"
                  className="form-select"
                  aria-label="Default select example"
                  value={props.fPrice}
                  onChange={props.handleChangePrice}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <option selected>Masukkan Harg a Sewa per Hari</option>
                  <option value="cheap">&lt; Rp.400.000</option>
                  <option value="Medium">Rp.400.000 - Rp.600.000</option>
                  <option value="expensive">&gt; Rp.600.000</option>
                </select>
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="statusMobil" className="form-label">
                  Status
                </label>
                <select
                  disabled={props.disabled}
                  id="statusMobil"
                  className="form-select"
                  aria-label="Default select example"
                  value={props.fStatus}
                  onChange={props.handleChangeStatus}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <option selected>Status Mobil</option>
                  <option value="true">Disewa</option>
                  <option value="false">Belum Disewa</option>
                </select>
              </div>
            </div>
            {props.isButton === true && (
              <div className="col-2">
                <button type="button" className="btn btn-primary mt-4" onClick={props.handleFilter}>
                  Save changes
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
