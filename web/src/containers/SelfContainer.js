import React, {useState}  from 'react';

import SelfComponent from 'components/SelfComponent';

export default function SelfContainer(){
  const [date, setDate] = useState(0)
  const dateClick = (e) => {
    setDate(e)
    setEvent(0)
  }

  const [event, setEvent] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectEvent = (e) => { 
    setEvent(e)
    setDate(0)
  }

  const [addSelf, setAddSelf] = useState(0)
  const selectAddSelf = (idx) => {
    setAddSelf(idx)
  }

  const events = [
    {
      title: '베이컨 청경채 볶음',
      date: '2021-10-19T07:00:00',
      start: '2021-10-19T07:00:00',
      time:'조식',
      description: '청경채, 참깨, 베이컨'
    },
    {
      title: '짜장면',
      date: '2021-10-25T07:00:00',
      start: '2021-10-25T07:00:00',
      time:'중식',
      description: '면(짜장면용), 짜장소스'
    },
    {
      title: '멜론',
      date: '2021-10-30T07:00:00',
      start: '2021-10-30T07:00:00',
      time:'석식',
      description: '멜론'
    },
    {
      title: '비빔냉면',
      date: '2021-10-08T07:00:00',
      start: '2021-10-08T07:00:00',
      time:'중식',
      description: '면, 오이, 육수, 비빔소스, 계란'
    },
    {
      title: '샤인머스켓',
      date: '2021-09-09T07:00:00',
      start: '2021-09-09T07:00:00',
      time:'중식',
      description: '샤인머스켓'
    },
    {
      title: '만두탕수',
      date: '2021-09-15T07:00:00',
      start: '2021-09-15T07:00:00',
      time:'석식',
      description: '냉동만두, 당근, 탕수육소스'
    },
    {
      title: '스파게티',
      date: '2021-09-15T07:00:00',
      start: '2021-09-15T07:00:00',
      time:'석식',
      description: '냉동파스타면, 스파게티소스'
    }
  ]


  return (
    <SelfComponent events={events} event={event} selectEvent={selectEvent} date={date} dateClick={dateClick} selectAddSelf={selectAddSelf}/>
    )
}