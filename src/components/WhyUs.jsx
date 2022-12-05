import * as React from "react";

const WhyUs = () => {
  return (
    <section className="container my-lg-5" id="whyUs">
      <h2 className="py-1">Why Us</h2>
      <h4>Mengapa harus pilih Binar Car Rental?</h4>

      <div className="row flex-column flex-md-row align-items-center my-5 gap-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src="img/thumb.png" width={32} className="my-3" />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src="img/tag.png" width={32} className="my-3" />
              <h5 className="card-title">Harga Murah</h5>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src="img/clock.png" width={32} className="my-3" />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga tersedia di hari minggu</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src="img/medal.png" width={32} className="my-3" />
              <h5 className="card-title">Sopir Profesional</h5>
              <p>Sopir yang Profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyUs;
