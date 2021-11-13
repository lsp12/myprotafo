import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "../FireBase/FireBase";
import { getUserLogeed } from "../Store/ActionAuth/AuthReducer";
import { useAppDispatch } from "../Store/hooks";
import Home from "../view/Home/Home";
import PrivadeRoutes from "./PrivadeRoutes/PrivadeRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import { PublicRoutesList,PrivateRoutesList , RoutesList} from "./RoutesList";



const Routes: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(getUserLogeed(user.uid));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
        <Route exact path="/" component={Home} />
      {PublicRoutesList.map((route: RoutesList, index: number) => {
        return (
          <PublicRoutes
            key={index.toString()}
            exact
            path={route.path}
            component={route.view}
          />
        );
      })}
      {PrivateRoutesList.map((route: RoutesList, index: number) => {
        return (
          <PrivadeRoutes
            key={index.toString()}
            exact
            path={route.path}
            component={route.view}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
