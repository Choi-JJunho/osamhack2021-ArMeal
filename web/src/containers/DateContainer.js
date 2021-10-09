import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getManagementData, getMonthData } from 'modules/management';
import DateComponent from 'components/DateComponent';

export default function DateContainer(){
  const [order, setOrder] = useState(0);
  const { data } = useSelector(state => state.authReducer);
  const { allData } = useSelector(state => state.managementReducer);
  const { month } = useSelector(state => state.managementReducer);
  const dispatch = useDispatch()
  const offset = new Date().getTimezoneOffset() * 60000;
  const todayStr = new Date(Date.now() - offset).toISOString().slice(0, 10);
  const beforeStr = new Date(Date.now() - offset - 1000*3600*24*7).toISOString().slice(0, 10);
  const [range, setRange] = useState({
    start: beforeStr,
    end: todayStr
  })

  const onChange = (e) => {
    setRange({
      ...range,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(order === 1){
      let newStart = new Date(Date.now() - offset - 1000*3600*24*30).toISOString().slice(0, 10);
      setRange({...range, start: newStart})
    }
  }, [order])

  useEffect(() => {
    if(order === 0){
      dispatch(getManagementData({
        group_id: data.group_id,
        start: range.start,
        end: range.end
      }))
    }
    if(order === 1){
      let diff = range.end.slice(5, 7) - range.start.slice(5, 7)
      console.log(diff)
      let param = [];
      for(let i = 0; i <= diff; i++){
        param.push({
          "group_id": data.group_id,
          "year": range.start.slice(0, 4),
          "month": Number(range.start.slice(5, 7)) + i,
        })
      }
      dispatch(getMonthData(param))
    }
  },[dispatch, range, order, data])
  
  useEffect(() => {
    if(allData.data){
      let label = new Set();
      let d1 = [];
      let d2 = [];
      let d3 = [];

      allData.data.map(d => {
        if(d.time === 1) d1.push(d.ratio)
        if(d.time === 2) d2.push(d.ratio)
        if(d.time === 3) d3.push(d.ratio)
        return label.add(d.date)
      })

      setDateData({
        labels: [...label],
        datasets: [
          {
            label: '조식',
            data: d1,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: '중식',
            data: d2,
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
          },
          {
            label: '석식',
            data: d3,
            fill: false,
            backgroundColor: 'rgb(255, 205, 86)',
            borderColor: 'rgb(255, 205, 86)',
          },
        ],
      })
    }
  }, [allData.data])

  useEffect(() => {
    if(order === 1){
      if(month.data){
        let diff = range.end.slice(5, 7) - range.start.slice(5, 7)
        let label = [];
        for(let i = 0; i <= diff; i++){
          label.push(range.start.slice(0, 5) + (Number(range.start.slice(5, 7)) + i))
        }
        setDateData({
          labels: label,
          datasets: [
            {
              label: '조식',
              data: month.data[0].rating,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
            },
            {
              label: '중식',
              data: month.data[1].rating,
              fill: false,
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgb(54, 162, 235)',
            },
            {
              label: '석식',
              data: month.data[2].rating,
              fill: false,
              backgroundColor: 'rgb(255, 205, 86)',
              borderColor: 'rgb(255, 205, 86)',
            },
          ],
        })
      }
    }
  }, [month.data])

  const [dateData, setDateData] = useState({
    labels: ['2021-07-13', '2021-07-14', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '조식',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      }
    ],
  })
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <DateComponent 
      data={dateData}
      options={options}
      order={order}
      setOrder={setOrder}
      range={range}
      onChange={onChange}
    />
  )
}