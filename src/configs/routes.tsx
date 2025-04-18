// import LoginView from "../views/loginView";
import PublicLayout from "@/components/PublicLayout";
import Detail from "@/views/Detail";
import Home from "@/views/Home/index";
const isNoOpen = false;

const NoOpen = [
  // {
  //   path: "/home",
  //   type: "public",
  //   component: <Generate />,
  // },
  // {
  //   path: "/",
  //   type: "public",
  //   component: <Generate />,
  // },
];

const router = [
  {
    path: "/",
    type: "public",
    component: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
  },
  {
    path: "/detail",
    type: "public",
    component: <Detail />,
  },
];

export const routes = isNoOpen ? NoOpen : router;
