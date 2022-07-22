import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Messages } from './components/mainLayout/Messages';
import { Profile } from './components/mainLayout/Profile';
import { Layout } from './components/mainLayout/Layout';
import './App.css'
import { Section } from './components/mainLayout/Section';
import { useAuth0, AuthState } from './plugin/auth-plugin';

function App() {
  const [sessionAccount, setSessionAccount] = React.useState();
  React.useEffect(() => {
    useAuth0(AuthState).initAuth();
    // const nickname = JSON.parse(localStorage.getItem("sessionName") || "")
    // setSessionAccount(nickname);
    // if (!nickname) {
    //   console.log("YOU MUST LOGIN ACCOUNT");
    //   useAuth0(AuthState).login();
    // }
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
