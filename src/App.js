import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';
import { Route, Routes, Navigate } from 'react-router';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<HomePage />} path='/home' />
      <Route element={<ArticlesPage />} path='/articles' />
    </Routes>
  );
}

export default App;
