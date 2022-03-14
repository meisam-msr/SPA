import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = ({}) => {
  // use query string lib
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log(query);

  const match = useParams();
  const id = match.id;
  
  return (
    <div>
      <h2>Blog detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}> go to next page?</Link>
    </div>
  );
};

export default Blog;
