import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

//////////////////설문조사 페이지 CSS 시작//////////////////////////////////
import MainPic from '../static/image/restaurant.png';
import SurveyImage1 from '../static/image/score_1.png';
import SurveyImage2 from '../static/image/score_2.png';
import SurveyImage3 from '../static/image/score_3.png';
import SurveyImage4 from '../static/image/score_4.png';
import SurveyImage5 from '../static/image/score_5.png';
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
  @media(min-width: 768px) and (max-width: 1100px){
    display:none;
  }
`

const MainPictureTextTitle=styled.div`
  
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 25px;
  width: 322px;
  height: 76px;
  /* or 71% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #135019;

  position: absolute;
  top: 40px;
  left: 40px;
  @media(min-width: 768px) and (max-width: 1100px){
    display:none;
  }
`
// top: 96px;
// left: 30px;
const MainPictureText = styled(MainPictureTextTitle)`
  font-size: 22px;
  line-height: 30px;
  width: 100%;
  height: 100px;
  /* or 136% */

  color: #000000;
  text-align: left;
  position: absolute;
  top: 116px;
  left: 30px;
  @media(min-width: 768px) and (max-width: 1100px){
    display:none;
  }
`

// const SurveyImages = styled.img`
//   src: ${props => props.index === 0 && SurveyImage1};
//   width: 10vw;
 
//   ${props=>props.index === 1 && `src:../static/image/score_2.png;`}
//   ${props=>props.index === 2 && `src:../static/image/score_3.png;`}
//   ${props=>props.index === 3 && `src:../static/image/score_4.png;`}
//   ${props=>props.index === 4 && `src:../static/image/score_5.png;`}
// `

const SurveyImages1 = styled.img.attrs({
  src: SurveyImage1
})`
  width: 10vw;
  @media(min-width: 768px) and (max-width: 1100px){
    width: 12vw;
    height:11vh;
  }
`
const SurveyImages2 = styled.img.attrs({
  src: SurveyImage2
})`
  width: 10vw;
  @media(min-width: 768px) and (max-width: 1100px){
    width: 12vw;
    height:11vh;
  }
`
const SurveyImages3 = styled.img.attrs({
  src: SurveyImage3
})`
  width: 10vw;
  @media(min-width: 768px) and (max-width: 1100px){
    width: 12vw;
    height:11vh;
  }
`
const SurveyImages4 = styled.img.attrs({
  src: SurveyImage4
})`
  width: 10vw;
  @media(min-width: 768px) and (max-width: 1100px){
    width: 12vw;
    height:11vh;
  }
`
const SurveyImages5 = styled.img.attrs({
  src: SurveyImage5
})`
  width: 10vw;
  @media(min-width: 768px) and (max-width: 1100px){
    width: 12vw;
    height:11vh;
  }
`
const Message = styled.div`
  width: 70vw;
  height: 25vh;
  margin: 0px auto;

  position:relative;
  // border: 0px solid #E9E9EF;
  // box-sizing: border-box;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // border-radius: 15px;
  @media(min-width: 768px) and (max-width: 1100px){
    height: 2vh;
  }
` 

const Wrapper = styled.div`
  margin: 8vh 0vw 3vh 0vw;
  display: flex;
  justify-content: space-around;
  padding: 0px 0px;
`
const Text2 = styled.div`
  
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

  @media(min-width: 768px) and (max-width: 1100px){
    font-size:26px;
  }
`
const Survey = styled(Message)`
    
    width: 14vw;
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

  @media(min-width: 768px) and (max-width: 1100px){
    width: 18vw;
    height: 27.5vh;
  }
`

const QuitWrapper = styled.div`
    // display: inline-block;
    // vertical-align: middle;
    
    margin-top: 40px;
    margin-bottom: 0px;
    margin-right: 60px;
    text-align: -webkit-right;
  
  @media(min-width: 768px) and (max-width: 1100px){
    display:none;
  }
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
const TasteSelectionWrapper = styled.div`
  position: absolute;
  height: 40vh;
  top: 30.1vh;
  background-color: rgba(244,244,248,0.5);
  border-radius: 15px;
  padding: 6px;
  ${props => props.visible === 'worst' && `
      height: 40vh;
      top: 3.4vh;
      left: 2.6vw;
    `}
  ${props => props.visible === 'bad' && `
      height: 40vh;
      top: 3.4vh;
      left: 21.6vw;
  `}
`
const TasteSelectionBox = styled.div`

  width: 12.3vw;
  line-height: 3.8vh;
  padding-top: 0px;
  font-size: 18px;


  // width: 9.3vw;
  height: 4.3vh;
  margin-top: 0.5vh;
  
  background: #FFFFFF;
  border: 3px solid rgba(127, 200, 253, 0.87);
  box-sizing: border-box;
  border-radius: 15px;
  
  text-align: center;
  // padding-top: 7px;

  &:hover {
    border: 3px solid #86DE8A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    ${props => props.modal === true && 
      "pointer-events:none; opacity: 0.9;" 
    }
`

const SurveyWrapper = styled.div`
  width: 95%;
  position:relative; 
  ${props => props.modal === true && 
    "pointer-events:none; opacity: 0.68;" 
  }
`
////////////////설문조사 페이지 CSS 끝///////////////////////////////////////////////



/////////////////메뉴 Display 페이지 CSS 시작///////////////////////////////////////////
const Container = styled.div`
    margin-top: 3vh;
    justify-content:space-evenly;
    display: none;
    @media(max-width: 1100px) and (min-width: 768px){
      display: flex;
    }
