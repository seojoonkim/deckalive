import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card/:cardId" element={<CardPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
