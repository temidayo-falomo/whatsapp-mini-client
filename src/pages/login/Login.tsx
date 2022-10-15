import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledLogin } from "./Login.styled";

function Login() {
  const { setIsAuth } = useContext(AppContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("whatsappIsAuth") ||
  //     localStorage.getItem("whatsappIsAuth") === "false"
  //   ) {
  //     navigate("/");
  //   }
  // }, []);

  //Button to sign up w Google & Redirect to Dashboard

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("whatsappIsAuth", "true");
        setIsAuth(true);

        setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: res.user.displayName,
          userId: res.user.uid,
          userAvatar: res.user.photoURL,
          friends: [],
          settings: [
            {
              light: true,
            },
          ],
          statusUploads: [],
          userAbout: "Available.",
        });

        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledLogin>
      <div className="box grid-center gap">
        <h2>Login</h2>
        <button onClick={signInWithGoogle}>Login With Google</button>
        <p>
          This is a one-time, password-less login, so you don't need a password.
        </p>
      </div>
    </StyledLogin>
  );
}

export default Login;
