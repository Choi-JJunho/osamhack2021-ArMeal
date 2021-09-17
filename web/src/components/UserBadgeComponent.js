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
  padding: 31px 19px;
`

export default function UserBadgeComponent({data}){
  return (
    <Container>
      {data && 
        <LoggedInWrapper>
          로그인됨
        </LoggedInWrapper>
      }
      {!data && 
        <div>
          로그인안됨
          <Link to="/signin">로그인</Link>
          
          <Link to="/signup">회원가입</Link>
        </div>
      }
    </Container>
  )
}