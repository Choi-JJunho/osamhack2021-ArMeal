import React from "react";
import styled from "styled-components";
import DoughnutChart from "./shared/DoughnutChart";

const Container = styled.div`
  padding: 5vh 7vw;
  display: flex;
  justify-content: space-between;
`

const Box = styled.div`
  width: ${props => props.width ? props.width: "auto"};
  height: ${props => props.height ? props.height: "auto"};
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
  margin-top: 6vh;
`

const Score = styled.div`
  position: absolute;
  font-size: 30px;
  top: 46vh;
  font-weight: 800;
  text-align: center;
  width: 350px;
`

const Point = styled.div`
  font-size: 40px;
  color: ${props => props.satisfy > 65 ? "#FF0000" : props.satisfy > 32 ? "#FF6534" : "#E7B70A"};
`

const Desc = styled.div`
  margin-top: 6vh;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;
`

const Good = styled.span`
  color: #FF0000;
`

const Lastest = styled.div`
  margin-top: 4vh;
`

const SidedishWrapper = styled.div`
  margin-top: 24px;
  padding: 0 20px;
  line-height: 60px;
  word-break: break-word;
  white-space: normal;
`

const SidedishName = styled.span`
  border: 3px solid #D54444;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 9px 10px;
  font-size: 22px;
  font-weight: 800;
  margin-right: 15px;
  cursor: pointer;
`

const Date = styled.div`
  margin-top: 14px;
`

const DateDetail = styled.div`
  border: 3px solid ${props => props.satisfy > 65 ? "#FF0000" : props.satisfy > 32 ? "#FF6534" : "#E7B70A"};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 17px;
  font-size: 18px;
  font-weight: 800;
  line-height: normal;
`

const DateSatisfy = styled.span`
  float: right;
  color: ${props => props.satisfy > 65 ? "#FF0000" : props.satisfy > 32 ? "#FF6534" : "#E7B70A"};
`

const Type = styled.span`
  margin-left: 15px;
`


export default function MenuSpecComponent({data, history}){
  
  return (
    <Container>
      <Box width="40vw" height="69vh">
        <Head>
          만족도 상세 - {data.menu_name.indexOf("(") === -1 ? data.menu_name : data.menu_name.slice(0, data.menu_name.indexOf("("))}
        </Head>
        <ChartWrapper>
          <div>
          <DoughnutChart 
            chartData={data.satisfy}
            width="350px"/>
          </div>
          <Score>
            평균
            <Point satisfy={data.average}>
              {Math.round(data.average)}%
            </Point>
          </Score>
        </ChartWrapper>

        <Desc>
          병사들은 <Good>높은 만족도</Good>로 먹고있어요! <br/> 훌륭하게 조리중이예요!
        </Desc>
      </Box>

      <div>
        <Box width="21vw" height="32vh">
          <Head>
            사용되는 부식
          </Head>
          <SidedishWrapper>
            {data.ingredient_list.map((sidedish) => {
              return (
                <SidedishName key={sidedish.id} onClick={() => history.push(`/sidedish/${sidedish.id}`)}>
                  {sidedish.name}
                </SidedishName>
              )
            })}
          </SidedishWrapper>
        </Box>

        <Lastest>
          <Box width="21vw" height="32vh">
            <Head>
              최근에 나온 날
            </Head>
            <SidedishWrapper>
              {data.lastest.map((date) => {
                return (
                  <Date>
                    <DateDetail satisfy={date.satisfy}>
                      {date.time}
                      <Type>
                      {date.type === 1? "조식" : date.type === 2? "중식" : "석식"}
                      </Type>
                      <DateSatisfy satisfy={date.satisfy}>
                        {date.satisfy}%
                      </DateSatisfy>
                    </DateDetail>
                  </Date>
                )
              })}
            </SidedishWrapper>
          </Box>
        </Lastest>
      </div>

    </Container>
  )
}