import React from "react";
import { Doughnut } from "react-chartjs-2"

function DoughnutChart({chartData, width}) {
  const data = {
    labels: [
      '최고예요',
      '맛있어요',
      '보통이에요',
      '별로예요',
      '싫어요'
    ],
    datasets: [{
      data: chartData,
      backgroundColor: [
        '#36A2EB',
        '#4BC0C0',
        '#FFCD56',
        '#FF9F40',
        '#FF6384'
      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#4BC0C0',
        '#FFCD56',
        '#FF9F40',
        '#FF6384'
      ]
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }
  return (
    <Doughnut data={data} width={width} options={options}/>
  )
}

export default DoughnutChart;