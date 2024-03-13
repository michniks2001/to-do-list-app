import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./styles/Calendar.css";

const Calendar = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8000/tasks/list/");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error.message);
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

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;