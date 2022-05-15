import { useEffect, useState } from "react";
import { getExerciseData } from "../api/api";
import ExerciseCard from "../components/Home/ExerciseCard";

const Home = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const promise = getExerciseData();
  const getData = () => promise.then((data) => setExerciseData(data.data));

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {exerciseData.map((item) => (
        <ExerciseCard key={item.운동명} props={item} />
      ))}
    </>
  );
};

export default Home;
