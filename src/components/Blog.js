import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h2>Blog detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}> go to next page?</Link>
    </div>
  );
};

export default Blog;
