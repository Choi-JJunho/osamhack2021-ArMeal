import React from 'react';
import SidedishComponent from 'components/SidedishComponent';

export default function SidedishContainer(){
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
      headerName: "들어가는 메뉴",
      width: 600
    },
    {
      field: "satisfy",
      headerName: "만족도",
      width: 150
    }
  ];
  
  const rows = [
    { id: 1, sidedish_name: "돼지고기", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음, 돼지고기수육,  콩나물불고기, 잡채, 감자탕", satisfy: 82 },
    { id: 2, sidedish_name: "소고기", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 42 },
    { id: 3, sidedish_name: "두부", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 45 },
    { id: 4, sidedish_name: "소세지", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 16 },
    { id: 5, sidedish_name: "계란", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 72 },
    { id: 6, sidedish_name: "시금치", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 50 },
    { id: 7, sidedish_name: "오징어", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 44 },
    { id: 8, sidedish_name: "닭고기", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 36 },
    { id: 9, sidedish_name: "시금치", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 12 },
    { id: 10, sidedish_name: "오이", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 55 },
    { id: 11, sidedish_name: "당근", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 36 },
    { id: 12, sidedish_name: "가지", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 22 },
    { id: 13, sidedish_name: "마늘", sidedish_menu: "돼지고기김치찜, 돼지불고기, 김치찌개, 돼지고기청경채볶음", satisfy: 67 }
  ];

  return (
    <SidedishComponent rows={rows} columns={columns} />
  )
}