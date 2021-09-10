import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import NavComponent from 'components/NavComponent';

export default function NavContainer(){
  let location = useLocation();
  const [curr, setCurr] = useState(0)
  
  useEffect(()=> {
    switch(location.pathname){
      case '/dashboard':
        setCurr(1);
        break;
      case '/satisfy':
        setCurr(2);
        break;
      case '/date':
        setCurr(3);
        break;
      case '/sidedish':
        setCurr(4);
        break;
      case '/menu':
        setCurr(5);
        break;
      case '/self':
        setCurr(6);
        break;
      case '/management':
        setCurr(7);
        break;
      default:
        setCurr(0);
        break;
    }
  }, [location.pathname])

  return (
    <NavComponent curr={curr}/>
  )
}