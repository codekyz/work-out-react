import styled from "styled-components";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const PostCard = styled(Card)`
  width: 90%;
  background-color: #efefef;
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const PostCardMedia = styled(CardMedia)`
  height: 130px;
  background-color: #27ae60;
`;

const Post = ({ props }) => {
  return (
    <PostCard>
      <PostCardMedia />
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body2">{props.contents}</Typography>
      </CardContent>
    </PostCard>
  );
};

export default Post;
