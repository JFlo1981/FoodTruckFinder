import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import TruckReviews from "./pages/TruckReviews";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import SingleTruck from "./pages/singleTruck";
import Portal from "./pages/Portal";

// Establish a new link to the GraphQL server
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Middleware function that will retrieve the token for us
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:username" element={<Dashboard />} />
              <Route path="/account/:id" element={<Account />} />
              <Route path="/truck" element={<SingleTruck />} />
              <Route path="/truck/reviews" element={<TruckReviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
