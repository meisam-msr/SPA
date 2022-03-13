import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Blog from "./components/Blog";
import PostsPage from "./pages/PostsPage";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { path: "/blogs", component: BlogPage },
  { path: "/posts/:id([0-9]+)?", component: PostsPage },
  { component: NotFound },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
