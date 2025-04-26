import { createBrowserRouter } from "react-router-dom";
import { mainRouter } from "../utils";
import MainLayout from "../components/mainLayout";
import ErrorPage from "../components/errorPage";
import PrivateRoute from "../components/privateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: mainRouter.map(({ path, Components, private: isPrivate, id }) => ({
          path,
          key: id,
          element: isPrivate
            ? <PrivateRoute><Components /></PrivateRoute>
            : <Components />,
          errorElement: <ErrorPage />
        }))
      },
    {
        path:'*',
        element:<h1>Not Found</h1>
    }
])