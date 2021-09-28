import React, {useState}  from 'react';

import SelfComponent from 'components/SelfComponent';

export default function SelfContainer(){
  // const selectEvent = (e) => {
  //     alert(e.event.title)
      
  //     // console.log(e.event.extendedProps.description)
  //     // console.log(e.event.extendedProps.time)
  //     console.log(e.event)
  // }
  const dateClick = (e) => {
    alert('clicked ' + e.dateStr);
  }
  const [event, setEvent] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectEvent = (e) =>{
    setEvent(e)
    console.log(e.event)
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

  // const [event, setEvent] = useState(0) 
  // const selectEvent = (idx) => {
  //   setEvent(idx)
  // }

  return (
    // <SelfComponent events={events} clickEvent={event} selectEvent={selectEvent}/>
    <SelfComponent events={events} selectEvent={selectEvent} event={event} dateClick={dateClick} />
    )
}