import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route ,
  Navigate
} from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import AccountModal from '../../components/AccountsModal';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dasboard';

const MainRoutes = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  const PrivateRoute = ({ Component, logged }) => {
    return logged ? <Component name={name} account={account} /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} logged={isLogged} auth={fakeAuth} />

      <Routes>
        <Route path='/' element={ <Home handleClick={() => setShowModal(true)} /> } />

        <Route path='/login' element={ <Login auth={fakeAuth} /> } />

        <Route path="/dashboard/*" element={<PrivateRoute Component={Dashboard} logged={isLogged} />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
}

export default MainRoutes;
