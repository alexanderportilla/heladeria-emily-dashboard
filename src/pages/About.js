// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Acerca de</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Heladería Emily</h2>
        <p className="text-gray-600">
          Heladería Emily es una empresa dedicada a ofrecer los helados más deliciosos y variados, con una excelente atención al cliente y un ambiente acogedor. Nuestro objetivo es brindar una experiencia inolvidable para cada cliente que nos visita.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Versión de la Aplicación</h2>
        <p className="text-gray-600">Versión 1.0.0</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Desarrolladores</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Juan Pérez - Desarrollador Frontend</li>
          <li>Maria López - Desarrolladora Backend</li>
          <li>Carlos Gómez - Diseñador UI/UX</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
