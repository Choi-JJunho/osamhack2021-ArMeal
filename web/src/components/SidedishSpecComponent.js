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
  height: 69vh;
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
  color: #FF0000;
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

const Switch = styled.span`
  float: right;
  padding-right: 10px;
`

const Label = styled.label`
  font-size: 18px;
  padding: 0 5px 0 20px;
`

const MenuList = styled.div`
  padding: 10px 18px 0 18px;
`

const Menu = styled.div`
  margin-top: 15px;
`

const Time = styled.div`
  font-size: 15px;
  font-style: italic;
`

const MenuDetail = styled.div`
  border: 3px solid ${props => props.satisfy > 65 ? "#FF0000" : props.satisfy > 32 ? "#FF6534" : "#E7B70A"};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 17px;
  font-size: 20px;
  font-weight: 800;
`

const MenuSatisfy = styled.span`
  float: right;
  color: ${props => props.satisfy > 65 ? "#FF0000" : props.satisfy > 32 ? "#FF6534" : "#E7B70A"};
`

export default function SidedishSpecComponent({data, order, setOrder, history}){
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
          <Switch>
            <Label htmlFor="lastest">최신순</Label>
            <input type="radio" name="orderby" id="lastest" checked={order === 0} onChange={() => setOrder(0)}></input>

            <Label htmlFor="satisfy">만족도순</Label>
            <input type="radio" name="orderby" id="satisfy" checked={order === 1} onChange={() => setOrder(1)}></input>
          </Switch>
        </Head>

        <MenuList>
          {data.menu_list.map((menu) => {
            return (
              <Menu onClick={() => history.push(`/menu/${menu.id}`)}>
                <Time>{menu.lastest}</Time>
                <MenuDetail satisfy={menu.satisfy}>
                  {menu.name}
                  <MenuSatisfy satisfy={menu.satisfy}>{menu.satisfy}%</MenuSatisfy>
                </MenuDetail>
              </Menu>
            )
          })}
        </MenuList>
      </Box>
    </Container>
  )
}