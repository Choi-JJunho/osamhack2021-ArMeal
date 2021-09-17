import React, { useEffect } from 'react';
import DashboardComponent from 'components/DashboardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getDashboardData } from 'modules/dashboard' 
export default function DashboardContainer(){
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.dashboardReducer.dashboard)
  const menuRanking = [
    {
      rank: 1,
      name: "돼지고기콩나물볶음",
      satisfy: 93,
    },
    {
      rank: 2,
      name: "감자탕",
      satisfy: 91,
    },
    {
      rank: 3,
      name: "김치찌개",
      satisfy: 80,
    },
    {
      rank: 4,
      name: "짬뽕찌개",
      satisfy: 75,
    },
    {
      rank: 5,
      name: "냉면",
      satisfy: 65,
    },
  ]
  useEffect(() => {
    dispatch(getDashboardData());
  }, [])

  return (
    <DashboardComponent 
      chartData={[50, 40, 30, 20, 10]} 
      average={75.5}
      dataName={["최고예요", "맛있어요", "보통이에요", "별로예요", "싫어요"]}
      menuRanking={menuRanking}
      />
  )
}