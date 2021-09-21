import React, { useEffect, useState } from 'react';
import MenuSpecComponent from 'components/MenuSpecComponent';
import { useLocation } from 'react-router';

export default function MenuSpecContainer(){
  const location = useLocation();
  const [order, setOrder] = useState(0);
  useEffect(() => {
    console.log(location.pathname.split('/')[2])
  })

  const dummy = { 
    id: 1, 
    menu_name: "돼지고기김치찜", 
    sidedish_list: [
      {
        id: 1,
        name: "돼지고기",
        satisfy: 92
      },
      {
        id: 2,
        name: "김치",
        satisfy: 85
      }
    ], 
    satisfy: [100, 50, 30, 20, 10],
    average: 76
  }

  return (
    <MenuSpecComponent data={dummy} order={order} setOrder={setOrder}/>
  )
}