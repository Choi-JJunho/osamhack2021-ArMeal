import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-left: 4vw;
    display: inline-flex;
    width:-webkit-fill-available;
    justify-content:space-evenly;
`
const Rectangle = styled.div`
    position: auto;
    width: 274px;
    height: 608px;
    left: 295px;
    top: 149px;

    background: #FFFFFF;

    border: 1px solid #E9E9EF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const Title = styled.div`
    margin: auto;
    width: 153px;
    height: 47px;
    left: 358px;
    top: 183px;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 22px;

    display: grid;
    align-items: center;
    text-align: center;

    color: #000000;
`
const SubRectangle = styled.div`
    margin: auto;
    width: 220px;
    height: 362px;
    left: 323px;
    top: 251px;

    background: #FFFFFF;

    border: 1px solid #75CB32;
    box-sizing: border-box;
`
const SubRectangle2 = styled.div`
margin: auto;
width: 188px;
height: 332px;
left: 341px;
top: 268px;
`
const Main = styled.div`
margin: auto;
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 25px;

display: grid;
align-items: center;
text-align: center;

color: #FF2C2C;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Text = styled.div`
margin: auto;
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 25px;

display: grid;
align-items: center;
text-align: center;

color: black;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Self = styled.div`
margin: auto;
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 25px;

display: grid;
align-items: center;
text-align: center;

color: #FF7C53;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Dessert = styled.div`
margin: auto;
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 25px;

display: grid;
align-items: center;
text-align: center;

color: #0038FF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Percentage = styled.div`
margin: auto;
width: 231px;
height: 26px;
left: 315px;
top: 659px;

font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 25px;
/* or 139% */

display: grid;
align-items: center;
text-align: center;

color: #FF0000;
`
const PercentageBar = styled.div`
margin: auto;
width: 230px;
height: 18px;
left: 317px;
top: 694px;

background: #C4C4C4;
`
const PercentageBar2 = styled.div`

width: 202px;
height: 18px;
left: 317px;
top: 694px;

background: #FF0000;
`

export default function SatisfyComponent(){
  return (
    <Container>
      <Rectangle>
      <Title>
          조식
        </Title>
        <SubRectangle>
          <SubRectangle2>
            <Main>
              Main
              <Text>
                흰쌀밥
              </Text>
              <Text>
                에그스크램블
              </Text>
              <Text>
                쇠고기찌개
              </Text>
              <Text>
                오징어채
              </Text>
              <Text>
                김치
              </Text>
            </Main>
            
            <Self>
              Self
              <Text>
                -
              </Text>
            </Self>
            
            <Dessert>
              Dessert
              <Text>
                우유
              </Text>
            </Dessert>
            
          </SubRectangle2>
          
        </SubRectangle>
        <Percentage>
          87%
        </Percentage>
        <PercentageBar>
          <PercentageBar2>
            
          </PercentageBar2>
        </PercentageBar>
      </Rectangle>

      <Rectangle>

      </Rectangle>
      <Rectangle>
        
      </Rectangle>

    </Container>
  )
}