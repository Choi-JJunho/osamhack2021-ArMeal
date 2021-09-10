import React from 'react';
import styled from 'styled-components'
import {MainBox} from 'components/SigninComponent'
import {Link} from 'react-router-dom';

const Container = styled.div`
    margin-left: 4vw;

`

const SignUpTitle = styled.div`
	margin-top: 36px;
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	text-align:center;
 
	color: #1A61BD;
`

const IDIndex = styled.div`
	margin-top:1vh;
	width: 102px;
	font-size: 20px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #000000;
`
const PWIndex = styled.div`
	padding-top:8vh;
	width: 110px;
	font-size: 19px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #000000;
`

const PWIndexC = styled.div`
	padding-top:2vh;
	width: 110px;
	font-size: 19px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #000000;
`

const InputField = styled.div`
	
	width: 47vw;
	font-size: 10px;
	line-height: 0.1vh;
	background: #E5E5E5;
	border-radius: 10px;
	border:0 solid black;
`

const IdInputField = styled.div`
	
	width: 34vw;
	font-size: 10px;
	line-height: 0.1vh;
	background: #E5E5E5;
	border-radius: 10px;
	border:0 solid black;
`

const S_InputField = styled.div`
	
	width: 22vw;
	font-size: 10px;
	line-height: 1vh;
	background: #E5E5E5;
	border:0 solid black;
	border-radius: 10px;
`

const S_InputFieldv2 = styled.div`
	width: 22vw;
	font-size: 10px;
	line-height: 1vh;
	background: #E5E5E5;
	border:0 solid black;
	border-radius: 10px;
	float:right;
`

	

const Input = styled.input`
	border:none;
	background:none;
	line-height: 22px;
	outline: none;
	font-size: 24px;
	padding: 23px 0 23px 15px; 
	width:47vw;
	font-family: ${props => props.isPassword ? "serif" : "NanumSquare"};
`

const S_Input = styled.input`
	border:none;
	background:none;
	line-height: 22px;
	outline: none;
	font-size: 24px;
	padding: 23px 0 23px 15px; 
	width:15vw;
	font-family: ${props => props.isPassword ? "serif" : "NanumSquare"};
`

const S_Input2 = styled.input`
	border:none;
	background:none;
	line-height: 22px;
	outline: none;
	font-size: 24px;
	padding: 23px 0 23px 15px; 
	width:15vw;
	font-family: ${props => props.isPassword ? "serif" : "NanumSquare"};

`

const IdInput = styled.input`
	border:none;
	background:none;
	line-height: 22px;
	outline: none;
	font-size: 24px;
	padding: 23px 0 23px 15px; 
	width:25vw;
	font-family: ${props => props.isPassword ? "serif" : "NanumSquare"};
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
`

const SignupButton = styled.button`
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
    transform: scale(1.01);
  }
	font-weight: bold;
	font-size: 36px;
	padding-left: 152px;
	align-items: center;
	text-align: center;
	color: #FFFFFF;
`

const Field=styled.div`
	height:4vh;
	width: 32vw;
`

const DoubleCheck=styled.button`
	height:6vh;
	
	width:8vw;
	float:right;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-color:#86DE8A;
	background-color:white;
	font-size: 22px;
	line-height: 22px;	
	align:"right";
`

const IdField=styled.div`
	width: 47vw;
;

`

const Corps=styled.div`
	width: 10vw;

`

const AssociationCorps=styled.div`
	width: 20vw;
	float:right;
`

const MilitarySection=styled.div`
	width: 47vw;
	height: 10vh;
`

const AllFiled=styled.div`

`

export default function SignupComponent(){
  return (
    <Container>
			<MainBox>
      	<SignUpTitle>회원가입</SignUpTitle>
				<IdField>
					<Field>
						<IDIndex>아이디</IDIndex>
						<IdInputField>
							<IdInput type="id"></IdInput>
						</IdInputField>
					</Field>
					<DoubleCheck>중복확인</DoubleCheck>

				</IdField>
				<PWIndex>비밀번호</PWIndex>
				<InputField>
					<Input type="password" isPassword={true}></Input>
				</InputField>
				<PWIndexC>비밀번호 확인</PWIndexC>
				<InputField>
					<Input type="password" isPassword={true}></Input>
				</InputField>
				<MilitarySection>
					<Corps>부대명</Corps>
					<AssociationCorps>소속부대</AssociationCorps>
					<AllFiled>
						<S_InputField>
							<S_Input></S_Input>
						</S_InputField>
						<S_InputFieldv2>
							<S_Input2></S_Input2>
						</S_InputFieldv2>
					</AllFiled>
				</MilitarySection>
				<Link to="/signin">
					<SignupButton>회원가입</SignupButton>
				</Link>
				
			</MainBox>
    </Container>
  )
}