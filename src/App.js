import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
