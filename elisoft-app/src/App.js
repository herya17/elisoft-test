import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import DashboardPage from './pages/DashboardPage';
import TableDataPage from './pages/TableDataPage';
import NestedMenuPage from './pages/NestedMenuPage';
import ListProfileGithubPageWrapper from './pages/ListProfileGithubPageWrapper';
import CaseOnePage from './pages/CaseOnePage';
import NoPage from './pages/NoPage';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    setAuthedUser(null);
    setInitializing(false);
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <header>
          <h1>Elisoft Test</h1>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Elisoft Test</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/table-data' element={<TableDataPage />} />
          <Route path='/nested-menu' element={<NestedMenuPage />} />
          <Route path='/list-profile-github' element={<ListProfileGithubPageWrapper />} />
          <Route path='/caseone' element={<CaseOnePage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
