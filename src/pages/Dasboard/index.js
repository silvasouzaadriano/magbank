import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import  data from '../../data/dashboard';

import AccountBalance from '../../components/AccountBalance';
import AccountPayments from '../../components/AccountPayments';
import AccountHistory from '../../components/AccountHistory';

import './index.scss';

const Dashboard = ({ className = false }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '/dashboard' },
    { text: 'Pagamentos', path: 'payments' },
    { text: 'Extrato', path: 'history' },
  ];
  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className='align-items-center mb-5'>
            <Col xs={3}>
              <span className='dashboard__user-avatar'>
                <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                <FontAwesomeIcon
                  className='dashboard__user-icon'
                  icon={faUser}
                  size='3x'
                  color='#7c7d7d'
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Bruce Cantarim</h4>
              <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          {links.map(({ text, path }, key) => (
            <Link className='dashboard__link' to={path} key={key}>
              <Button
                className={`dashboard__button text-left ${
                  key === activeLink ? 'dashboard__button--active' : ''
                }`}
                variant='link'
                size='lg'
                block="true"
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>
        <Routes>
          <Route path="history" element={<AccountHistory data={data} />} />
          <Route path="payments" element={<AccountPayments />} />
          <Route path="/" element={<AccountBalance data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default Dashboard;
