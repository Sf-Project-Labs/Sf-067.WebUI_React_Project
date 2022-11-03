import { Fragment } from 'react';
import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <HomePage />
      <ArticlesPage />
    </Fragment>
  );
}

export default App;
