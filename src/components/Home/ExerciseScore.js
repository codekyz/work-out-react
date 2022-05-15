import styled from "styled-components";

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  span {
    font-size: 12px;
  }
`;

const ExerciseScore = ({ props }) => {
  return (
    <Score>
      <span>MET계수</span>
      {props}
    </Score>
  );
};

export default ExerciseScore;
