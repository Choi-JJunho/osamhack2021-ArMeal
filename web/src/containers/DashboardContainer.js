import React, { useEffect } from 'react';
import DashboardComponent from 'components/DashboardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getDashboardData } from 'modules/dashboard' 
export default function DashboardContainer(){
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.dashboardReducer.dashboard)

  useEffect(() => {
    dispatch(getDashboardData());
  }, [])

  return (
    <DashboardComponent chartData={[50, 40, 30, 20, 10]} average={75.5}/>
  )
}