import HomeePage from "./routes/homePage/HomeePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListePage from "./routes/listPage/ListePage";
import { RequireAuth, Layout } from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/register";
import Login from "./routes/loginPage/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";

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
        },
        {
          path: "/:id",
          element: <SinglePage />,
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
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
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
