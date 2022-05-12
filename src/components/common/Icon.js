import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const IconBox = styled.div`
  p {
    font-size: 12px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    text-decoration: none;
    :hover {
      color: #ecf0f1;
      cursor: pointer;
    }
  }
`;

const Icon = ({ info }) => {
  return (
    <IconBox>
      <Link to={info.link}>
        <FontAwesomeIcon icon={info.icon} size="2x" />
        <p>{info.title}</p>
      </Link>
    </IconBox>
  );
};

export default Icon;
