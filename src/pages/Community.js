import { useSelector } from "react-redux";
import Post from "../components/community/Post";

const Community = () => {
  const postData = useSelector((state) => state.post.post);

  return (
    <>
      <h3>커뮤니티</h3>
      {postData.map((post) => (
        <Post key={post.number} props={post} />
      ))}
    </>
  );
};

export default Community;
