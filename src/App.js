import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Toaster_Notify from "./Shared/Toaster/toaster_notify";
import Loading from "./Shared/Loading/loading";
import { useSelector } from "react-redux";

const NotFound = React.lazy(() => import("./Shared/Not_Found/not_found"));
const UnAuthorized = React.lazy(() => import("./Shared/Un_Authorized/un_authorized"));

const App = () => {

  const { login_info, auth_token } = useSelector((state) => state.login);
  console.log("APP___", login_info, auth_token);

  const isAuthnticationCheck = (route) => {
    if (route.isAuth) {
      if (auth_token && route.isAdmin ? login_info.is_admin : true) {
        return <Route path={route.path} element={route.component} />;
      } else {
        return <Route path={route.path} element={<UnAuthorized />} />;
      }
    } else {
      return <Route path={route.path} element={route.component} />;
    }
  };

  return (
    <>
      <Loading />
      <Toaster_Notify />
      {auth_token && <>Header</>}
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              {isAuthnticationCheck(route)}
              <Route path={"*"} element={<NotFound />} />
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
