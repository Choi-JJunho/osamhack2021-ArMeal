import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  padding: 34px 19px;
  float:right;
  padding-right: 70px;
  font-size:20px;
  text-align:right;
  text-align:justfiy;
`

const InLoggedInWrapper = styled.div`
  padding: 15px 19px;
  float:right;
  padding-right: 70px;
  font-size:20px;
  text-align:right;
  text-align:justfiy;
`

const ImageBlank=styled.div`
  float:right;
  padding-left: 20px;
`

export default function UserBadgeComponent({data}){
  return (
    <Container>
      {data && 
        <InLoggedInWrapper>
          1군수지원사령부 수도군수지원단
          <ImageBlank>          
            <img width="100" height="60" alt="최예나" src="img/최예나.jpg"/>
          </ImageBlank>
          <br></br>
          <strong>1896부대</strong>
        </InLoggedInWrapper>
      }
      {!data && 
        <UnLoggedInWrapper>
          부대 계정으로 로그인을 해주세요.
          <ImageBlank>
            <img width="50" height="50" alt="1" src="img/1.jpg"/>
          </ImageBlank>
        </UnLoggedInWrapper>
      }
    </Container>
  )
}

/*
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
          */