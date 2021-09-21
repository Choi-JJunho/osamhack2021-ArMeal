import React from "react";
import styled from "styled-components";
import DoughnutChart from "./shared/DoughnutChart";

const Container = styled.div`
  padding: 5vh 7vw;
  display: flex;
  justify-content: space-between;
`

const Box = styled.div`
  width: ${props => props.width ? props.width: "auto"};;
  height: 62vh;
  background-color: #FFFFFF;
  border: 1px solid #E9E9EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Head = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
  padding: 18px 0 0 18px;
`

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4vh;
`

const Score = styled.div`
  position: absolute;
  font-size: 30px;
  top: 44vh;
  font-weight: 800;
  text-align: center;
  width: 350px;
`

const Point = styled.div`
  font-size: 40px;
  color: #FF0000;
`

const Desc = styled.div`
  margin-top: 4vh;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;
`

const Good = styled.span`
  color: #FF0000;
`


export default function SidedishSpecComponent({data}){
  return (
    <Container>
      <Box width={"40vw"}>
        <Head>
          만족도 상세 - {data.sidedish_name}
        </Head>
        <ChartWrapper>
          <div>
          <DoughnutChart 
            chartData={data.satisfy}
            width="350px"/>
          </div>
          <Score>
            평균
            <Point>
              {data.average}
            </Point>
          </Score>
        </ChartWrapper>

        <Desc>
          병사들은 <Good>높은 만족도</Good>로 먹고있어요! <br/> 훌륭하게 조리중이예요!
        </Desc>
      </Box>
      <Box width={"21vw"}>
        <Head>
          사용된 메뉴
        </Head>
      </Box>
    </Container>
  )
}