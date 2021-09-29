import React, {useState}  from 'react';

import SelfComponent from 'components/SelfComponent';

export default function SelfContainer(){
  // const [date, setDate] = useState(0)
  // const selectDate = (e) => {
  //   setDate(e)
  // }
  // const dateClick = (e) => {
  //   console.log('clicked ' + e.dateStr);
  // }

  const [event, setEvent] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectEvent = (e) => {
      setEvent(e)
  }

  const events = [
    {
      title: '베이컨 청경채 볶음',
      date: '2021-09-19T07:00:00',
      start: '2021-09-19T07:00:00',
      time:'조식',
      description: '청경채 참깨'
    },
    {
      title: '짜장면',
      date: '2021-09-25T07:00:00',
      start: '2021-09-25T07:00:00',
      time:'중식',
      description: '청경채 참깨2'
    },
    {
      title: '티라미슈',
      date: '2021-09-30T07:00:00',
      start: '2021-09-30T07:00:00',
      time:'석식',
      description: '청경채 참깨3'
    }
  ]


  return (
    <SelfComponent events={events} selectEvent={selectEvent} event={event}/>
    )
}