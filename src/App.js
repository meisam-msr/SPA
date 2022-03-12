import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
