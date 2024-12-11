import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const mappedTask = response.data.slice(0, 20).map((task) => ({
          id: task.id,
          title: task.title,
          description: task.title,
          status: task.completed ? "Done" : "To Do",
        }));

        setTask(mappedTask);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  },[]);


  return tasks;
};

export default App;
