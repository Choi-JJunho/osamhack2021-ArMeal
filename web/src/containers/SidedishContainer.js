import React, { useEffect, useState } from 'react';
import SidedishComponent from 'components/SidedishComponent';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSidedishData } from 'modules/sidedish';

export default function SidedishContainer(){
  const history = useHistory();
  const dispatch = useDispatch();
  const sidedish = useSelector(state => state.sidedishReducer.all )
  const { data } = useSelector(state => state.authReducer )
  const goSpecPage = (e) => {
    history.push(`/sidedish/${e.row.id}`)
  }

  const columns = [
    { field: "id", 
      headerName: "ID", 
      width: 90 
    },
    {
      field: "sidedish_name",
      headerName: "부식명",
      width: 200
    },
    {
      field: "sidedish_menu",
      headerName: "포함되는 메뉴",
      width: 600
    },
    {
      field: "satisfy",
      headerName: "만족도",
      width: 150
    }
  ];

  const rows = [
    { id: 1, sidedish_name: " ", sidedish_menu: "", satisfy: 82 },
    { id: 2, sidedish_name: " ", sidedish_menu: "", satisfy: 42 },
    { id: 3, sidedish_name: " ", sidedish_menu: "", satisfy: 45 },
    { id: 4, sidedish_name: " ", sidedish_menu: "", satisfy: 16 },
    { id: 5, sidedish_name: " ", sidedish_menu: "", satisfy: 72 },
    { id: 6, sidedish_name: " ", sidedish_menu: "", satisfy: 50 },
    { id: 7, sidedish_name: " ", sidedish_menu: "", satisfy: 44 },
    { id: 8, sidedish_name: " ", sidedish_menu: "", satisfy: 36 },
    { id: 9, sidedish_name: " ", sidedish_menu: "", satisfy: 12 },
    { id: 10, sidedish_name: " ", sidedish_menu: "", satisfy: 55 },
    { id: 11, sidedish_name: " ", sidedish_menu: "", satisfy: 36 },
    { id: 12, sidedish_name: " ", sidedish_menu: "", satisfy: 22 },
    { id: 13, sidedish_name: " ", sidedish_menu: "", satisfy: 67 }
  ];
  
  const [sidedishList, setSidedishList] = useState(rows);
  useEffect(() => {
    dispatch(getAllSidedishData(data.group_id));
  }, [dispatch, data])

  useEffect(() => {
    if(sidedish.data) {
      let list = [];
      sidedish.data.map((d) => {
        let namestr = "";
        d.menu.map((m) => {
          return namestr = namestr + m + ", "
        })
        let t = {
          "id": d.id,
          "sidedish_name": d.ingredient_name,
          "sidedish_menu": namestr,
          "satisfy": Math.round(d.satisfy) + "%"
        }
        return list.push(t);
      })
      setSidedishList(list)
    }
  }, [sidedish.data])

  return (
    <SidedishComponent rows={sidedishList} columns={columns} goSpecPage={goSpecPage}/>
  )
}