import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddNewUser from "./pages/AddNewUser/AddNewUser.jsx";
import Home from "./pages/Home/Home.jsx";
import SingleUser from "./pages/SingleUser/SingleUser.jsx";

//

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <SingleUser />,
  },
  {
    path: "/add-new-user",
    element: <AddNewUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
