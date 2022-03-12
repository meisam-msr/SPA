import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/profile" component={Profile} />
    </Layout>
  );
}

export default App;
