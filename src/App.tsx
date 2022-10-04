import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import Dashboard from "./pages/dashboard/Dashboard";
import Loading from "./pages/loading/Loading";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import StatusUploads from "./pages/status-uploads/StatusUploads";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  //

  const [friendId, setFriendId] = useState("");
  const [friendImg, setFriendImg] = useState();
  const [friendName, setFriendName] = useState();

  //

  const [messageText, setMessageText] = useState("");

  //

  const [allMessages, setAllMessages] = useState([]);
  const [users, setUsers] = useState();
  const [allStatus, setAllStatus] = useState([]);
  const [statusByUser, setStatusByUser] = useState([]);

  //

  const [displayDelete, setDisplayDelete] = useState(false);
  const [displayStatus, setDisplayStatus] = useState(false);

  //

  const [filteredStatuses, setFilteredStatuses] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const [fonts, setFonts] = useState([
    "Plus Jakarta Sans",
    "sans-serif",
    "Noto Sans Mono",
    "Roboto Condensed",
  ]);

  const [newMsg1, setNewMsg1] = useState([]);
  const [newMsg2, setNewMsg2] = useState([]);

  var time = new Date();

  let realTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [currTime, setCurrTime] = useState(realTime);

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
        user,
        setUser,
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
        newMsg1,
        newMsg2,
        setNewMsg1,
        setNewMsg2,
        filteredStatuses,
        setFilteredStatuses,
        displaySearch,
        setDisplaySearch,
        searchText,
        setSearchText,
        currTime,
        setCurrTime,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/status-uploads" element={<StatusUploads />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
