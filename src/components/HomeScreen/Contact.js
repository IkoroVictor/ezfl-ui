import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

const Contact = () => (
    <section className="section-feedback">
      <h2>Contact us</h2>
      <Container>
        <Row>
          <Col md={12}>
            <form>
                <Row>
                    <Col md={4}>
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                    </Col>
                    <Col md={8}>
                        <textarea className="form-control" id="message" rows="25" cols="10" placeholder="Message Text...."></textarea>
                        <button type="button" className="btn-contact-us submit-btn form_submit">SEND</button>
                    </Col>
                </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
);

export default Contact;
