import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostsPage from "./pages/PostsPage";
import Profile from "./pages/Profile";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {/* {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/posts/:id([0-9]+)?" element={<PostsPage />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
