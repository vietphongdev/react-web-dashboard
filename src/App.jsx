import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TopNav from "./components/topnav/TopNav";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import ThemeAction from "./redux/actions/ThemeAction";

const App = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <Sidebar />
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/customers" component={Customers} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
