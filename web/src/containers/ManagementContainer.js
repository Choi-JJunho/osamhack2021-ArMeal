import React, { useEffect, useState } from 'react';
import ManagementComponent from 'components/ManagementComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getManagementData } from 'modules/management';

export default function ManagementContainer(){
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.authReducer);
  const { allData } = useSelector(state => state.managementReducer);
  const [range, setRange] = useState({start: "", end: ""});

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

  useEffect(() => {
    let arr = [];
    allData.data.map((d) => {
      let timeStr = d.date;
      if(d.time === 1) timeStr = timeStr.concat("T07:00:00")
      if(d.time === 2) timeStr = timeStr.concat("T11:00:00")
      if(d.time === 3) timeStr = timeStr.concat("T17:00:00")
      let des = ""
      d.description.map((str) => {
        return des = des.concat(str);
      })
      let t = {
        title: (d.time === 1? "조식" : (d.time === 2 ? "중식" : "석식")),
        description: des,
        start: timeStr
      };
      return arr.push(t);
    })

    setEvents(arr);
  }, [allData.data])

  useEffect(() => {
    console.log(events)
  }, [events])

  const onMonthChange = (e) => {
    setRange({start: e.startStr.slice(0, 10), end: e.endStr.slice(0, 10)});
  }
  

  useEffect(() => {
    dispatch(getManagementData({
      group_id: data.group_id,
      start: range.start,
      end: range.end
    }))
  }, [dispatch, range])

  return (
    <ManagementComponent events={events} onMonthChange={onMonthChange}/>
  )
}