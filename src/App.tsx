import './styles/App.css';
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFoundPage from './pages/notFound';
import {AuthProvider} from './context/authProvider/authProvider.tsx';
import Signin from './pages/auth/login';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import {lazy, Suspense} from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/home'));
const ListCharactersPage = lazy(() => import('./pages/characters'));
const ListLocationsPage = lazy(() => import('./pages/locations'));
const ListEpisodesPage = lazy(() => import('./pages/episodes'));
const DetailCharacterPage = lazy(() => import('./pages/characters/[id]'));
const DetailLocationPage = lazy(() => import('./pages/locations/[id]'));
const DetailEpisodePage = lazy(() => import('./pages/episodes/[id]'));

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation/>

        <main className="content">
          <Logout/>
          <Routes>
            <Route path="/" element={<Suspense
              fallback={<div>Loading...</div>}><ErrorBoundary><HomePage/></ErrorBoundary></Suspense>}/>
            <Route path="/characters" element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
              key="characters"><ListCharactersPage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/locations" element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
              key="locations"><ListLocationsPage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/episodes" element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
              key="episodes"><ListEpisodesPage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/characters/:id"
                   element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
                     key="charactersDetaile"><DetailCharacterPage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/locations/:id"
                   element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
                     key="locationsDetaile"><DetailLocationPage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/episodes/:id" element={<PrivateRoute><Suspense fallback={<div>Loading...</div>}><ErrorBoundary
              key="episodesDetaile"><DetailEpisodePage/></ErrorBoundary></Suspense></PrivateRoute>}/>
            <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><ErrorBoundary key="auth">
              <Signin/></ErrorBoundary></Suspense>}></Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </AuthProvider>
    </>
  )
}

export default App
