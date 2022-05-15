import styled from "styled-components";
import ExerciseScore from "./ExerciseScore";

const Card = styled.div`
  width: 450px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExerciseCard = ({ props }) => {
  return (
    <Card>
      {props.운동명}
      <ExerciseScore props={props["MET 계수"]} />
    </Card>
  );
};

export default ExerciseCard;
