import './App.css';
import React from 'react';
import Navbar from './assets/pages/Navbar.js';
import Aside from './assets/pages/Aside.js';
import Dashboard from './assets/pages/Dashboard.js'
import { Routes, Route } from "react-router-dom";
import Customer from './assets/pages/Customer';
import Operators from './assets/pages/Operators';
import Packages from './assets/pages/Packages';
import Bookings from './assets/pages/Bookings';
import Transactions from './assets/pages/Transactions';
import Settings from './assets/pages/Settings';

function App() {
  return (
    <>
<div className='bg-dark-gray'>

<Navbar/>
<Aside/>

<Routes>
  <Route path='/' element={<Dashboard/>} />
  <Route path='Dashboard' element={<Dashboard/>} />
  <Route path='Customers' element={<Customer/>} />
  <Route path='Operators' element={<Operators/>} />
  <Route path='Packages' element={<Packages/>} />
  <Route path='Bookings' element={<Bookings/>} />
  <Route path='Transactions' element={<Transactions/>} />
  <Route path='Settings' element={<Settings/>} />
</Routes>

</div>

    </>
  );
}

export default App;
