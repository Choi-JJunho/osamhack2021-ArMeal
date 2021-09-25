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

const LoggedInWrapper = styled.div`
  padding: 10px 19px;
`

const ImageBlank=styled.div`
  float:right;
`

export default function UserBadgeComponent({data}){
  return (
    <Container>
      {!data && 
        <LoggedInWrapper>
          1군수지원 사령부
          <ImageBlank>          
            <img width="60" height="60" alt="최예나" src="img/최예나.jpg"/>
          </ImageBlank>
          <br></br>
          수도군지단
        </LoggedInWrapper>
      }
      {data && 
        <LoggedInWrapper>
          부대계정으로 로그인 해주세요.
          <ImageBlank>
            <img width="50" height="50" alt="1" src="img/1.jpg"/>
          </ImageBlank>
        </LoggedInWrapper>
      }
    </Container>
  )
}

/*
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
          */