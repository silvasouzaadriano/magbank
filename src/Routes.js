import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AccountModal from './components/AccountsModal';

import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dasboard';

const AppRoutes = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path='/login' element={ <Login /> } />

        <Route path='/dashboard' element={ <Dashboard /> } />

        <Route path='/' element={ <Home handleClick={() => setShowModal(true)} />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
}

export default AppRoutes;
