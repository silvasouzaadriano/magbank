import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/MAGbank.png';
import applestore from '../../assets/applestore.png';
import googleplay from '../../assets/googleplay.png';

import './index.scss';

const Footer = () => (
  <footer className='footer'>
    <Container>
      <Row className='text-center py-5'>
        <Col xs={12} lg={6} className='text-lg-left mb-5 mb-lg-0'>
          <Image src={logo} className ="logo" />
        </Col>

        <Col xs={12} lg={4} className="mb-5-mb-lg-0">
          <Image src={applestore} />
          <Image src={googleplay} className='mx-2' />
        </Col>

        <Col
          xs={12}
          lg={2}
          className='d-flex align-items-center justify-content-center'
        >
          <a
            href='http://facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color='#7c7c7c'
              size='2x'
              className="mx-2"
            />
          </a>
          <FontAwesomeIcon
            icon={faTwitter}
            color='#7c7c7c'
            size='2x'
            className='mx-2'
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color='#7c7c7c'
            size='2x'
            className='mx-2'
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
