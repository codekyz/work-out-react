import styled from "styled-components";

import {
  faHouse,
  faComment,
  faDumbbell,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./common/Icon";

const Nav = styled.nav`
  position: fixed;
  width: 500px;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background-color: #27ae60;
  color: #000000;
  padding-top: 15px;
`;

const NavigationBar = () => {
  const iconInfo = [
    { title: "홈", icon: faHouse, link: "home" },
    { title: "커뮤니티", icon: faComment, link: "community" },
    { title: "트래커", icon: faDumbbell, link: "tracker" },
    { title: "내정보", icon: faCircleInfo, link: "myinformation" },
  ];
  return (
    <Nav>
      {iconInfo.map((item) => (
        <Icon key={item.icon} info={item} />
      ))}
    </Nav>
  );
};

export default NavigationBar;
