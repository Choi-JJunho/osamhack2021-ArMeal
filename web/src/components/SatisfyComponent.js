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
`
const MainPictureTextTitle=styled.div`
  font-family: Inter;
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
`
const SurveyImages2 = styled.img.attrs({
  src: SurveyImage2
})`
  width: 10vw;
`
const SurveyImages3 = styled.img.attrs({
  src: SurveyImage3
})`
  width: 10vw;
`
const SurveyImages4 = styled.img.attrs({
  src: SurveyImage4
})`
  width: 10vw;
`
const SurveyImages5 = styled.img.attrs({
  src: SurveyImage5
})`
  width: 10vw;
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
const TasteSelectionWrapper = styled.div`
  position: absolute;
  height: 40vh;
  top: 30.1vh;
  
  ${props => props.visible === 'worst' && `
      left: 2.7vw;
    `}
  ${props => props.visible === 'bad' && `
      left: 17.5vw;
  `}
`
const TasteSelectionBox = styled.div`
  width: 9.3vw;
  height: 4.3vh;
  margin-top: 0.5vh;
  
  background: #FFFFFF;
  border: 3px solid rgba(127, 200, 253, 0.87);
  box-sizing: border-box;
  border-radius: 15px;
  
  text-align: center;
  padding-top: 7px;

  &:hover {
    border: 3px solid #86DE8A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

const SurveyWrapper = styled.div`
  width: 95%;
  position:relative; 
`
////////////////설문조사 페이지 CSS 끝///////////////////////////////////////////////



/////////////////메뉴 Display 페이지 CSS 시작///////////////////////////////////////////
const Container = styled.div`
    margin-top: 3vh;
    display: flex;
    justify-content:space-evenly;
`
const GreenBorderBoxWrapper = styled.div`
  top: 39.5vh;
  position:absolute;
`
const GreenBorderBox = styled.div`
${props => props.type !== 0 
  ? "display:none" 
  : "display:grid; width: 50vw; height: 239px; left: 35.9vw; top: 35.9vh; background: #FFFFFF; border: 10px solid #86DE8A; box-sizing: border-box; border-radius: 20px;"
}
`

const GreenBorderBoxTitle = styled.div`
  font-family: Inter;
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
    width: auto;
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
    width: 10vw;
    height: auto;

    font-family: Inter;
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
  width: 10vw;
    height: auto;

    font-family: Inter;
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
function Modal({ className, visible, children }) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
function ModalPage() {
  return (
    <Modal visible={true}>Hello</Modal>
  )
}

export default function SatisfyComponent({todayData, type, selectType, selectTypeIdx, todayTaste, selectSatisfaction, survey, visible}){
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
          <SurveyWrapper>
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
                  <Survey onClick={()=>selectSatisfaction(index)}>
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
                {todayTaste.map((data) => (
                  <TasteSelectionBox>
                    {data.taste}
                  </TasteSelectionBox>
                ))}
              </TasteSelectionWrapper>
            }

            { visible==="bad" &&
              <TasteSelectionWrapper visible={visible}>
                {todayTaste.map((data) => (
                  <TasteSelectionBox>
                    {data.taste}
                  </TasteSelectionBox>
                ))}
              </TasteSelectionWrapper>
            }
            
            <QuitWrapper>
              <Quit>
                종료
              </Quit>
            </QuitWrapper>
          </SurveyWrapper>
        }
    </Container>
  )
}