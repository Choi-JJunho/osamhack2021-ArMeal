import React, { useState, useCallback } from 'react';
import SignupComponent from 'components/SignupComponent';
import { useDispatch } from 'react-redux';
import { signup } from 'modules/auth';
import { useHistory } from 'react-router';

export default function SignupContainer(){
  const history = useHistory();
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    login_id: "",
    password: "",
    email: "",
    group_id: "",
    name: ""
  });
  
  const updateInfo = (e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  })

  const submit = useCallback(e => {
    e.preventDefault();
    dispatch(signup(info))
    history.push('/')
  }, [dispatch, info, history])

  return (
    <SignupComponent info={info} updateInfo={updateInfo} submit={submit}/>
  )
}