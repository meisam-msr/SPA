import { Link, withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
    return (
    <header>
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
    </header>
  );
};

export default withRouter(Navigation);