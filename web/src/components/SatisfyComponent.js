import React from 'react';
import styled from 'styled-components'

//////////////////설문조사 페이지 CSS 시작//////////////////////////////////
import MainPic from '../static/image/restaurant.png';
// import survey from '../containers/SatisfyContainer';

const MainPicture = styled.img.attrs({
  src: MainPic
})`
  width: 70vw;
  height: 27vh;
  margin: 0px auto;
  display: block;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius:15px;
  opacity: 0.25;
`
const MainPictureTextTitle=styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 25px;
  /* or 71% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #135019;

  position: absolute;
    top: 26px;
    left: 30px;
`
const SurveyImages = styled.img`
  width: 10vw;
`

// const SurveyImages_2 = styled.img.attrs({
//   src: Score_2
// })`
//   width: 10vw;
// `
// const SurveyImages_3 = styled.img.attrs({
//   src: Score_3
// })`
//   width: 10vw;
// `
// const SurveyImages_4 = styled.img.attrs({
//   src: Score_4
// })`
//   width: 10vw;
// `
// const SurveyImages_5 = styled.img.attrs({
//   src: Score_5
// })`
//   width: 10vw;
// `
const Message = styled.div`
  width: 70vw;
  height: 25vh;
  margin: 0px auto;

  position:relative;
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
      {props.survey.map((data) => (
      <Survey>
        <Text2>
          {data.name}
        </Text2>
        <SurveyImages src={data.link}/>
      </Survey>
      ))}
{/* 
      <Survey>
        <Text2>
          {props.survey[1]}
        </Text2>
        <SurveyImages_2/>
      </Survey>
      <Survey>
        <Text2>
          {props.survey[2]}
        </Text2>
        <SurveyImages_3/>
      </Survey>
      <Survey>
        <Text2>
          {props.survey[3]}
        </Text2>
        <SurveyImages_4/>
      </Survey>
      <Survey>
        <Text2>
          {props.survey[4]}
        </Text2>
        <SurveyImages_5/>
      </Survey> */}
    </Wrapper>
  )
}

export default function SatisfyComponent({todayData, type, selectType, selectTypeIdx, todayTaste, taste, selectTaste, selectSurveyIdx, survey}){
  return (
    <Container>
      
      {type === 0 &&
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
      
        {type !== 0 &&
          <div>
            <Message>
              <MainPicture>
                
              </MainPicture>
              <MainPictureTextTitle>
                  충성! 고생하십니다!
                </MainPictureTextTitle>
            </Message>

            <WrapperContent survey={survey} selectTaste={selectTaste} selectSurveyIdx={selectSurveyIdx}/>
            
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