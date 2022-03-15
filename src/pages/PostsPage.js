import { useParams } from "react-router-dom";

const PostsPage = () => {
  const id = useParams().id || 1;

  return (
    <div>
      <h2>Post detail - {id}</h2>
      <div>{JSON.stringify(useParams())}</div>
    </div>
  );
};

export default PostsPage;
 