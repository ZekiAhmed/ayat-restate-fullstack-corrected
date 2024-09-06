import HomeePage from "./routes/homePage/HomeePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListePage from "./routes/listPage/ListePage";
import { RequireAuth, Layout } from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/register";
import Login from "./routes/loginPage/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeePage />,
        },
        {
          path: "/list",
          element: <ListePage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
    // <div className="layout">
    //   <div className="navba">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomeePage />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;
