import React from "react";
import { Router } from "dva/router";
import RootRoute from "./routes/index";

function RouterConfig({ history }) {
  return <Router history={history} routes={RootRoute} />;
}

export default RouterConfig;
