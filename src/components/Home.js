import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <input type="button" value={user.token ? '마이페이지' : '로그인'} />
    </div>
  );
};

export default Home;
