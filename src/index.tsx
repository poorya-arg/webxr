import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer, { IReduxStateType } from "./store/reducer"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { DispatchType, IssuesAction } from "./store/types";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers:{
    authorization: `Bearer ACCESS_TOKEN`
  }
});

const store: Store<IReduxStateType, IssuesAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
