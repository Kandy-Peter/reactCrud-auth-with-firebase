import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebaseConfig";
import Main from "./components/Main";
import { UidContext } from "./components/UiContext";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // !! ensure boolean
      setIsSignedIn(!!user);
      setUid(user.uid);
    });
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <div className="App" style={{textAlign: 'center'}}>
        {isSignedIn ? (
          <Main />
        ) : (
          <div className="login-page">
            <h1>React Crud</h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    </UidContext.Provider>
  );
};

export default App;
