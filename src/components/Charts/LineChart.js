// src/components/Charts/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra los elementos necesarios para el gráfico de línea
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data = [], title = "Gráfico de Líneas" }) => {
  const chartData = {
    labels: data.map(item => item.month || ''),
    datasets: [
      {
        label: 'Visitas',
        data: data.map(item => item.visitors || 0),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, // Hace que las líneas sean más suaves
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
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
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
      <Line options={options} data={chartData} height={200} />
    </div>
  );
};

export default LineChart;




