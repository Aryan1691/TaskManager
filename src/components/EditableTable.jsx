import { useEffect, useState } from "react";
import { ReactTabulator } from "react-tabulator"; // Tabulator component for rendering tables
import "react-tabulator/lib/styles.css"; // Default Tabulator styles
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // Bootstrap styles for Tabulator
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap framework
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toast notification styles
import TaskForm from "./TaskForm"; // Component for adding tasks
import App from "../services/App"; // Function to fetch tasks from API or service
import Loader from "../loader/Loader"; // Loader component for showing loading state
import AOS from "aos"; // AOS for animations on scroll
import "aos/dist/aos.css"; // AOS CSS for animations

const EditableTable = () => {
  // Initialize AOS (Animation on Scroll) when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Ensure the animation happens only once
    });
  }, []);

  // Fetch tasks from the App service
  const tasksFromApi = App();
  // State variables to manage tasks and filter state
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("All");

  // Combine API tasks with local task state
  const allTasks = [...tasksFromApi, ...task];

  // Handle filter change to filter tasks by status
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter tasks based on the selected status
  const filteredTasks = allTasks.filter((task) => {
    if (filter === "All") return true; // Show all tasks if filter is "All"
    return task.status === filter; // Filter tasks by status
  });

  // Handle task deletion by filtering out the task with the given ID
  const handleDelete = (id) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!"); // Show success notification
  };

  // Handle adding a new task by updating the task state and generating a new ID
  const handleAddTask = (newTask) => {
    newTask.id = task.length + 21; // Generate a new task ID
    setTask((prev) => [...prev, newTask]); // Add the new task to the state
    toast.success("Task added successfully"); // Show success notification
  };

  // Define the columns for the ReactTabulator table
  const columns = [
    { title: "Task ID", field: "id", width: "10%" },
    { 
      title: "Title", 
      field: "title", 
      editor: "input", // Allows the title field to be editable
      width: "30%", 
    },
    { 
      title: "Description", 
      field: "description", 
      editor: "input", // Allows the description field to be editable
      width: "35%", 
    },
    { 
      title: "Status", 
      field: "status", 
      editor: "select", // Allows the status field to be selected from a dropdown
      editorParams: {
        values: ["To Do", "In Progress", "Done"], // Status options
      }, 
      width: "15%", 
    },
    { 
      title: "Actions", 
      formatter: () => '<button class="btn btn-outline-danger btn-sm">Delete</button>', // Action button to delete the task
      width: "10%", 
      align: "center", 
      cellClick: (e, call) => {
        const rowData = call.getData();
        handleDelete(rowData.id); // Handle the delete action on button click
      },
    },
  ];

  return (
    <>
      <h2 data-aos="zoom-in" className="h2 text-center mb-4 ">
        Editable Task Table
      </h2>

      <div className="container mt-5" data-aos="zoom-in">
        {/* Add Task Form */}
        <div className="card shadow-sm mb-4">
          <div className="card-body ">
            <h4 className="card-title mb-3">Add New Task</h4>
            <TaskForm addTask={handleAddTask} /> {/* Pass handleAddTask to TaskForm */}
          </div>
        </div>

        {/* Filter Section: Allows user to filter tasks by status */}
        <div
          className="d-flex justify-content-between align-items-center mb-4"
          data-aos="zoom-in"
        >
          <label htmlFor="statusFilter" className="form-label">
            Filter by Status
          </label>
          <select
            name="statusFilter"
            id="statusFilter"
            className="form-select w-auto"
            value={filter}
            onChange={handleFilterChange} // Update filter state when selection changes
          >
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Task Table */}
        <div className="table-responsive" data-aos="zoom-in">
          {/* ReactTabulator component for displaying the tasks */}
          <ReactTabulator
            data-aos="zoom-in"
            data={!filteredTasks ? <Loader /> : filteredTasks} // Show loader if no tasks are available
            columns={columns} // Pass the column configuration to ReactTabulator
            layout="fitData" // Automatically adjust columns to fit the data
            options={{ movableColumns: true, resizableRows: true }} // Enable column movement and row resizing
            style={{
              borderRadius: "10px", // Rounded corners for the table
              padding: "1px",
              overflow: "hidden", // Ensure content respects border radius
              border: "2px solid #ddd", // Optional border for the table
            }}
          />
        </div>

        {/* Toast Notifications */}
        <ToastContainer
          autoClose={3000} // Auto-close toast after 3 seconds
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default EditableTable;
