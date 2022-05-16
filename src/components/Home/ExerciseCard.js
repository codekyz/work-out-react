import styled from "styled-components";
import ExerciseScore from "./ExerciseScore";

const Card = styled.div`
  width: 90%;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExerciseCard = ({ props }) => {
  const getExerciseName = (string) => {
    return string.split("\n")[0];
  };

  const onCardClick = (event) => {
    console.log(getExerciseName(event.target.innerText));
  };
  return (
    <Card onClick={(event) => onCardClick(event)}>
      {props.운동명}
      <ExerciseScore props={props["MET 계수"]} />
    </Card>
  );
};

export default ExerciseCard;
