import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const Body = styled.main`
  background-color: #fefefe;
  font-family: "-apple-system, Roboto, sans-serif, serif";
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <Header />
      {children}
      <Footer />
    </Body>
  );
};

export default Layout;
