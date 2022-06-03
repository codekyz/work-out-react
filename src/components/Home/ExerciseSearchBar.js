import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getExerciseFullData } from "../../api/api";
import { search, setSearchValue } from "../../store/exercise/exerciseSlice";

const SearchForm = styled.form`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 450px;
  padding: 10px 15px;
  flex-grow: 1;
  border-radius: 20px;
`;

const ExerciseSearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onExerciseSearch = (event) => {
    event.preventDefault();
    dispatch(setSearchValue(value));
    const promise = getExerciseFullData();
    promise.then((data) => dispatch(search(data.data)));
  };
  const onSearchValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <SearchForm onSubmit={(event) => onExerciseSearch(event)}>
        <SearchInput
          value={value}
          onChange={(event) => onSearchValue(event)}
          type="text"
          placeholder="운동을 검색하세요"
        />
      </SearchForm>
    </>
  );
};

export default ExerciseSearchBar;
