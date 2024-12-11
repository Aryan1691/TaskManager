import { useState } from "react";
import '../index.css'

// eslint-disable-next-line react/prop-types
const TaskForm = ({ addTask }) => {
  // State to manage the task form input values
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  // Handle changes to input fields (title, description, and status)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding value in the task state
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Pass the new task object to the addTask function provided via props
    addTask(newTask);

    // Reset the form fields after task is added
    setNewTask({ title: " ", description: " ", status: "To Do" });
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        {/* Form row containing input fields */}
        <div className="row g-3 align-items-center">
          {/* Title Input */}
          <div className="col-md-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={newTask.title}
              onChange={handleChange} // Update task title on change
              required
            />
          </div>

          {/* Description Input */}
          <div className="col-md-5">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={newTask.description}
              onChange={handleChange} // Update task description on change
              required
            />
          </div>

          {/* Status Dropdown */}
          <div className="col-md-2">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="form-select"
              value={newTask.status}
              onChange={handleChange} // Update task status on change
              required
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-md-2">
            <button type="submit" className=" button btn mt-4 w-100">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
