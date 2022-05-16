import { useEffect, useState } from "react";
import { getExerciseData } from "../api/api";
import ExerciseCard from "../components/Home/ExerciseCard";
import ExerciseSearchBar from "../components/Home/ExerciseSearchBar";

const Home = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const promise = getExerciseData();
  const getData = () => promise.then((data) => setExerciseData(data.data));

  useEffect(() => {
    getData();
  }, []);

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
