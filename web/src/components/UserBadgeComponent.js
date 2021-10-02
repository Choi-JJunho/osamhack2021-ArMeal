import React from 'react';
import styled from 'styled-components'
import icon1lsc from '../static/image/1lsc.png';
import { ReactComponent as PlzLoginIcon } from "../static/svg/question-circle-regular.svg";

const Icon1lsc = styled.img.attrs({
  src: icon1lsc
})`
  width:50px;
  height:50px;
`

const Container = styled.div`
  position: fixed;
  top: 30px;
  left: 67vw;
  width: 30vw;
  height: 10vh;
  background-color: #FFFFFF;
  border: 5px solid #E9E9EF;
  box-sizing: border-box;
  border-radius: 10px;

  @media(max-width: 1100px){
    display:none;
  }
`

const UnLoggedInWrapper = styled.div`
  padding-top: 30px;
  padding-right: 22px;
  float:right;
  font-size:20px;
  text-align:right;
  cursor: pointer;
`

const InLoggedInWrapper = styled.div`
  padding: 20px 19px;
  float:right;
  padding-right: 40px;
  font-size:20px;
  text-align:right;
  text-align:justfiy;
`

const ImageBlank=styled.div`
  padding-top:13px;
  padding-right:22px;
  float:right;
`


export default function UserBadgeComponent({data, goLogin}){
  return (
    <Container>
      {data && 
      <>
        <ImageBlank>          
          <Icon1lsc></Icon1lsc>
        </ImageBlank>
        <InLoggedInWrapper>
          {data.name}
          <br></br>
          <strong>{data.group_id}</strong>
        </InLoggedInWrapper>
      </>
      }
      {!data && 
      <> 
        <ImageBlank>
          <PlzLoginIcon width="50px"></PlzLoginIcon>
        </ImageBlank>
        <UnLoggedInWrapper onClick={goLogin}>
          부대 계정으로 로그인을 해주세요.
        </UnLoggedInWrapper>
      </>
      }
    </Container>
  )
}

/*
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
          */