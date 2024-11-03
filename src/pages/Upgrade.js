// src/pages/Upgrade.js
import React from 'react';

const Upgrade = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Actualiza a Pro</h1>
      <p className="text-lg text-gray-700 mb-6">
        Disfruta de beneficios exclusivos al actualizar a la versión Pro de Heladería Emily.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
        ¡Mejora ahora!
      </button>
    </div>
  );
};

export default Upgrade;
