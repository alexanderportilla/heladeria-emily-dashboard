import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Sales = () => {
  const [sales, setSales] = useState(null);

  useEffect(() => {
    // Simulación de datos en lugar de una solicitud a la API
    const simulatedData = [
      { id: 1, date: '2024-01-15', total: 250, customerName: 'Juan Pérez' },
      { id: 2, date: '2024-02-10', total: 300, customerName: 'Maria López' },
      { id: 3, date: '2024-03-05', total: 400, customerName: 'Carlos Gómez' },
    ];

    setTimeout(() => setSales(simulatedData), 1000); // Simulación de retraso de carga
  }, []);

  if (!sales) return <p className="text-center mt-6">Cargando datos...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Ventas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sales.map((sale) => (
          <Card key={sale.id} title={`Pedido #${sale.id}`}>
            <div className="p-4 text-center">
              <p className="text-md font-medium text-gray-700">
                Fecha: <span className="text-gray-800">{sale.date}</span>
              </p>
              <p className="text-md font-medium text-gray-700">
                Total: <span className="text-green-600 font-bold">€{sale.total}</span>
              </p>
              <p className="text-md font-medium text-gray-700">
                Cliente: <span className="text-gray-800">{sale.customerName}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sales;
