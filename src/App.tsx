import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState();

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, users, setUsers }}>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
