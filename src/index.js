import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
