import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import icon1lsc from '../static/image/1lsc.png';
import iconchoi from '../static/image/최예나.jpg';


const Icon1lsc = styled.img.attrs({
  src: icon1lsc
})`
  width:50px;
  height:50px;
  padding-top:15px;
  padding-right:30px;
`

const IconChoi = styled.img.attrs({
  src: iconchoi
})`
  width:50px;
  height:50px;
  padding-top:15px;
  padding-right:30px;
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
`

const UnLoggedInWrapper = styled.div`
  padding: 30px 19px;
  float:right;
  padding-right: 40px;
  font-size:20px;
  text-align:right;
  text-align:justfiy;
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
  float:right;
`


export default function UserBadgeComponent({data}){
  return (
    <Container>
      {data && 
      <>
        <ImageBlank>          
          <Icon1lsc></Icon1lsc>
        </ImageBlank>
        <InLoggedInWrapper>
          1군수지원사령부 수도군수지원단
          <br></br>
          <strong>1896부대</strong>
        </InLoggedInWrapper>
      </>
      }
      {!data && 
      <> 
        <ImageBlank>
          <IconChoi></IconChoi>
        </ImageBlank>
        <UnLoggedInWrapper>
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