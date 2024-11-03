import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Customers = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    // Simulación de datos en lugar de una solicitud a la API
    const simulatedData = [
      { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '123456789', status: 'active' },
      { id: 2, name: 'Maria López', email: 'maria@example.com', phone: '987654321', status: 'inactive' },
      { id: 3, name: 'Carlos Gomez', email: 'carlos@example.com', phone: '567890123', status: 'active' }
    ];

    setTimeout(() => setCustomers(simulatedData), 1000); // Simulación de retraso de carga
  }, []);

  if (!customers) return <p className="text-center mt-6">Cargando datos...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <Card key={customer.id} title={customer.name}>
            <div className="p-4 text-center">
              <p className="text-md font-medium text-gray-700">Email: <span className="text-gray-800">{customer.email}</span></p>
              <p className="text-md font-medium text-gray-700">Teléfono: <span className="text-gray-800">{customer.phone}</span></p>
              <p className={`text-sm font-semibold mt-4 ${
                customer.status === 'active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
              } inline-block px-3 py-1 rounded-full`}>
                Estado: {customer.status === 'active' ? 'Activo' : 'Inactivo'}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Customers;
