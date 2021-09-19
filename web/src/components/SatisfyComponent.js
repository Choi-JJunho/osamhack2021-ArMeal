import React from 'react';
import styled from 'styled-components'

//////////////////설문조사 페이지 CSS 시작//////////////////////////////////
import Score_1 from '../static/image/score_1.png';
import Score_2 from '../static/image/score_2.png';
import Score_3 from '../static/image/score_3.png';
import Score_4 from '../static/image/score_4.png';
import Score_5 from '../static/image/score_5.png';
import MainPic from '../static/image/welcome.png';

const MainPicture = styled.img.attrs({
  src: MainPic
})`
  width: 70vw;
  height: 27vh;
  margin: 0px auto;
  display: block;
`
const Selection_1 = styled.img.attrs({
  src: Score_1
})`
  width: 10vw;
`
const Selection_2 = styled.img.attrs({
  src: Score_2
})`
  width: 10vw;
`
const Selection_3 = styled.img.attrs({
  src: Score_3
})`
  width: 10vw;
`
const Selection_4 = styled.img.attrs({
  src: Score_4
})`
  width: 10vw;
`
const Selection_5 = styled.img.attrs({
  src: Score_5
})`
  width: 10vw;
`
const Message = styled.div`
  width: 70vw;
  height: 25vh;
  margin: 0px auto;
  // border: 0px solid #E9E9EF;
  // box-sizing: border-box;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // border-radius: 15px;

` 

const Wrapper = styled.div`
  margin: 8vh 0vw 3vh 0vw;
  display: flex;
  justify-content: space-around;
  padding: 0px 0px;
`
const Text2 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 25px;

  display: flex;
  // align-items: center;
  // text-align: center;
  
  color: #000000;

  justify-content: center;
  padding: 4vh 0vw;
`
const Survey = styled(Message)`
    width: 13vw;
    height: 33vh;
    margin: auto;

    background: #FFFFFF;
    border: 3px solid #D9D9D9;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
    border: 3px solid #86DE8A;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // border-radius: 10px;
    }

    text-align: center;
`

const QuitWrapper = styled.div`
    // display: inline-block;
    // vertical-align: middle;
    
    margin-top: 40px;
    margin-bottom: 0px;
    margin-right: 60px;
    text-align: -webkit-right;
`
const Quit = styled.div`
  padding: 5px;
  color:white;
  background:#75CB32;
  width: 70px;
  height: 35px;
  box-sizing: border-box;

  border: 3px solid #D9D9D9;
  border-radius: 10px;
  text-align: center;

  &:hover {
    border: 3px solid #86DE8A;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    }
`
////////////////설문조사 페이지 CSS 끝///////////////////////////////////////////////



/////////////////메뉴 Display 페이지 CSS 시작///////////////////////////////////////////
const Container = styled.div`
    margin-top: 3vh;
    // display: flow-root;
    display: flex;
    // width:-webkit-fill-available;
    justify-content:space-evenly;
`
const Box = styled.div`
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

/////////////////메뉴 Display 페이지 CSS 끝///////////////////////////////////////////


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

function WrapperContent(props){
  return(
    <Wrapper>
      <Survey>
        <Text2>
          싫어요
        </Text2>
        <Selection_1/>
      </Survey>
      <Survey>
        <Text2>
          별로에요
        </Text2>
        <Selection_2/>
      </Survey>
      <Survey>
        <Text2>
          보통이에요
        </Text2>
        <Selection_3/>
      </Survey>
      <Survey>
        <Text2>
          맛있어요
        </Text2>
        <Selection_4/>
      </Survey>
      <Survey>
        <Text2>
          최고에요
        </Text2>
        <Selection_5/>
      </Survey>
    </Wrapper>
  )
}

export default function SatisfyComponent({todayData, type, selectType, selectTypeIdx, dataName}){
  return (
    <Container>
      
      {type == 0 &&
        todayData.map((data,index) => {
          return (
            <Box onClick={()=>selectType(selectTypeIdx[index])}>
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
            </Box>
          )
        })
      }
      
        {type != 0 &&
          <div>
            <Message>
              <MainPicture/>
            </Message>

            <WrapperContent selection={dataName}/>
            
            <QuitWrapper>
              <Quit>
                종료
              </Quit>
            </QuitWrapper>
          </div>
        }
    </Container>
  )
}