import NavigationBar from "./components/NavigationBar";
import styled from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Wrap = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  background-color: red;
  width: 500px;
  display: flex;
  justify-content: center;
`;

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <NavigationBar />
    </Wrap>
  );
};

export default Layout;
