import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TaskView from "./components/TaskView.jsx";
import SignUp from "./components/SignUp.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <App />],
  },
  {
    path: "/task-view",
    element: [<Navbar />, <TaskView />]
  },
  {
    path: "/sign-up",
    element: [<Navbar />, <SignUp />]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)