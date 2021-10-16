import React, { useEffect, useState } from 'react';
import MenuSpecComponent from 'components/MenuSpecComponent';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuData } from 'modules/menu';

export default function MenuSpecContainer(){
  const location = useLocation();
  const history = useHistory();
  const [order, setOrder] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.data)
  const specData = useSelector(state => state.menuReducer.spec)
  const id = location.pathname.split('/')[2]

  useEffect(() => {
    dispatch(getMenuData({group_id: user.group_id, id: id}))
  },[dispatch, id, user])
  
  const [data, setData] = useState({ 
    id: 1, 
    menu_name: "돼지고기김치찜", 
    ingredient_list: [
      {
        id: 1,
        name: "돼지고기",
        satisfy: 92
      }
    ], 
    satisfy: [100, 50, 30, 20, 10],
    lastest: [
      {
        time: "2021-08-21",
        type: "중식",
        satisfy: 86
      }
    ],
    average: 86
  })

  useEffect(() => {
    if(specData.data){
      setData(specData.data[0])
    }
  }, [specData])

  return (
    <MenuSpecComponent data={data} order={order} setOrder={setOrder} history={history}/>
  )
}