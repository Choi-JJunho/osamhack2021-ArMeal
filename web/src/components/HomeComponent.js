import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  
`

export default function HomeComponent({loading}){
  if(loading) return <Container>LoginLoading...</Container>
  return (
    <Container>
      Home
    </Container>
  )
}