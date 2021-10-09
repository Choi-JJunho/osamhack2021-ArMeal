import React, { useState, useEffect } from 'react';
import MenuComponent from 'components/MenuComponent';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenuData } from 'modules/menu';

export default function MenuContainer(){
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menuReducer.all )
  const { data } = useSelector(state => state.authReducer )

  const [menuList, setMenuList] = useState([
    { id: 1, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 2, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 3, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 4, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 5, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 6, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 7, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 8, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 9, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 10, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 11, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 12, menu_name: " ", sidedish_list: " ", satisfy: 0 },
    { id: 13, menu_name: " ", sidedish_list: " ", satisfy: 0 }
  ]);
  useEffect(() => {
    dispatch(getAllMenuData(data.group_id));
  }, [dispatch, data])

  useEffect(() => {
    if(menu.data){
      let newList = [];
      
      menu.data.map((m) => {
        let sideStr = "";
        m.ingredient_list.map((side)=> {
          return sideStr = sideStr + side + ",";
        })
        let temp = {
          id: m.id,
          menu_name: m.menu_name,
          sidedish_list: sideStr,
          satisfy: (m.satisfy? Math.round(m.satisfy.ratio) : 0) + "%"
        };
        return newList.push(temp)
      })

      setMenuList(newList)
    }
  }, [menu])

  const goSpecPage = (e) => {
    history.push(`/menu/${e.row.id}`)
  }
  const columns = [
    { field: "id", 
      headerName: "ID", 
      width: 90 
    },
    {
      field: "menu_name",
      headerName: "메뉴명",
      width: 200
    },
    {
      field: "sidedish_list",
      headerName: "포함하는 부식",
      width: 600
    },
    {
      field: "satisfy",
      headerName: "만족도",
      width: 150
    }
  ];
  
  return (
    <MenuComponent rows={menuList} columns={columns} goSpecPage={goSpecPage}/>
  )
}