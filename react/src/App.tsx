import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Messages } from './components/mainLayout/Messages';
import { Profile } from './components/mainLayout/Profile';
import { Layout } from './components/mainLayout/Layout';
import './App.css'
import { Section } from './components/mainLayout/Section';
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
