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
const StartCalender = styled.div`
  float:left;  
  box-shadow: 0px 0px 0px 3px #000;
`
const EndCalender = styled.div`
  margin-left:7vw;  
`

const Wrapper = styled.div`
  margin-top:7vh;
  background-color:white;
`

const StartDate = styled.label`
  color:#7000FF;
`

/*
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/date
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
https://www.chartjs.org/docs/latest/samples/line/line.html
https://reactchartjs.github.io/react-chartjs-2/#/
https://www.npmjs.com/package/react-datepicker
*/

export default function DateComponent({data, options}){
  return (
    <Container>
      <DateField>
        <StartCalender>
          <StartDate for="start">시작일 </StartDate>
          <input type="date" id="start" name="trip-start"
            value="2021-01-01"
            min="2021-01-01" max="2050-12-31">
          </input>
        </StartCalender>
        <EndCalender>
          <StartDate for="start">종료일</StartDate>
          <input type="date" id="start" name="trip-start"
            value="2021-01-01"
            min="2021-01-01" max="2050-12-31">
          </input>
        </EndCalender>
      </DateField>
      <Wrapper>
        <Line data={data} options={options} />
      </Wrapper>
    </Container>
  )
}