// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings'; // Importa la página de Configuración
import About from './pages/About';       // Importa la página de Acerca de
import Sidebar from './components/Sidebar';
import Upgrade from './pages/Upgrade';
import './index.css';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-64 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} /> {/* Ruta para Configuración */}
          <Route path="/about" element={<About />} />         {/* Ruta para Acerca de */}
          <Route path="*" element={<Dashboard />} /> {/* Ruta por defecto */}
          <Route path="/upgrade" element={<Upgrade />} /> {/* Ruta para Mejora a Pro */}
        </Routes>
      </div>
    </div>
  );
};

export default App;

