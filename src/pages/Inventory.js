import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Inventory = () => {
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    // Simulación de datos en lugar de una solicitud a la API
    const simulatedData = [
      { id: 1, name: 'Helado Vainilla', stock: 120, minStock: 50 },
      { id: 2, name: 'Helado Chocolate', stock: 30, minStock: 50 },
      { id: 3, name: 'Helado Fresa', stock: 60, minStock: 50 },
    ];

    setTimeout(() => setInventory(simulatedData), 1000); // Simulación de retraso de carga
  }, []);

  if (!inventory) return <p className="text-center mt-6">Cargando datos...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Inventario</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventory.map((item) => (
          <Card key={item.id} title={item.name}>
            <div className="p-4 text-center">
              <p className="text-xl font-bold text-gray-800">
                Stock: <span className={`text-${item.stock > item.minStock ? 'green' : 'red'}-500`}>{item.stock}</span>
              </p>
              <p className={`text-sm font-semibold mt-2 ${item.stock > item.minStock ? 'text-green-600' : 'text-red-600'}`}>
                Estado: {item.stock > item.minStock ? 'Óptimo' : 'Bajo'}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
