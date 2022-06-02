import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/exercise/exerciseSlice";
import { getExerciseData } from "../api/api";
import ExerciseCard from "../components/Home/ExerciseCard";
import ExerciseSearchBar from "../components/Home/ExerciseSearchBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = getExerciseData();
    promise.then((data) => dispatch(getData(data.data)));
  }, [dispatch]);

  const exerciseData = useSelector((state) => state.exercise);

  return (
    <>
      <h3>운동목록</h3>
      <ExerciseSearchBar />
      {exerciseData.map((item) => (
        <ExerciseCard key={item.운동명} props={item} />
      ))}
    </>
  );
};

export default Home;
