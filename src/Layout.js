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
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
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
