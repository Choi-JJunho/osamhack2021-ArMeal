import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5vh 7vw;
`

const Box = styled.div`
  width: 40vw;
  height: 62vh;
  background-color: #FFFFFF;
  border: 1px solid #E9E9EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Head = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
  padding: 18px 0 0 18px;
`

export default function SpecComponent({data}){
  return (
    <Container>
      <Box>
        <Head>
          만족도 상세
        </Head>
        {data.sidedish_name}
      </Box>
    </Container>
  )
}