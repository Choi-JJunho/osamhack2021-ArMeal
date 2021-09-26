import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 32px;
  padding-top: 7.5vh;
  padding-left: 9vw;
  font-family: Header;
`

export default function TitleComponent({name}){

  return (
    <Container>
      {name}
    </Container>
  )
}