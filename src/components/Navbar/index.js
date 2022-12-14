import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  NavDropdown,
  Form
} from 'react-bootstrap';
import './index.scss';
import logo from '../../assets/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ handleCreateAcc, logged, auth }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    auth.logout(() => navigate('/'));
  };
  
  return (
  <Navbar variant='dark' expand='lg'>
    <Container>
      <Link to='/' className="navbar-brand">
        <img
          src={logo}
          height='30'
          className='d-inline-block align-top'
          alt='Magbank logo'
        />
      </Link>
      {logged && (
        <>
          <Form>
            <div className='navbar__search-group d-none d-lg-flex'>
              <Form.Control type='text' placeholder='O que você procura?' />
              <Button variant='link'>
                <FontAwesomeIcon icon={faSearch} color='#FFF' />
              </Button>
            </div>
          </Form>

          <Button variant='outline-light' onClick={handleClick}>
            Sair
          </Button>
        </>
      )}
      {!logged && (
        <>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#cartao'>Cartão</Nav.Link>
              <Nav.Link href='#quemsomos'>Quem Somos</Nav.Link>
              <Nav.Link href='#faq'>FAQ</Nav.Link>
            </Nav>
            <ButtonGroup aria-label='Basic example'>
              <Button variant='outline-light'>
                <NavDropdown title='Acessar minha conta' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    <Link to='/login'>Pessoa Física</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.2'>
                    Pessoa Jurídica
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>
              <Button variant='outline-light' onClick={handleCreateAcc}>
                abra sua conta
              </Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </>
      )}
    </Container>
  </Navbar>
  )
};

export default Navigation;