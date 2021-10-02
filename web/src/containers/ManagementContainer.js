import React, { useEffect, useState } from 'react';
import ManagementComponent from 'components/ManagementComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getManagementData } from 'modules/management';

export default function ManagementContainer(){
  const dispatch = useDispatch();
  const authData = useSelector(state => state.authReducer);
  const managementData = useSelector(state => state.managementReducer.management);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const [date, setDate] = useState(new Date());

  const onMonthChange = (e) => {
    console.log("start:" + e.startStr.slice(0, 10) + "\nend:" + e.endStr.slice(0, 10));
    setStart(e.startStr.slice(0, 10));
    setEnd(e.endStr.slice(0, 10));
  }

  // useEffect(()  => {
  //   dispatch(getManagementData({
  //     group_id: authData.data.group_id,
  //     start: start,
  //     end: end         
  //   }))
  // }, [dispatch, start, end])
  
  const [events, setEvents] = useState([
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
  ]);


  return (
    <ManagementComponent events={events} onMonthChange={onMonthChange}/>
  )
}