`
const GreenBorderBoxWrapper = styled.div`
  top: 39.5vh;
  position:absolute;
`
const GreenBorderBox = styled.div`
${props => props.type !== 0 
  ? "display:none" 
  : "display:grid; width: 83vw;height: 27vh; left: 35.9vw; top: 35.9vh; background: #FFFFFF; border: 10px solid #86DE8A; box-sizing: border-box; border-radius: 20px;"
}
`

const GreenBorderBoxTitle = styled.div`
  
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 9vh;
  /* or 88% */

  display: grid;
  align-items: center;
  text-align: center;
`
const BoxWrapper = styled.div`
  display:flex;
  justify-content: space-around;
  height: auto;
`
const Box = styled.div`
    display:grid;
    position: auto;
    width: 20%;
    height: 8.5vh;

    background: #FFFFFF;

    border: 4px solid;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    &:hover {
      border: 4px solid #7FC8FD;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }

    border-color: ${props => props.score > 65 ? "#FF0000" : props.score > 32 ? "#FF6534" : props.score > 0 ? "#F1C114" : "#85859A"};
`

const Title = styled.div`
width: auto;
    height: auto;

    
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;

    display: grid;
    align-items: center;
    text-align: center;

    color: #000000;
`

const Percentage = styled.div`
width: auto;
    height: auto;

    
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;

    display: grid;
    align-items: center;
    text-align: center;

    color: #000000;

  display: grid;
  align-items: center;
  text-align: center;

  color: ${props => props.score > 65 ? "#FF0000" : props.score > 32 ? "#FF6534" : props.score > 0 ? "#F1C114" : "#85859A"};
`
const PercentageContainer = styled.div`
  // margin-top:6vh;
`

/////////////////메뉴 Display 페이지 CSS 끝///////////////////////////////////////////
const Modal = styled.div`
opacity: 1;
${props => 
  props.taste !== 8 
  ? "width: 66vw;height: 25.4vh;left: 17vw;display:flow-root;  top: 33.2vh; background: #FFFFFF; border: 10px solid #86DE8A; box-sizing: border-box; border-radius: 20px; position: absolute; " 
  : "display:none;"
}
`
const ModalTextTitle = styled.div`

line-height: 23.4vh;

font-style: normal;
font-weight: bold;
font-size: 35px;

display: inherit;
align-items: center;
text-align: center;

color: #000000;
`

export default function SatisfyComponent({todayData, type, selectType, selectTypeIdx, todayTaste, selectSatisfaction, survey, visible, modal, setModal, openModal}){
  return (
    <Container>
      <GreenBorderBoxWrapper>
        <GreenBorderBox type={type}>
          <GreenBorderBoxTitle>
            만족도 조사를 시행할 타임을 골라주세요
          </GreenBorderBoxTitle>

          <BoxWrapper>
            {type === 0 &&
              todayData.map((data,index) => {
                return (
                  
                    <Box onClick={()=>selectType(selectTypeIdx[index])} score={data.satisfy}>
                      <Title>
                          {data.type}
                      </Title>
          
                      <PercentageContainer>
                        <Percentage score={data.satisfy}>
                          {data.satisfy ? data.satisfy + "%" : "미실시"}
                        </Percentage>
                        
                      </PercentageContainer>
                    </Box>
                  
                )
              })
            }
          </BoxWrapper>
        </GreenBorderBox>
      </GreenBorderBoxWrapper>
        {type !== 0 &&
          <SurveyWrapper modal={modal}>
            <Message>
              <MainPicture/>
                <MainPictureTextTitle>
                  충성! 고생하십니다!
                </MainPictureTextTitle>
                <MainPictureText>
                  오늘의 식사는 만족스러우셨는지 아래 버튼을 통해 설문에 참여해 주십시오. 
                  <br/>
                  장병 여러분들의 소중한 평가로 더욱 만족도 높은 식단을 제공하겠습니다!
                </MainPictureText>
            </Message>            

            <Wrapper>
              {survey.map((data, index) => (
                  <Survey key={index} onClick={()=>selectSatisfaction(index)}>
                    <Text2>
                      {data.name}
                    </Text2>
                    {index===0 && <SurveyImages1/>}
                    {index===1 && <SurveyImages2/>}
                    {index===2 && <SurveyImages3/>}
                    {index===3 && <SurveyImages4/>}
                    {index===4 && <SurveyImages5/>}

                  </Survey>
              ))}
            </Wrapper>
            { visible==="worst" &&
              <TasteSelectionWrapper visible={visible}>
                {todayTaste.map((data, index) => (
                  <TasteSelectionBox key={index} modal={modal} onClick={()=> openModal([0, index + 1])}>
                    {data.taste}
                  </TasteSelectionBox>
                ))}
              </TasteSelectionWrapper>
            }

            { visible==="bad" &&
              <TasteSelectionWrapper visible={visible}>
                {todayTaste.map((data, index) => (
                  <TasteSelectionBox key={index} modal={modal} onClick={()=> openModal([1, index + 1])}>
                    {data.taste}
                  </TasteSelectionBox>
                ))}
              </TasteSelectionWrapper>
            }
            
            <QuitWrapper>
              <Quit onClick={()=>selectType(0)}>
                종료
              </Quit>
            </QuitWrapper>
          </SurveyWrapper>
        }
        {modal === true &&
              <Modal>
                <ModalTextTitle>
                  소중한 의견 감사합니다!
                </ModalTextTitle>
              
              </Modal>
          }
    </Container>
  )
}