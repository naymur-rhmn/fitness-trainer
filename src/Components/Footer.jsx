import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer container-padding'>
      <div className="footer-top py-5">
        <Container fluid>
          <Row>
            <Col md={4}>
              <h5>Quick Menu</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Challenges</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5>
                Stay Tuned
              </h5>
              <p className='subscr-txt'>
                Subscribe Now and Get Access to Exclusive Workouts and Tips
              </p>
              <div className="newslatter">
                <form action="#" className='d-flex align-items-end justify-content-between'>
                  <div className="email">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <button className="boxed-btn">Join</button>
                </form>
              </div>

            </Col>
            <Col md={2}>
              <h5>Follow Me</h5>
              <ul>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.youtube.com">Youtube</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright py-4">
        <p>© 2023 by Roy Pratt. Proudly created with Wix.com</p>
      </div>
    </div>
  );
};

export default Footer;