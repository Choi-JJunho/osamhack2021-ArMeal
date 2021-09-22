import React, { useEffect } from 'react';
import DashboardComponent from 'components/DashboardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getDashboardData } from 'modules/dashboard'
import { useHistory } from 'react-router'; 

export default function DashboardContainer(){
  const dispatch = useDispatch();
  const history = useHistory();
  const {data, loading, error} = useSelector(state => state.dashboardReducer.dashboard)
  const menuRanking = [
    {
      rank: 1,
      name: "돼지고기김치찜",
      id: 1,
      satisfy: 93,
    },
    {
      rank: 2,
      name: "감자탕",
      id: 2,
      satisfy: 91,
    },
    {
      rank: 3,
      name: "김치찌개",
      id: 3,
      satisfy: 80,
    },
    {
      rank: 4,
      name: "짬뽕찌개",
      id: 4,
      satisfy: 50,
    },
    {
      rank: 5,
      name: "곰탕",
      id: 5,
      satisfy: 20,
    },
  ]

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
    dispatch(getDashboardData());
  }, [dispatch])

  return (
    <DashboardComponent 
      chartData={[100, 120, 30, 20, 10]} 
      average={75.5}
      dataName={["최고예요", "맛있어요", "보통이에요", "별로예요", "싫어요"]}
      menuRanking={menuRanking}
      todayData={todayData}
      data={data}
      loading={loading}
      error={error}
      history={history}
      />
  )
}