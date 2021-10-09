import React, { useEffect, useState } from 'react';
import DashboardComponent from 'components/DashboardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getTopData, getAverage, getCount } from 'modules/dashboard'
import { getRatioToday } from 'modules/satisfy';
import { useHistory } from 'react-router'; 

export default function DashboardContainer(){
  const dispatch = useDispatch();
  const history = useHistory();
  const { top } = useSelector(state => state.dashboardReducer)
  const { average } = useSelector(state => state.dashboardReducer)
  const { count } = useSelector(state => state.dashboardReducer)
  const { data } = useSelector(state => state.authReducer)

  const offset = new Date().getTimezoneOffset() * 60000;
  const todayStr = new Date(Date.now() - offset).toISOString().slice(0, 10);

  useEffect(() => {
    dispatch(getRatioToday({date: todayStr, group_id: data.group_id}))
  },[dispatch, data])

  const [avg, setAvg] = useState()
  useEffect(() => {
    if(top.data){
      let newList = []
      top.data.map((d, idx) => {
        let n = d.name;
        if(n.indexOf("(") !== -1) n = n.slice(0, n.indexOf("("))
        return newList.push({
          rank: idx + 1,
          name: n,
          id: d.id,
          satisfy: d.ratio,
        })
      })
      setMenuRanking(newList)
    }
  }, [top])
  const [menuRanking, setMenuRanking] = useState([
    {
      rank: 1,
      name: " ",
      id: 1,
      satisfy: 0,
    }
  ])

  const todayData = [
    {
      type: "조식",
      satisfy: 80
    },
    {
      type: "중식",
      satisfy: 65
    },
    {
      type: "석식",
      satisfy: 31
    }
  ]
  
  useEffect(() => {
    dispatch(getTopData(data.group_id));
    dispatch(getAverage(data.group_id));
    dispatch(getCount(data.group_id));
  }, [dispatch])

  const [chartData, setChartData] = useState([1803, 1035, 912, 911, 1079])

  useState(() => {
    if(count.data) {
      let countList = [];
      count.data.map((d) => {
        return countList.push(d.count)
      })
      console.log(countList)
      setChartData(countList)
    }
  },[count])

  useEffect(() => {
    if(average.data)setAvg(Math.round(average.data[0].ratio))
  }, [average.data])

  return (
    <DashboardComponent 
      chartData={chartData} 
      average={avg}
      dataName={["싫어요", "별로예요", "보통이에요", "맛있어요", "최고예요"]}
      menuRanking={menuRanking}
      todayData={todayData}
      data={data}
      history={history}
      />
  )
}