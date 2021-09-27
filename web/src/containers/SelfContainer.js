import React, {useState}  from 'react';

import SelfComponent from 'components/SelfComponent';

export default function SelfContainer(){
  const selectEvent = (e) => {
      alert(e.event.title)
      
      // console.log(e.event.extendedProps.description)
      // console.log(e.event.extendedProps.time)
      console.log(e.event.title)
  }
  
  const events = [
    {
      title: '베이컨 청경채 볶음',
      date: '2021-09-19T07:00:00',
      time:'조식',
      description: '',
      start: '2021-09-19T07:00:00'
    }
  ]

  // const [event, setEvent] = useState(0) 
  // const selectEvent = (idx) => {
  //   setEvent(idx)
  // }

  return (
    // <SelfComponent events={events} clickEvent={event} selectEvent={selectEvent}/>
    <SelfComponent events={events} selectEvent={selectEvent}/>
    )
}