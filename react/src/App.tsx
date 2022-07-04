import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Messages } from './components/MainLayout/Messages';
import { Profile } from './components/MainLayout/Profile';
import { Layout } from './components/MainLayout/Layout';
import './App.css'
import { Section } from './components/MainLayout/Section';
import { useEffect } from "react";
import { useAuth0, AuthState } from './plugin/auth-plugin';

function App() {
  useEffect(() => {
    useAuth0(AuthState).initAuth();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Section />} />
          <Route path='/message' element={<Messages />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
