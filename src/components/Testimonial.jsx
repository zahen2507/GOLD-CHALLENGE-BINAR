import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import testi1 from "../assets/testi-1.png";
import testi2 from "../assets/testi-2.jpeg";

const Testimonial = () => {
  return (
    <Container>
      <Row>
        <Col id="testimonial">
          <div className="testimoni ">
            <div id="testimonial" className="testimoni pb-lg-5">
              <h1 className="testimoni-1">Testimonial</h1>
              <h4 className="testimoni-2">Berbagai review positif dari para pelanggan kami</h4>
            </div>
          </div>
        </Col>
      </Row>
      <div className="testimonial pt-lg-5">
        <Carousel>
          <Carousel.Item>
            <Image className="testi1" src={testi1} alt="img"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="testi2" src={testi2} alt="img"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="testi1" src={testi1} alt="img"></Image>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};
export default Testimonial;