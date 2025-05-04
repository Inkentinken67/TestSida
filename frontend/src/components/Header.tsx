import React from 'react';
import logo from '../assets/NanoEdge_logotyp2_vit_transparant.png';

function Header() {
  return (
    <header className="bg-slate-800 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <a href="/"><img src={logo} alt="NanoEdge Logo" className="w-3xs" /></a>
      </div>
      <nav className="flex space-x-6">
        <a href="#" className="underline-animation">Hem</a>
        <a href="#" className="underline-animation">Produkter</a>
        <a href="#" className="underline-animation">Kontakta oss</a>
        <a href="#" className="underline-animation">Om oss</a>
      </nav>
    </header>
  );
}
//vi fixar dark mode sen 

export default Header;
