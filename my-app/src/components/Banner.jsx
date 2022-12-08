import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Banner = () => {
  return (
    <Container fluid class="pt-5">
      <Row className="Banner m-5 rounded-3 text-center">
        <Col className="p-5">
          <h1 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p className="lorem ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            as={Link}
            variant="success"
            className="fw-bolder"
            to="/cari-mobil"
          >
            Mulai Sewa Mobil
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
