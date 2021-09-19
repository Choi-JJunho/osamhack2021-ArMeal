import styled from 'styled-components';
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
const Text = styled.div`
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
// const TitleText = styled(Text)`
//   color: #135019;
//   padding-left: 4vw;
//   justify-content: flex-start;
// `
// const SubTitleText = styled(Text)`
//   font-size: 19px;
//   color: #000000;
//   padding: 0px 3vw;
//   justify-content: flex-start;
// `
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


function WrapperContent(){
  return(
    <Wrapper>
      <Survey>
        <Text>
          싫어요
        </Text>
        <Selection_1/>
      </Survey>
      <Survey>
        <Text>
          별로에요
        </Text>
        <Selection_2/>
      </Survey>
      <Survey>
        <Text>
          보통이에요
        </Text>
        <Selection_3/>
      </Survey>
      <Survey>
        <Text>
          맛있어요
        </Text>
        <Selection_4/>
      </Survey>
      <Survey>
        <Text>
          최고에요
        </Text>
        <Selection_5/>
      </Survey>
    </Wrapper>
  )
}

export default function TempComponent({type, selectType}) {
    return (
      <div>
        {type == 0 &&
          <div>
            {/* <Box onClick={selectType(1)}>1번박스</Box>
            <Box onClick={selectType(2)}>2번박스</Box>
            <Box onClick={selectType(3)}>3번박스</Box> */}
            
          </div>
        }
        {type != 0 &&
          <div>
            <Message>
              <MainPicture/>
            </Message>

            <WrapperContent/>
            
            <QuitWrapper>
              <Quit>
                종료
              </Quit>
            </QuitWrapper>
          </div>
        }
      </div>
    )
  }