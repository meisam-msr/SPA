import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Blog from "./components/Blog";
import PostsPage from "./pages/PostsPage";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/posts/:id([0-9]+)?", element: <PostsPage /> },
  { path: "/", element: <HomePage />, exact: true },
  { element: <NotFound /> },
];

export default routes;
