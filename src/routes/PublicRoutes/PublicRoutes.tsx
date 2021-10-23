import { JSXElementConstructor } from "react";
import { Redirect, RouteProps,Route } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";

interface Props extends RouteProps {
  component: JSXElementConstructor<RouteProps>;
}

const PublicRoutes = ({ component: Component, ...rest }: Props) => {
  const { authenticated } = useAppSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Component {...props} /> : <Redirect to="/adminLg" />
      }
    />
  );
};

export default PublicRoutes;
