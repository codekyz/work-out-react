import NavigationBar from "./components/common/NavigationBar";
import styled from "styled-components";
import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
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
