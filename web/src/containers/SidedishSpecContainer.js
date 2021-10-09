import React, { useEffect, useState } from 'react';
import SidedishSpecComponent from 'components/SidedishSpecComponent';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSidedishData } from 'modules/sidedish';

export default function SidedishSpecContainer(){
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.data)
  const specData = useSelector(state => state.sidedishReducer.spec)
  const id = location.pathname.split('/')[2]
  const [data, setData] = useState({ 
    id: 1, 
    sidedish_name: "돼지고기", 
    menu_list: [
      {
        id: 1,
        lastest: "2021-09-20",
        name: "돼지고기김치찜",
        satisfy: 92
      }
    ], 
    satisfy: [100, 50, 30, 20, 10],
    average: 82
  });
  const [order, setOrder] = useState(0);
  useEffect(() => {
    dispatch(getSidedishData({group_id: user.group_id, id: id}))
  },[dispatch, id])

  useEffect(() => {
    if(specData.data) {
      let tempList = [];
      specData.data.menu_list.map((menu) => {
        let d = {
          id: 1,
          lastest: menu.lastest,
          name: menu.name,
          satisfy: Math.round(menu.satisfy.ratio)
        };
        return tempList.push(d)
      })
      let t = {
        id: specData.data.id, 
        sidedish_name: specData.data.ingredient_name, 
        menu_list: tempList,
        satisfy: specData.data.satisfy,
        average: Math.round(specData.data.average)
      }
      setData(t)
    }
  }, [specData])

  return (
    <SidedishSpecComponent data={data} order={order} setOrder={setOrder} history={history}/>
  )
}