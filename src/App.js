import { Route, Routes } from 'react-router-dom';
import './App.css';
import JoinPage from './pages/JoinPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
