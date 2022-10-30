import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import IconText from "../IconText";
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie,
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccordionToggle from "../AccordionToggle";
import './index.scss'


const Faq = () => {
  const options = [
      {icon: faCreditCard, text: 'Cartão de crédito'},
      {icon: faWallet, text: 'Conta e abertura'},
      {icon: faShieldAlt, text: 'Token digital'},
      {icon: faUserTie, text: 'Produtos e serviços'}
  ];

  const [index, setIndex] = useState(0);

  const handleClick = key => {
      setIndex(key);
  }

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <h2 className="my-5 faq-title"> Dúvidas frequentes</h2>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className='d-lg-none mb-5' xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className='d-flex justify-content-center' key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size='2x'
                    color={key === index ? '#FFF' : '#BBB'}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className='justify-content-center mt-5'>
              <p className='lead'>{options[index].text}</p>
            </Row>
          </Col>
          <Col className='d-none d-lg-block'>
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className='faq-clickable mb-3'
                textClassName='lead'
                color={key === index ? '#FFF' : '#BBB'}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey='0' activeKey={`${index}`}>
              <Card className="faq-card">
                  <Card.Header>
                    <AccordionToggle handleOnClick={() => handleClick(0)}>
                      Lorem ipsum dolor sit amet
                    </AccordionToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>

              <Card className="faq-card">
                  <Card.Header>
                    <AccordionToggle handleOnClick={() => handleClick(1)}>
                      Nulla porttitor eros ac ex tristique posuere
                    </AccordionToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>

              <Card className="faq-card">
                  <Card.Header>
                    <AccordionToggle  handleOnClick={() => handleClick(2)}>
                      Quisque fringilla tincidunt arcu
                    </AccordionToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>

              <Card className="faq-card">
                  <Card.Header>
                    <AccordionToggle handleOnClick={() => handleClick(3)}>
                      Nam elementum lobortis purus a maximus tortor
                    </AccordionToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Faq;