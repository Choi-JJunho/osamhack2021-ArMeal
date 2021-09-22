import React, { useState } from 'react';
import DateComponent from 'components/DateComponent';

export default function DateContainer(){
  const [order, setOrder] = useState(0);
  const data = {
    labels: ['2021-07-13', '2021-07-14', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '조식',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: '중식',
        data: [12, 19, 3, 6, 1, 0],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
      },
      {
        label: '석식',
        data: [12, 10, 8, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <DateComponent 
      data={data}
      options={options}
      order={order}
      setOrder={setOrder}
    />
  )
}