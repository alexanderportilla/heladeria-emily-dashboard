// src/components/Header.js
import React from 'react';
import { RefreshCw } from 'lucide-react';
import { FiUser } from 'react-icons/fi';

const Header = ({ onRefresh }) => {
  return (
    <div className="flex justify-between items-center mb-8 bg-gradient-to-r from-teal-500 to-teal-600 p-4 rounded-lg shadow-lg text-white border-b-4 border-teal-700">
      {/* Título principal del panel */}
      <h1 className="text-3xl font-bold tracking-wide">
        Panel de Control
      </h1>
      
      {/* Botón de Actualizar */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onRefresh} 
          className="flex items-center gap-2 bg-white text-teal-600 font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out shadow-md"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Actualizar</span>
        </button>
        
        {/* Ícono de perfil de usuario */}
        <div className="flex items-center bg-teal-700 p-2 rounded-full cursor-pointer hover:bg-teal-800 transition duration-300 ease-in-out">
          <FiUser className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;


