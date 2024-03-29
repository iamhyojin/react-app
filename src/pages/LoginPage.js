import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import { Link, Route, Router } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // 로그인 성공 후의 동작 처리
    } catch (error) {
      console.error('Login failed:', error);
      // 로그인 실패 시의 처리
    }
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
