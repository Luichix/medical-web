import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'

const data = {
  labels: [0, 1, 2, 3, 4, 5],
  datasets: [
    {
      label: 'Principal',
      data: [1000, 838, 658, 460, 242, 0],
      fill: false,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
    {
      label: 'Intereses',
      data: [0, 93, 168, 225, 261, 274],
      fill: false,
      backgroundColor: 'rgba(230,82,82,1)',
      borderColor: 'rgba(230,82,82,1)',
      pointBorderColor: 'rgba(230,82,82,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(230,82,82,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
    {
      label: 'Cuotas',
      data: [0, 250, 500, 750, 1000, 1250],
      fill: false,
      backgroundColor: 'rgba(75,192,92,1)',
      borderColor: 'rgba(75,192,92,1)',
      pointBorderColor: 'rgba(75,192,92,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,92,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
  ],
}

export const AmortizationChart = () => {
  // Chart.js code to create the analytics overview chart
  // This is a placeholder and needs actual data to render the chart

  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        const analyticsChart = new Chart(ctx, {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
          },
        })

        return () => {
          analyticsChart.destroy()
        }
      }
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      {/* <!-- Chart placeholder --> */}
      <canvas ref={chartRef} id="analyticsChart" className="p-4"></canvas>
    </div>
  )
}
