import ArticlesPage from './pages/ArticlesPage';
import DealbookPage from './pages/DealbookPage';
import HomePage from './pages/HomePage';
import SurveysPage from './pages/SurveysPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<HomePage />} path='/home' />
      <Route element={<ArticlesPage />} path='/articles' />
      <Route element={<DealbookPage />} path='/dealbook' />
      <Route element={<SurveysPage />} path='/surveys' />
    </Routes>
  );
}

export default App;
