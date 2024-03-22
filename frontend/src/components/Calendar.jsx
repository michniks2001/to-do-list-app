import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Cookies from "js-cookie";
//import "./styles/Calendar.css";

const Calendar = () => {
  const [tasks, setTasks] = useState([]);
  const user = parseInt(Cookies.get("user_id"));

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:8000/tasks/list/${user}/`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchTasks();
  }, []);

  const renderTask = (task) => {
        return {
            title: task.task_name,
            start: task.start_date,
            deadline: task.deadline,
            backgroundColor: "lightblue",
            borderColor: "blue",
    };
  }
  const events = tasks.map(renderTask);

  if (user === undefined) {
    return (
      <h2>Log In to view Calendar</h2>
    )
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;