import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.header`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
  h1 {
    color: #27ae60;
  }
`;

const Header = () => {
  return (
    <Wrap>
      <h1>Let's Work Out!</h1>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </Wrap>
  );
};

export default Header;
