// src/components/DashboardCards.js
import React from 'react';
import { FiDollarSign, FiUserPlus, FiShoppingBag } from 'react-icons/fi';

const DashboardCards = ({ data }) => {
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Tarjeta de Total de Ventas */}
      <div className="p-6 bg-white shadow-lg rounded-lg text-center border-t-4 border-teal-500 transform transition duration-300 hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <FiDollarSign className="text-teal-500 w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600">Total de Ventas</h3>
        <p className="text-3xl font-bold text-teal-600">€{data.totalSales}</p>
        <p className="text-sm text-gray-500 mt-2">Ventas acumuladas del mes</p>
      </div>

      {/* Tarjeta de Nuevos Clientes */}
      <div className="p-6 bg-white shadow-lg rounded-lg text-center border-t-4 border-blue-500 transform transition duration-300 hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <FiUserPlus className="text-blue-500 w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600">Nuevos Clientes</h3>
        <p className="text-3xl font-bold text-blue-600">{data.newCustomers}</p>
        <p className="text-sm text-gray-500 mt-2">Clientes añadidos este mes</p>
      </div>

      {/* Tarjeta de Pedidos Totales */}
      <div className="p-6 bg-white shadow-lg rounded-lg text-center border-t-4 border-purple-500 transform transition duration-300 hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <FiShoppingBag className="text-purple-500 w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600">Pedidos Totales</h3>
        <p className="text-3xl font-bold text-purple-600">{data.totalOrders}</p>
        <p className="text-sm text-gray-500 mt-2">Pedidos registrados en total</p>
      </div>
    </div>
  );
};

export default DashboardCards;





