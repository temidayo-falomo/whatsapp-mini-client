import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase-config";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import Dashboard from "./pages/dashboard/Dashboard";
import Loading from "./pages/loading/Loading";
import Login from "./pages/login/Login";
import StatusUploads from "./pages/status-uploads/StatusUploads";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  //

  const [friendId, setFriendId] = useState();
  const [friendImg, setFriendImg] = useState();
  const [friendName, setFriendName] = useState();

  //

  const [messageText, setMessageText] = useState("");

  //

  const [allMessages, setAllMessages] = useState();
  const [users, setUsers] = useState();
  const [allStatus, setAllStatus] = useState([]);
  const [statusByUser, setStatusByUser] = useState([]);

  //

  const [displayDelete, setDisplayDelete] = useState(false);
  const [displayStatus, setDisplayStatus] = useState(false);

  //

  const [colors, setColors] = useState([
    "orange",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
  ]);

  const [fonts, setFonts] = useState(["sans-serif", "lato", "poppins"]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        users,
        setUsers,
        friendId,
        setFriendId,
        messageText,
        setMessageText,
        friendImg,
        setFriendImg,
        friendName,
        setFriendName,
        allMessages,
        setAllMessages,
        displayDelete,
        setDisplayDelete,
        colors,
        setColors,
        fonts,
        setFonts,
        allStatus,
        setAllStatus,
        displayStatus,
        setDisplayStatus,
        statusByUser,
        setStatusByUser,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/status-uploads" element={<StatusUploads />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
