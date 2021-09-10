import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  
`

const Box = styled.div`
  width: 69vw;
  background-color: #FFFFFF;
  border: 1px solid #E9E9EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 
`

const Head = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
`

export default function DashboardComponent(){
  return (
    <Container>
      <Box>
        <Head>
          금일 만족도
        </Head>
      </Box>
      
      <Box>
      </Box>
    </Container>
  )
}