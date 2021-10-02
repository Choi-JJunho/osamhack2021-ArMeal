import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoImg from '../static/image/logo.png';
import { ReactComponent as SmileIcon } from "../static/svg/smile-solid.svg";
import { ReactComponent as DashBoardIcon } from "../static/svg/th-large-solid.svg";
import { ReactComponent as DateIcon } from "../static/svg/calendar-alt-solid.svg";
import { ReactComponent as SideDishIcon } from "../static/svg/fish-solid.svg";
import { ReactComponent as FreeMenuIcon } from "../static/svg/drumstick-bite-solid.svg";
import { ReactComponent as FreeManagedSidedishIcon } from "../static/svg/apple-alt-solid.svg";
import { ReactComponent as ManagementIcon } from "../static/svg/clipboard-list-solid.svg";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 100vh;
  background-color: #FFFFFF;
  border: 5px solid #E9E9EF;
  box-sizing: border-box;
  
  @media(max-width: 800px){
    display:none;
  }
`

const Logo = styled.img.attrs({
  src: LogoImg
})`
  margin-top: 7vh;
  margin-bottom: 9vh;
  width: 16vw;
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 18vw;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
`

const Active = css`
  path {
    fill: #86DE8A;
  }
  transform: scale(1.1);
  color: #0F0F0F;
  font-weight: 900;
`

const NavLink = styled(Link)`
  path {
    fill: #85859A;
  }
  width: 100%;
  height: 5vh;
  color: #85859A;
  font-weight: 500;
  padding-left: 4vw;
  margin-bottom: 4vh;
  text-decoration: none;
  cursor: pointer;
  transition: 0.1s;
  
  &:hover{
    ${Active};
  }

  ${props => props.selected ? `${Active}` : ""};
`

const NavIcon = styled.div`
  height: 25px;
  float: left;
`

const NavText = styled.div`
  position: relative;
  top: 2px;
  margin-left: 4vw;
`

export default function NavComponent({curr}){
  return (
    <Container>
      <Logo />
      <NavigationContainer>

        <NavLink to="/dashboard" selected={ curr === 1 }>
          <NavIcon> <DashBoardIcon width="28px"/> </NavIcon>
          <NavText> 대시보드 </NavText>
        </NavLink>

        <NavLink to="/satisfy" selected={ curr === 2 }>
          <NavIcon> <SmileIcon width="28px"/> </NavIcon>
          <NavText> 만족도 조사 </NavText>
        </NavLink>

        <NavLink to="/date" selected={ curr === 3 }>
          <NavIcon> <DateIcon width="28px" /> </NavIcon>
          <NavText> 날짜별 통계 </NavText>
        </NavLink>
        
        <NavLink to="/sidedish" selected={ curr === 4 }>
          <NavIcon> <SideDishIcon width="30px" /> </NavIcon>
          <NavText> 부식별 통계 </NavText>
        </NavLink>
        
        <NavLink to="/menu" selected={ curr === 5 }>
          <NavIcon> <FreeMenuIcon width="28px" /> </NavIcon>
          <NavText> 메뉴별 통계 </NavText>
        </NavLink>
        
        <NavLink to="/self" selected={ curr === 6 }>
          <NavIcon> <FreeManagedSidedishIcon width="26px" /> </NavIcon>
          <NavText> 자율메뉴 </NavText>
        </NavLink>
        
        <NavLink to="/management" selected={ curr === 7 }>
          <NavIcon> <ManagementIcon width="23px" /> </NavIcon>
          <NavText> 식단관리/메모 </NavText>
        </NavLink>
      </NavigationContainer>
    </Container>
  )
}