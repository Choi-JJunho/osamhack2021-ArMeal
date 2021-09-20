import React from 'react';
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';


const Container = styled.div`
  margin-right: 3vw;
  margin-left: 7vw;
  
`

const DateField = styled.div`
  width:56vw;
  margin-top:7vh;

`

const Wrapper = styled.div`
  margin-top:5vh;
  background-color:white;

`
/*
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/date
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
https://www.chartjs.org/docs/latest/samples/line/line.html
https://reactchartjs.github.io/react-chartjs-2/#/
*/

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
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

export default function DateComponent(){
  return (
    <Container>
      <DateField>
        <label for="start">시작일:</label>
        <input type="date" id="start" name="trip-start"
          value="2021-01-01"
          min="2021-01-01" max="2050-12-31">
        </input>
        <label for="start">종료일:</label>
        <input type="date" id="start" name="trip-start"
          value="2021-01-01"
          min="2021-01-01" max="2050-12-31">
        </input>
      </DateField>
      <Wrapper>
        <Line data={data} options={options} />
      </Wrapper>
    </Container>
  )
}