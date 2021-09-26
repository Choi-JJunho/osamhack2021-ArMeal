import React from 'react';
import SelfComponent from 'components/SelfComponent';

export default function SelfContainer(){

  const events = [
    {
      title: '조식 92%',
      description: '콩나물국, 계란찜, 깍두기, 돼지고기청경채볶음',
      start: '2021-09-19T07:00:00'
    },
    {
      title: '조식 54%',
      description: '콩나물국, 계란찜, 깍두기, 돼지고기청경채볶음',
      start: '2021-09-15T07:00:00'
    },
    {
      title: '중식 88%',
      description: '콩나물국, 계란찜, 깍두기, 돼지고기청경채볶음',
      start: '2021-09-15T11:00:00'
    },
    {
      title: '석식 67%',
      description: '콩나물국, 계란찜, 깍두기, 돼지고기청경채볶음',
      start: '2021-09-15T17:00:00'
    },
  ]
  return (
    <SelfComponent events={events}/>
  )
}