import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Aside from './components/Aside.js';
import Default from './Default';
import Dashboard from './components/Dashboard.js'
import {Routes, Route } from "react-router-dom";
import Customer from './components/Customer';
import Operators from './components/Operators';
import Packages from './components/Packages';
import Bookings from './components/Bookings';
import Transactions from './components/Transactions';
import Settings from './components/Settings';

function App() {
  return (
    <>
<Navbar/>
<Aside/>

<Routes>
  <Route path='/' element={<Default/>} />
  <Route path='Dashboard' element={<Dashboard/>} />
  <Route path='Customers' element={<Customer/>} />
  <Route path='Operators' element={<Operators/>} />
  <Route path='Packages' element={<Packages/>} />
  <Route path='Bookings' element={<Bookings/>} />
  <Route path='Transactions' element={<Transactions/>} />
  <Route path='Settings' element={<Settings/>} />
</Routes>


    </>
  );
}

export default App;
