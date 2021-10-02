import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 32px;
  padding-top: 7.5vh;
  padding-left: 9vw;
  font-family: Header;
`

const MobileTempText = styled.div`
  display: none;
  @media(max-width: 800px){
    display: block;
    position: absolute;
    left: 40vw;
    top: 9vh;
    font-weight: bold;
    font-size: 22px;
  }
`

export default function TitleComponent({name}){

  return (
    <>
      <Container>
        {name}
      </Container>
      <MobileTempText>
        오늘 식사는 어떠셨나요?
      </MobileTempText>
    </>
  )
}