import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useSelector((state) => state.user);

  const [home, setHome] = useState('');

  useEffect(() => {
    axios
      .get('/api/home')
      .then(function (response) {
        console.log(response);
        setHome(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Link to="/login">
        <input type="button" value={user.token ? '마이페이지' : '로그인'} />
      </Link>
      백엔드 데이터 : <h3>{home}</h3>
    </div>
  );
};

export default Home;
