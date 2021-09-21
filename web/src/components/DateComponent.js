import React from 'react';
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';
import DatePicker from "react-datepicker";


const Container = styled.div`
  margin-right: 3vw;
  margin-left: 7vw;
`

const DateField = styled.div`
  width:56vw;
  margin-top:7vh;
  height:8vh;
`
const StartCalender = styled.div`
  float:left;
  box-shadow: 0px 3px 3px 0px grey;
  width:18vw;
  height:9vh;
`
const EndCalender = styled.div`
  float:left;
  margin-left:3vw;
  box-shadow: 0px 3px 3px 0px grey;
  width:18vw;
  height:9vh;
`

const Wrapper = styled.div`
  margin-top:5vh;
  background-color:white;
`

const StartDate = styled.label`
  color:#7000FF;
  font-size:22px;
`

/*
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/date
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
https://www.chartjs.org/docs/latest/samples/line/line.html
https://reactchartjs.github.io/react-chartjs-2/#/
https://www.npmjs.com/package/react-datepicker
https://velog.io/@eunjin/React-React-Datepicker-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%82%AC%EC%9A%A9%EB%B2%95
*/

export default function DateComponent({data, options}){
  return (
    <Container>
      <DateField>
        <StartCalender>
          <StartDate for="start">시작일 <br></br></StartDate>
          <input type="date" id="start" name="trip-start"
            value="2021-01-01"
            min="2021-01-01" max="2050-12-31">
          </input>
        </StartCalender>
        <EndCalender>
          <StartDate for="start">종료일 <br></br></StartDate>
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