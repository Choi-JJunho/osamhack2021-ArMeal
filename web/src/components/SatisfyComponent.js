import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 8vh;
    display: flex;
    width:-webkit-fill-available;
    justify-content:space-evenly;
`
const Rectangle = styled.div`
    position: auto;
    width: 22vw;
    height: 70vh;

    background: #FFFFFF;

    border: 1px solid #E9E9EF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    &:hover {
      border: 5px solid #7FC8FD;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
`

const Title = styled.div`

  padding-top: 4vh;
  padding-bottom: 4vh;

    margin: auto;
    width: 10vw;
    height: 47px;

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
const GreenBorder = styled.div`
    margin: auto;
    width: 80%;
    height: 362px;

    background: #FFFFFF;

    border: 1px solid #75CB32;
    box-sizing: border-box;

/* text style */

    margin: auto;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;

    display: grid;
    align-items: center;
    text-align: center;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Menu = styled.div`
  margin: auto;
  width: 15vw;
  height: 332px;
`
const Main = styled.div`
  color: #FF2C2C;
  padding-bottom: 2vh;
  padding-top: 2vh;
`
const TextContainer = styled.div`
  margin-top:1vh;
`
const Text = styled.div`
    color: black;
`
const Self = styled.div`
  color: #FF7C53;
  padding-bottom: 1vh;
`
const Dessert = styled.div`
  color: #0038FF;
  padding-bottom: 1vh;

`

const Percentage = styled.div`
  margin: auto;
  width: 80%;
  height: 26px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  display: grid;
  align-items: center;
  text-align: center;

  color: #FF0000;
`
const PercentageContainer = styled.div`
  margin-top:4vh;
`
const Bar = styled.div`
  margin: auto;
  width: 80%;
  height: 18px;
  background: #C4C4C4;
`
//width: ${props => props.score? score + "px": 0}

const ScoreBar = styled.div`
  width: 80%;
  height: 18px;
  background: #FF0000;
`
function MainList(props){
  return (
    <Main>
      {props.title}
      <TextContainer>
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
      </TextContainer>
    </Main>
  )
}
function SelfList(props){
  return (
    <Self>
      {props.title}
      <TextContainer>
        <Text>
          -
        </Text>
      </TextContainer>
    </Self>
  )
}
function DessertList(props){
  return (
    <Dessert>
      {props.title}
      <TextContainer>
        <Text>
          우유
        </Text>
      </TextContainer>
    </Dessert>
  )
}
function MenuList(){
    return(
      <Menu>
        <MainList title="Main"/>
        <SelfList title="Self"/>
        <DessertList title="Dessert"/>
      </Menu>
    ) 
}

function ScoreContainer(props){
  return(
    <PercentageContainer>
      <Percentage>
        {props.percentage}
      </Percentage>
      <Bar>
        <ScoreBar/>
      </Bar>
    </PercentageContainer>
  )
}

function Box(props){
    return(
      <Rectangle>
        <Title>
            {props.title}
        </Title>

        <GreenBorder>
          <MenuList/>
        </GreenBorder>

        <ScoreContainer percentage="87%"/>
      </Rectangle>
    )
  }

export default function SatisfyComponent(){
  return (
    <Container>
      <Box title="조식"/>
      <Box title="중식"/>
      <Box title="석식"/>
    </Container>
  )
}