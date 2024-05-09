import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../style/Login.css';
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post('/api/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('데이터 :: ' + res);
        alert('로그인 완료');
        dispatch(loginSuccess(email));
        navigate('/home');
      })
      .catch((error) => {
        console.log('error : {}', error);
        alert(error.response.data);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">로그인</button>
        <Link to="/join">회원가입</Link>
      </form>
    </div>
  );
};

export default LoginPage;
