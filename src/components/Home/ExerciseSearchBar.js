import { useEffect, useState } from "react";
import styled from "styled-components";
import { getExerciseFullData } from "../../api/api";
import ExerciseCard from "./ExerciseCard";

const SearchForm = styled.form`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  flex-grow: 1;
  border-radius: 20px;
`;

const ExerciseSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [exerciseFullData, setExerciseFullData] = useState();
  const promise = getExerciseFullData();
  const getFullData = () =>
    promise.then((data) => setExerciseFullData(data.data));

  const onExerciseSearch = (event) => {
    event.preventDefault();
    getFullData();
    const re = new RegExp(".*" + searchValue + ".*", "g");
    setSearchResult(
      exerciseFullData.filter((exercise) => exercise.운동명.match(re))
    );
    setSearchValue("");
  };

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSearchResult();
  }, []);

  return (
    <>
      {searchResult ? (
        <ExerciseCard props={searchResult} />
      ) : (
        <SearchForm onSubmit={(event) => onExerciseSearch(event)}>
          <SearchInput
            value={searchValue}
            onChange={(event) => onSearchValue(event)}
            type="text"
            placeholder="운동을 검색하세요"
          />
        </SearchForm>
      )}
    </>
  );
};

export default ExerciseSearchBar;
