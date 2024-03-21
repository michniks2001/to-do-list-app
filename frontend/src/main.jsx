import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import TaskView from "./components/TaskView.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Calendar from "./components/Calendar.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import CreateTask from "./components/CreateTask.jsx";
import UpdateName from "./components/UpdateName.jsx";
import UpdateEmail from "./components/UpdateEmail.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: [
      <Navbar key="navbar" />,
      <App key="app" />
    ],
  },
  {
    path: "/calendar",
    element: [
      <Navbar key="navbar" />, 
      <Calendar key="calendar" />
    ],
  },
  {
    path: "/task-view",
    element: [
      <Navbar key="navbar" />, 
      <TaskView key="taskView" />
    ],
  },
  {
    path: "/create-task",
    element: [
      <Navbar key="navbar" />, 
      <CreateTask key="createTask" />
    ]
  },
  {
    path: "/sign-up",
    element: [
      <Navbar key="navbar" />, 
      <SignUp key="signup" />
    ]
  },
  {
    path: "/login",
    element: [
      <Navbar key="navbar" />, 
      <Login key="login" />
    ]
  },
  {
    path: "/profile",
    element: [
      <Navbar key="navbar" />,
      <ProfilePage key="profilePage" />
    ]
  },
  {
    path: "/update-name",
    element: [
      <Navbar key="navbar" />,
      <UpdateName key="updateName" />
    ]
  },
  {
    path: "/update-email",
    element: [
      <Navbar key="navbar" />,
      <UpdateEmail key="updateEmail" />
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)