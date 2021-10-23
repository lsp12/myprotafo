import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "../FireBase/FireBase";
import { getUserLogeed } from "../Store/ActionAuth/AuthReducer";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import Home from "../view/Home/Home";
import PrivadeRoutes from "./PrivadeRoutes/PrivadeRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import { PublicRoutesList,PrivateRoutesList , RoutesList} from "./RoutesList";



const Routes: React.FC = () => {
  const { user } = useAppSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(getUserLogeed(user.uid));
      }
    });
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
