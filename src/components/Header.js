import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.header`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  h2 {
    color: #27ae60;
  }
`;

const Header = () => {
  return (
    <Wrap>
      <h2>Let's Work Out!</h2>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </Wrap>
  );
};

export default Header;
