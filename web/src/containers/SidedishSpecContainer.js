import React, { useEffect } from 'react';
import SpecComponent from 'components/shared/SpecComponent';
import { useLocation } from 'react-router';

export default function SidedishSpecContainer(){
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname.split('/')[2])
  })

  const dummy = { 
    id: 1, 
    sidedish_name: "돼지고기", 
    menu_list: [
      {
        rank: 1,
        name: "돼지고기김치찜",
        satisfy: 92
      },
      {
        rank: 2,
        name: "김치찌개",
        satisfy: 85
      },
      {
        rank: 3,
        name: "돼지고기청경채볶음",
        satisfy: 75
      },
      {
        rank: 4,
        name: "돼지고기수육",
        satisfy: 70
      },
      {
        rank: 5,
        name: "콩나물불고기",
        satisfy: 66
      },
    ], 
    satisfy: 76
  }

  return (
    <SpecComponent data={dummy}/>
  )
}