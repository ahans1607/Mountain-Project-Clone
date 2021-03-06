// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormModal from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import SpotPage from "./components/SpotPage"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path ='/'>
              <Homepage/>
          </Route>

          <Route path="/spots/:spotsId">
              <SpotPage/>
          </Route>

          <Route path="/login">
            <LoginFormModal />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
