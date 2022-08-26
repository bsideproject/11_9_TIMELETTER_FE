import { useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';

import { getCookie } from '@/utils/cookies';

import LetterBox from './LetterBox/LetterBox';
import Login from './Login/Login';
import LoginIntro from './Login/LoginIntro/LoginIntro';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import Reminder from './Reminder/Reminder';

function Routes() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie('token') && navigate.name !== '/login') {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="/reminder" element={<Reminder />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/intro" element={<LoginIntro />} />
      <Route path="/letterBox" element={<LetterBox />} />
    </>
  );
}

export default Routes;