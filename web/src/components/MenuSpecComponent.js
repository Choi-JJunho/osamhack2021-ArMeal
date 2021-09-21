import React from "react";
import styled from "styled-components";
import DoughnutChart from "./shared/DoughnutChart";

const Container = styled.div`
  padding: 5vh 7vw;
  display: flex;
  justify-content: space-between;
`
export default function MenuSpecComponent({data}){
  return (
    <Container>
      {data.menu_name}
    </Container>
  )
}