// src/pages/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
  });

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Configuración</h1>
      
      <div className="space-y-6">
        {/* General Settings */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Ajustes Generales</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Notificaciones</span>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.notifications} 
                  onChange={() => handleToggle('notifications')} 
                  className="hidden"
                />
                <div className={`w-10 h-5 flex items-center bg-${settings.notifications ? 'teal-500' : 'gray-300'} rounded-full p-1`}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${settings.notifications ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <span>Modo Oscuro</span>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.darkMode} 
                  onChange={() => handleToggle('darkMode')} 
                  className="hidden"
                />
                <div className={`w-10 h-5 flex items-center bg-${settings.darkMode ? 'teal-500' : 'gray-300'} rounded-full p-1`}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${settings.darkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <span>Actualización Automática</span>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.autoUpdate} 
                  onChange={() => handleToggle('autoUpdate')} 
                  className="hidden"
                />
                <div className={`w-10 h-5 flex items-center bg-${settings.autoUpdate ? 'teal-500' : 'gray-300'} rounded-full p-1`}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${settings.autoUpdate ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
          </div>
        </section>
        
        {/* Account Settings */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Ajustes de Cuenta</h2>
          <p className="text-sm text-gray-600">Administra la información de tu cuenta, la seguridad y la privacidad.</p>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
            Cambiar Contraseña
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
