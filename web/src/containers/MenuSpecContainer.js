import React, { useEffect, useState } from 'react';
import MenuSpecComponent from 'components/MenuSpecComponent';
import { useLocation, useHistory } from 'react-router';

export default function MenuSpecContainer(){
  const location = useLocation();
  const history = useHistory();
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
      },
      {
        id: 3,
        name: "고춧가루",
        satisfy: 66
      },
      {
        id: 4,
        name: "간장",
        satisfy: 50      
      },
      {
        id: 5,
        name: "마늘",
        satisfy: 85
      },
      {
        id: 6,
        name: "양파",
        satisfy: 77
      }
      
    ], 
    satisfy: [100, 50, 30, 20, 10],
    lastest: [
      {
        time: "2021-08-21",
        type: "중식",
        satisfy: 86
      },
      {
        time: "2021-08-01",
        type: "중식",
        satisfy: 91
      },
      {
        time: "2021-06-30",
        type: "석식",
        satisfy: 81
      }
    ],
    average: 86
  }

  return (
    <MenuSpecComponent data={dummy} order={order} setOrder={setOrder} history={history}/>
  )
}