import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { userInfoStore } from 'store/userInfoStore';

const LoginSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const setUserInfo = userInfoStore((state) => state.setUserInfo)

  useEffect(() => {
    const email = searchParams.get('email');
    console.log(email);
    axios.get(`https://j9a510.p.ssafy.io/api/users/${email}`)
    .then((res) => {
      console.log(res.data);
      setUserInfo(res.data);
      navigate('/');
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return <div></div>;
};

export default LoginSuccess;