// src/pages/Alerts.js
import React, { useState, useEffect } from 'react';
import { FiAlertTriangle, FiInfo, FiCheckCircle } from 'react-icons/fi';

const Alerts = () => {
  // Estado para almacenar alertas simuladas
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulación de datos para las alertas
    const simulatedAlerts = [
      { id: 1, type: 'Critical', message: 'Nivel de inventario bajo en algunos productos', date: '2024-11-02' },
      { id: 2, type: 'Warning', message: 'Ventas disminuyeron en un 15% respecto al mes anterior', date: '2024-11-01' },
      { id: 3, type: 'Info', message: 'Nuevo producto agregado al inventario', date: '2024-10-28' },
      { id: 4, type: 'Success', message: 'Actualización completada exitosamente', date: '2024-10-26' },
    ];
    setAlerts(simulatedAlerts);
  }, []);

  // Función para definir el estilo de las alertas en función del tipo
  const getAlertStyle = (type) => {
    switch (type) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-l-4 border-red-500';
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500';
      case 'Info':
        return 'bg-blue-100 text-blue-800 border-l-4 border-blue-500';
      case 'Success':
        return 'bg-green-100 text-green-800 border-l-4 border-green-500';
      default:
        return 'bg-gray-100 text-gray-800 border-l-4 border-gray-500';
    }
  };

  // Icono de alerta basado en el tipo de alerta
  const getAlertIcon = (type) => {
    switch (type) {
      case 'Critical':
        return <FiAlertTriangle className="text-red-500 mr-2" />;
      case 'Warning':
        return <FiAlertTriangle className="text-yellow-500 mr-2" />;
      case 'Info':
        return <FiInfo className="text-blue-500 mr-2" />;
      case 'Success':
        return <FiCheckCircle className="text-green-500 mr-2" />;
      default:
        return <FiInfo className="text-gray-500 mr-2" />;
    }
  };

  if (alerts.length === 0) return <p className="text-center mt-6">No hay alertas en este momento.</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Alertas</h1>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-4 rounded-lg shadow-md ${getAlertStyle(alert.type)}`}>
            <div className="flex items-center">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{alert.type} Alert</h3>
                <p className="text-sm">{alert.message}</p>
                <span className="text-xs text-gray-500">{alert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;

