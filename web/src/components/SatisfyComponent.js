// import { getOwnPropertyDescriptors } from 'immer/dist/internal';
import React from 'react';
import styled from 'styled-components'
import TempComponent from './TempComponent';

const Container = styled.div`
    margin-top: 3vh;
    // display: flow-root;
    display: flex;
    // width:-webkit-fill-available;
    justify-content:space-evenly;
`
const Rectangle = styled.div`
    position: auto;
    width: 22vw;
    height: 76vh;

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
    width: 18vw;
    height: 45vh;

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
  margin: 0px 10px 10px 10%;
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

  color: ${props => props.score > 65 ? "#FF0000" : props.score > 32 ? "#FF6534" : "#F1C114"};
`
const PercentageContainer = styled.div`
  margin-top:6vh;
`
const Bar = styled.div`
  margin: auto;
  width: 19vw;
  
  background: #C4C4C4;
`
//width: ${props => props.score? score + "px": 0}

const ScoreBar = styled.div`
  background-color: ${props => props.score > 65 ? "#FF0000" : props.score > 32 ? "#FF6534" : "#F1C114"};
  width: ${props => props.score ? props.score + "%" : 0};
  height: 18px;
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
function MenuList(props){
    return(
      <Menu>
        <MainList title= "Main" menu={props.menu}/>
        <SelfList title="Self"/>
        <DessertList title="Dessert"/>
      </Menu>
    ) 
}

// function ScoreContainer(props){
//   return(
//     <PercentageContainer>
//       <Percentage>
//         {props.percentage}
//       </Percentage>
//       <Bar>
//         <ScoreBar score="30"/>
//       </Bar>
//     </PercentageContainer>
//   )
// }

// function Box(props){
//     return(
//       <Rectangle>
//         <Title>
//             {props.data.type}
//         </Title>

//         <GreenBorder>
//           <MenuList/>
//         </GreenBorder>

//         <PercentageContainer>
//           <Percentage>
//             {props.data.satisfy}%
//           </Percentage>
//           <Bar>
//             <ScoreBar/>
//           </Bar>
//         </PercentageContainer>
//       </Rectangle>
//     )
//   }

export default function SatisfyComponent({todayData}){
  return (
    <Container>
      {/* <TempComponent/> */}
      {/* <Box title="조식" score="87" result="87"/>
      <Box title="중식" score="62" result="62"/>
      <Box title="석식" score="30" result="30"/> */}
      {todayData.map((data) => {
        return (
          <Rectangle>
            <Title>
                {data.type}
            </Title>

            <GreenBorder>
              <MenuList menu={data}/>
            </GreenBorder>

            <PercentageContainer>
              <Percentage score={data.satisfy}>
                {data.satisfy}%
              </Percentage>
              <Bar>
                <ScoreBar score={data.satisfy}/>
              </Bar>
            </PercentageContainer>
          </Rectangle>
        )
      })}
    </Container>
  )
}