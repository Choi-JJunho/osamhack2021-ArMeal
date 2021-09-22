import React from 'react';
import MenuComponent from 'components/MenuComponent';
import { useHistory } from 'react-router';

export default function MenuContainer(){
  const history = useHistory();
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
  
  const rows = [
    { id: 1, menu_name: "돼지고기김치찜", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 82 },
    { id: 2, menu_name: "소갈비찜", sidedish_list: "소갈비, 소고기양념, 마늘, 양파, 파", satisfy: 42 },
    { id: 3, menu_name: "두부김치", sidedish_list: "두부, 김치, 돼지고기, 양파", satisfy: 45 },
    { id: 4, menu_name: "소세지야채볶음", sidedish_list: "소세지, 당근, 양파, 케첩", satisfy: 16 },
    { id: 5, menu_name: "계란찜", sidedish_list: "계란", satisfy: 72 },
    { id: 6, menu_name: "카레", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 50 },
    { id: 7, menu_name: "오징어볶음", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 44 },
    { id: 8, menu_name: "닭고기매운조림", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 36 },
    { id: 9, menu_name: "치킨텐더", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 12 },
    { id: 10, menu_name: "오이소박이", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 55 },
    { id: 11, menu_name: "콩나물국", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 36 },
    { id: 12, menu_name: "돼지고기청경채볶음", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 22 },
    { id: 13, menu_name: "중화식계란탕", sidedish_list: "돼지고기, 김치, 설탕, 고춧가루, 간장, 마늘, 양파", satisfy: 67 }
  ];
  return (
    <MenuComponent rows={rows} columns={columns} goSpecPage={goSpecPage}/>
  )
}