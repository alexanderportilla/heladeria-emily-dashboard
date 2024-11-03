// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardCards from '../components/DashboardCards';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/dashboard.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) return <p className="text-center mt-6">Cargando datos...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>

      {/* Tarjetas de métricas principales */}
      <DashboardCards data={data.metrics} />

      {/* Gráficos organizados en cuadrícula */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Gráfico de barras */}
        <BarChart 
          data={[
            { month: 'Enero', amount: 1000 },
            { month: 'Febrero', amount: 2000 },
            { month: 'Marzo', amount: 3000 }
          ]}
          title="Ingresos Mensuales"
        />

        {/* Gráfico de líneas */}
        <LineChart 
          data={[
            { month: 'Enero', visitors: 120 },
            { month: 'Febrero', visitors: 150 },
            { month: 'Marzo', visitors: 200 }
          ]}
          title="Visitas Mensuales"
        />

        {/* Gráfico de pastel */}
        <PieChart
          data={{
            "Producto A": 300,
            "Producto B": 200,
            "Producto C": 100,
            "Producto D": 150
          }}
          title="Distribución de Ventas por Producto"
        />
      </div>
    </div>
  );
};

export default Dashboard;

