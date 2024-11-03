// src/components/Charts/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra los elementos necesarios para el gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data = [], title = "Gráfico de Barras" }) => {
  // Asegúrate de que los datos están definidos y tienen el formato correcto
  const chartData = {
    labels: data.map(item => item.month || ''),
    datasets: [
      {
        label: 'Ingresos',
        data: data.map(item => item.amount || 0),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4a4a4a',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: '#333',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#4a4a4a',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
          color: '#e0e0e0',
        },
        ticks: {
          color: '#4a4a4a',
          font: {
            size: 12,
          },
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <Bar options={options} data={chartData} height={200} />
    </div>
  );
};

export default BarChart;



