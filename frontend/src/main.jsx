import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import TaskView from "./components/TaskView.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Calendar from "./components/Calendar.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <App />],
  },
  {
    path: "/calendar",
    element: [<Navbar />, <Calendar />],
  },
  {
    path: "/task-view",
    element: [<Navbar />, <TaskView />],
  },
  {
    path: "/sign-up",
    element: [<Navbar />, <SignUp />]
  },
  {
    path: "/login",
    element: [<Navbar />, <Login />]
  },
  {
    path: "/profile",
    element: [<Navbar />, <ProfilePage />]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)