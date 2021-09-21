import React from 'react';
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';

const Container = styled.div`
  padding-right: 3vw;
  padding-left: 4vw;
`

const DateField = styled.div`
  width:56vw;
  margin-top:2vh;
  height:8vh;
`
const DateSelecter = styled.div`
  float:left;
  box-shadow: 0px 3px 3px 0px grey;
  width:18vw;
  height:9vh;
  margin-right: 3vw;
  background-color: white;
  border-radius: 8px;
`

const Wrapper = styled.div`
  margin-top:5vh;
  padding: 2vh 4vw;
  background-color:white;
`

const StartDate = styled.div`
  color: #7000FF;
  font-size:22px;
  padding: 10px;
`

const SelectWrapper = styled.div`
  padding-right: 15px;
`

const DateInput = styled.input`
  float: right;
`

export default function DateComponent({data, options}){
  return (
    <Container>
      <DateField>
        <DateSelecter>
          <StartDate>시작일</StartDate>
          <SelectWrapper>
            <DateInput type="date" value="2021-01-01" />
          </SelectWrapper>
        </DateSelecter>
        <DateSelecter>
          <StartDate>종료일</StartDate>
          <SelectWrapper>
            <DateInput type="date" value="2021-01-01" />
          </SelectWrapper>
        </DateSelecter>
      </DateField>
      <Wrapper>
        <Line data={data} options={options} />
      </Wrapper>
    </Container>
  )
}