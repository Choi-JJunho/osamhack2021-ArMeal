import React from 'react';
import HomeComponent from 'components/HomeComponent';
import { useSelector } from 'react-redux'; 

export default function HomeContainer(){
  const { data, loading, error } = useSelector( state => state.authReducer.auth );

  return (
    <HomeComponent 
      data={data}
      loading={loading}
      error={error} 
      />
  )
}