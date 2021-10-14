import React from 'react';
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';

const Container = styled.div`
  padding-right: 3vw;
  padding-left: 4vw;
`

const DateField = styled.div`
  margin-top:2vh;
  height:8vh;
`
const DateSelecter = styled.div`
  float:left;
  background-color: #FFFFFF;
  border: 1px solid #E9E9EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width:18vw;
  height:9vh;
  margin-right: 3vw;
  background-color: white;
  border-radius: 8px;
`

const Wrapper = styled.div`
  margin-top:5vh;
  padding: 2vh 6vw;
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
  cursor: pointer;
`

const Label = styled.label`
  font-size: 18px;
  padding: 0 5px 0 20px;
  cursor: pointer;
`

const Switch = styled.div`
  float: right;
  padding-right: 15px; 
`

export default function DateComponent({data, options, order, setOrder, range, onChange}){
  return (
    <Container>
      <DateField>
        <DateSelecter>
          <StartDate>시작일</StartDate>
          <SelectWrapper>
            <DateInput name="start" type="date" value={range.start} onChange={onChange}/>
          </SelectWrapper>
        </DateSelecter>
        <DateSelecter>
          <StartDate>종료일</StartDate>
          <SelectWrapper>
            <DateInput name="end" type="date" value={range.end} onChange={onChange} />
          </SelectWrapper>
        </DateSelecter>

        <DateSelecter>
          <StartDate>단위</StartDate>
          <Switch>
            <Label htmlFor="date">1일</Label>
            <input type="radio" name="orderby" id="date" checked={order === 0} onChange={() => setOrder(0)}></input>

            <Label htmlFor="month">1달</Label>
            <input type="radio" name="orderby" id="month" checked={order === 1} onChange={() => setOrder(1)}></input>

            {/* <Label htmlFor="year">1년</Label>
            <input type="radio" name="orderby" id="year" checked={order === 2} onChange={() => setOrder(2)}></input> */}
          </Switch>
        </DateSelecter>
      </DateField>
      <Wrapper>
        <Line data={data} options={options} />
      </Wrapper>
    </Container>
  )
}