import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const MainLayout = lazy(() => import("../components/mainLayout"));
export const mainRouter = [
  {
    id: 1,
    path: "/",
    title: "home",
    Components: Home,
  },
  {
    id:2,
    path:"/MainLayout",
    Components:MainLayout,
    title:"mainLayout",
  },
  {
    id:3,
    path: "/login",
    title: "login",
    Components: Login,
  },
];
