import React from 'react';
import { useSelector } from 'react-redux';

const Top = () => {
  const { number, username } = useSelector((store) => store);
  return (
    <div>
      <h1>Top</h1>
      번호 : {number}
      이름 : {username}
    </div>
  );
};

export default Top;
