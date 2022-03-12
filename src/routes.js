import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Blog from "./components/Blog";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { path: "/blogs", component: BlogPage },
  { component: NotFound },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
