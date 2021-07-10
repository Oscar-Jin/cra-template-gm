import Login from "../features/auth/Login";
import Logout from "../features/auth/Logout";
import App from "../features/home/App";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/home",
    component: App,
  },
];

export default routes;
