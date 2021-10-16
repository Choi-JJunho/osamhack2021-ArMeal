import React, { useState, useCallback } from 'react';
import SigninComponent from 'components/SigninComponent';
import { useDispatch } from 'react-redux';
import { login } from 'modules/auth';

export default function SigninContainer(){
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const submit = useCallback(e => {
    e.preventDefault();
    dispatch(login({login_id: id, password: password}))
  }, [dispatch, id, password])

  return (
    <SigninComponent id={id} password={password} setId={setId} setPassword={setPassword} submit={submit}/>
  )
}