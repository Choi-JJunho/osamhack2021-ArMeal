import React from 'react';
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
  margin-left: 4vw;
`

const LoginTitle = styled.div`
	margin-top: 52px;
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	text-align:center;
 
	color: #1A61BD;
`

export const MainBox = styled.div`
	width: 71vw;
	height: 76vh;
	background: #FFFFFF;
	border: 3px solid #E9E9EF;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 0 12vw;
`

const IDIndex = styled.div`
	margin-top:43px;
	width: 102px;
	font-size: 20px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #000000;
`
const PWIndex = styled.div`
	margin-top:71px;
	width: 102px;
	font-size: 20px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #000000;
`

const InputField = styled.div`
	
	width: 47vw;
	font-size: 10px;
	line-height: 1vh;
	background: #E5E5E5;
	border-radius: 10px;
	border:0 solid black;
`

const Input = styled.input`
	border:none;
	background:none;
	line-height: 22px;
	outline: none;
	font-size: 24px;
	padding: 23px 0 23px 15px; 
	width:45vw;
	font-family: ${props => props.isPassword ? "serif" : "NanumSquare"};

  &::placeholder {
    font-family: "NanumSquare";
  }
`

const Sub = styled.div`
	margin-top: 4vh;
`

const Label = styled.label`
	margin-left:1vw;
	width: 10vw;
	height: 34px;
	
	font-size: 20px;
	line-height: 22px;

	color: #85859A;
	cursor: pointer;
`
const SignUpText = styled.div`
	font-size: 25px;
	float: right;
	color: #4286F5;

  &:hover{
    text-decoration: underline;
  }
`
const Active = css`
  path {
    fill: #86DE8A;
  }
  transform: scale(1.01);
  
`

const LoginButton = styled.button`
	margin-top:2vh;
 	margin-bottom:14vh;
	padding-right:158px;
	width: 47vw;
	height: 8vh;
	background: #4286F5;
	border: 1px solid #437DD1;
	box-sizing: border-box;
	border-radius: 10px;
	cursor: pointer;
	&:hover{
    ${Active};
  }
	font-weight: bold;
	font-size: 36px;
	padding-left: 152px;
	align-items: center;
	text-align: center;
	color: #FFFFFF;
`



const Checkbox = styled.input`
	// display:none;
	color: #fa3062;
	cursor: pointer;
`


export default function SigninComponent(){
  return (
    <Container>
			<MainBox>
				<LoginTitle>부대 계정으로 로그인</LoginTitle>
				
        <form>
          <IDIndex>ID</IDIndex>
          <InputField>
            <Input isPassword={false} placeholder="아이디를 입력하세요."></Input>
          </InputField>
          <PWIndex>PASSWORD</PWIndex>
          <InputField>
            <Input type="password" isPassword={true} placeholder="비밀번호를 입력하세요."></Input>
          </InputField>
          <Sub>
            <Checkbox type="checkbox" id="auto"/>
            <Label htmlFor="auto">자동 로그인</Label>
            <Link to='/signup'>
              <SignUpText>회원가입</SignUpText>
            </Link>
          </Sub>

          <LoginButton>
            로그인
          </LoginButton>
        </form>
			</MainBox>
    </Container>
  )
}