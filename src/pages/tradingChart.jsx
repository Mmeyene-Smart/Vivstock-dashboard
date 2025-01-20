import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function TradeChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sample Data',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  const exportTable = () => {
    const data = [
      ['Month', 'Value'],
      ['January', 65],
      ['February', 59],
      ['March', 80],
      ['April', 81],
      ['May', 56],
      ['June', 55],
      ['July', 40]
    ];

    let csvContent = "data:text/csv;charset=utf-8," 
      + data.map(e => e.join(",")).join("\n");

    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'chart_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <canvas ref={chartRef}></canvas>
      <button onClick={exportTable}>Export Table</button>
    </div>
  );
}

export default TradeChart;