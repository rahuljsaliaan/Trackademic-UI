import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['21MCA301', '21MCA302', '21MCA303', '21MCA304', '21MCA305', '21MCA306'],
    datasets: [
      {
        data: [87, 81, 68, 52, 89, 49],
        backgroundColor: (context) => {
          const value = context?.raw as number;
          return value <= 80 ? '#FFD689' : '#ffffff';
        },
        borderColor: (context) => {
          const value = context?.raw as number;
          return value <= 80 ? '#F5B640' : '#D7E7FF';
        },
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50, 
          bottomRight: 50,
        },
        borderWidth: 2,
        barThickness: 15,
        maxBarThickness: 50,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#D8DEE7',
          font: {
            family: 'Manrope',
            size: 8,
          },
        },
        border: {
          color: '#D8DEE7', 
          width: 2,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          color: '#D8DEE7',
          font: {
            family: 'Manrope',
            size: 8,
          },
        },
        border: {
          color: '#D8DEE7',
          width: 2, 
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div className='bar-chart-container'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
