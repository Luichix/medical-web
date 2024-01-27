'use client'
import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'

const data = {
  labels: [0, 1, 2, 3, 4, 5],
  datasets: [
    {
      label: 'Atention Time',
      data: [900, 700, 658, 460, 500, 625],
      fill: false,
      backgroundColor: '#089bab',
      borderColor: '#089bab',
      pointBorderColor: '#089bab',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#089bab',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
    {
      label: 'Personal',
      data: [93, 93, 168, 150, 200, 225],
      fill: false,
      backgroundColor: 'rgb(247, 185, 115)',
      borderColor: 'rgb(247, 185, 115)',
      pointBorderColor: 'rgb(247, 185, 115)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(247, 185, 115)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
    {
      label: 'Appointmet',
      data: [0, 250, 500, 750, 600, 850],
      fill: false,
      backgroundColor: '#e9f3f3',
      borderColor: '#e9f3f3',
      pointBorderColor: '#e9f3f3',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#e9f3f3',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
  ],
}

export const LineChart = () => {
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
