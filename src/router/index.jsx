import { createBrowserRouter } from "react-router-dom";
import { mainRouter } from "../utils";
import MainLayout from "../components/mainLayout";
import ErrorPage from "../components/errorPage";
import PrivateRoute from "../components/privateRoute";
import Login from "../pages/login";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: mainRouter
      .filter(route => route.path !== '/login') // loginni mainLayoutdan chiqaramiz
      .map(({ path, Components, private: isPrivate, id }) => ({
        path,
        key: id,
        element: isPrivate
          ? <PrivateRoute><Components /></PrivateRoute>
          : <Components />,
        errorElement: <ErrorPage />
      })),
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <h1>Not Found</h1>
  }
])