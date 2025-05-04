import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Product from './pages/Productpage.tsx'

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

//vi fixar dark mode sen 


export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/produkt" element={<Product/>} /> {/* Gör path till en variabel sen*/}
          </Route>
        </Routes>
      </Router>
  );
}
