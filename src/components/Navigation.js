import { Link, withRouter } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about-us">About-Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
