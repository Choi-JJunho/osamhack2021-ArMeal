import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-top: 7.5vh;
  padding-left: 9vw;
`

export default function TitleComponent({name}){

  return (
    <Container>
      {name}
    </Container>
  )
}