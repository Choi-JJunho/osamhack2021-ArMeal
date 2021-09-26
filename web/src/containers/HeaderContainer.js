import React, { useEffect, useState } from 'react';
import UserBadgeComponent from 'components/UserBadgeComponent';
import TitleComponent from 'components/TitleComponent';
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

const Container = styled.div`
  width: 78vw;
  height: 15vh;
`

export default function HeaderContainer(){
  const { data } = useSelector( state => state.authReducer.auth );
  let location = useLocation();
  const [name, setName] = useState('')
  const path = location.pathname.split('/')[1];

  useEffect(()=> {
    switch(path){
      case '':
        setName('홈페이지');
        break;
      case 'dashboard':
        setName('대시보드');
        break;
      case 'satisfy':
        setName('만족도 조사');
        break;
      case 'date':
        setName('날짜별 통계');
        break;
      case 'sidedish':
        setName('부식별 통계');
        break;
      case 'menu':
        setName('메뉴별 통계');
        break;
      case 'self':
        setName('자율메뉴');
        break;
      case 'management':
        setName('식단관리 / 메모');
        break;
      default:
        setName('');
        break;
    }
  }, [path])

  return (
    <Container>
      <TitleComponent name={name}/>
      <UserBadgeComponent data={data}/>
    </Container>
  )
}