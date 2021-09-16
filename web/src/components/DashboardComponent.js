import React from 'react';
import styled from 'styled-components'
import DoughnutChart from './shared/DoughnutChart';

const Container = styled.div`
  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  padding: 0 4vw;
  margin-top: ${props => props.margin ? props.margin : 0};
`

const Box = styled.div`
  width: ${props => props.width ? props.width : 0};
  height: ${props => props.height ? props.height : "auto"};
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
`

const Score = styled.div`
  position: absolute;
  font-size: 30px;
  top: 320px;
  font-weight: 800;
  text-align: center;
`

const Point = styled.div`
  font-size: 40px;
  color: #FF0000;
`

export default function DashboardComponent({chartData, average}){

  return (
    <Container>
      <Wrapper>
        <Box width="45vw" height="47vh">
          <Head>
            전체 만족도
          </Head>
          <ChartWrapper>
            <div>
              <DoughnutChart chartData={chartData} width="350px"/>
            </div>
            <Score>
              평균
              <Point>
                {average}
              </Point>
            </Score>
          </ChartWrapper>
        </Box>
        <Box width="20vw" height="47vh">
          <Head>
            메뉴 랭킹
          </Head>
        </Box>
      </Wrapper>
      
      <Wrapper margin="28px">
        <Box width="70vw" height="28vh">
          <Head>
            금일 만족도
          </Head>
        </Box>
      </Wrapper>
    </Container>
  )
}