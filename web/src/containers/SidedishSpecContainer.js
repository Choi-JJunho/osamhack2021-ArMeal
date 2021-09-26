import React, { useEffect, useState } from 'react';
import SidedishSpecComponent from 'components/SidedishSpecComponent';
import { useLocation, useHistory } from 'react-router';

export default function SidedishSpecContainer(){
  const history = useHistory();
  const location = useLocation();
  const [order, setOrder] = useState(0);
  useEffect(() => {
    console.log(location.pathname.split('/')[2])
  })

  const dummy = { 
    id: 1, 
    sidedish_name: "돼지고기", 
    menu_list: [
      {
        id: 1,
        lastest: "2021-09-20",
        name: "돼지고기김치찜",
        satisfy: 92
      },
      {
        id: 2,
        lastest: "2021-09-15",
        name: "김치찌개",
        satisfy: 85
      },
      {
        id: 3,
        lastest: "2021-09-14",
        name: "돼지고기청경채볶음",
        satisfy: 75
      },
      {
        id: 4,
        lastest: "2021-09-10",
        name: "돼지고기수육",
        satisfy: 70
      },
      {
        id: 5,
        lastest: "2021-09-05",
        name: "콩나물불고기",
        satisfy: 55
      },
    ], 
    satisfy: [100, 50, 30, 20, 10],
    average: 82
  }

  return (
    <SidedishSpecComponent data={dummy} order={order} setOrder={setOrder} history={history}/>
  )
}