import React, { useEffect } from "react";
// import logo from "./logo.svg";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { routes as routesConfig } from "./configs/routes";
import { SnackbarProvider, useSnackbar } from "notistack";
import { toast } from "./components/Toast";

function App() {

  return (
    <BrowserRouter>
     
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.redirect) {
      return (
        <Route
          key={index}
          path={route.path}
          element={<Navigate to={route.redirect} />}
        />
      );
    }

    return (
      <Route key={index} path={route.path} element={route.component}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

function AppContent() {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    toast.init(enqueueSnackbar);
  }, [enqueueSnackbar]);
  return (
    <SnackbarProvider
      maxSnack={99}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      style={{
        minWidth: "300px !important",
      }}
    >
      <div className="">
        <Routes>{renderRoutes(routesConfig)}</Routes>
      </div>
    </SnackbarProvider>
  );
}
