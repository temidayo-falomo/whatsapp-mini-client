import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase/firebase-config";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import Dashboard from "./pages/dashboard/Dashboard";
import Loading from "./pages/loading/Loading";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import StatusUploads from "./pages/status-uploads/StatusUploads";

function App() {
  //* Global States x Variables

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>();
  const [theme, setTheme] = useState<any>("dark");

  //local variables
  let navigate = useNavigate();
  let id: any = auth.currentUser && auth.currentUser.uid;

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

  //isAuth

  const [filteredStatuses, setFilteredStatuses] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [colors, setColors] = useState([
    "#fc4338",
    "#669bfa",
    "#23633c",
    "#767c8c",
    "#a8cec7",
    "#1c2134",
    "#f08389",
    "#000",
  ]);

  const [fonts, setFonts] = useState([
    "Plus Jakarta Sans",
    "sans-serif",
    "Noto Sans Mono",
    "Roboto Condensed",
  ]);

  const [newMsg1, setNewMsg1] = useState([]);
  const [newMsg2, setNewMsg2] = useState([]);

  const [number, setNumber] = useState("disp");

  //Get Current User By Auth.Id
  useEffect(() => {
    const getUser = async () => {
      const userDoc = doc(db, "users", id);
      await getDoc(userDoc).then((doc: any) => {
        setUser(doc.data());
      });
    };

    if (id) {
      getUser();
    }
  }, [auth.currentUser?.uid, users]);

  //Protected Routes tt check local storage for if user is not logged in

  useEffect(() => {
    if (
      !localStorage.getItem("whatsappIsAuth") ||
      localStorage.getItem("whatsappIsAuth") === "false"
    ) {
      navigate("/login");
    }
  }, []);

  //Loading Screen

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
        number,
        setNumber,
        theme,
        setTheme,
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
