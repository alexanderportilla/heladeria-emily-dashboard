// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBell, FiLayers, FiGrid, FiSettings, FiUser, FiShoppingBag, FiUsers } from 'react-icons/fi';
import { BsFillGiftFill } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-900 text-white w-64 h-full p-4 fixed flex flex-col justify-between">
      {/* Logo y nombre de la barra lateral */}
      <div>
        <div className="logo flex items-center gap-2 mb-8">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-semibold">Heladería Emily</span>
        </div>

        {/* Navegación */}
        <nav className="space-y-4">
          <Link to="/" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiHome className="icon" /> Dashboard
          </Link>
          <Link to="/alerts" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiBell className="icon" /> Alertas
          </Link>
          <Link to="/inventory" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiLayers className="icon" /> Inventario
          </Link>
          <Link to="/sales" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiShoppingBag className="icon" /> Ventas
          </Link>
          <Link to="/customers" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiUsers className="icon" /> Clientes
          </Link>
          <Link to="/grid" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiGrid className="icon" /> Gráficas
          </Link>
          <Link to="/settings" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiSettings className="icon" /> Configuración
          </Link>
          <Link to="/about" className="nav-item flex items-center gap-2 text-lg hover:bg-blue-800 p-2 rounded-md">
            <FiUser className="icon" /> Acerca de
          </Link>
        </nav>
      </div>

      {/* Botón de "Mejora a Pro" */}
      <div className="mt-8">
        <Link
          to="/upgrade"
          className="flex items-center justify-center gap-2 bg-red-500 text-white text-lg font-semibold py-3 rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          <BsFillGiftFill className="w-5 h-5" />
          Mejora a Pro
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
