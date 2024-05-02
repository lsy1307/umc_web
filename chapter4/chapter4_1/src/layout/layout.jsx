import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Footer />
      <Outlet />
    </Container>
  );
};

export default Layout;
