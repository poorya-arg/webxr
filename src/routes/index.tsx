import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch,Router } from "react-router-dom";
import history from "../utils/history";

const Home = lazy(() => import("../views/home/App"));

const IndexRouter: React.FC = (): ReactElement => {
  
  return (
      <BrowserRouter>
        <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
      </BrowserRouter>
  );
};

export default IndexRouter;
