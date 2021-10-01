import React from 'react';
import { useSelector } from 'react-redux';
import SigninContainer from 'containers/SigninContainer';
import DashboardContainer from 'containers/DashboardContainer';

export default function HomePage(){
  const { data } = useSelector(state => state.authReducer);
  return (
    <>
      {data && 
        <DashboardContainer/>
      }
      {!data && 
        <SigninContainer/>
      }
    </>
  )
}