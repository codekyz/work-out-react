export const getExerciseData = () => {
  return fetch(
    "https://api.odcloud.kr/api/15068730/v1/uddi:12fe14fb-c8ca-47b1-9e53-97a93cb214ed?page=1&perPage=30&serviceKey=AqpfTJyuezhGGNKwcBJUU76W1IgCgylmkrkgvTh34pTql%2B70glFj06dC3rF7CyzN22e46B4vQahFHzQI5EXVsQ%3D%3D"
  )
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
};
