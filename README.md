

# Task Manager Application

Hey guys! Welcome to my **Task Manager** application. This is a simple yet powerful tool to manage tasks where users can add, edit, and filter tasks based on their current status.

## Tech Stack Used:

- **Vite.js**: I've used [Vite.js](https://vitejs.dev/) to improve the performance of the app. It's a build tool that is similar to React.js but provides faster hot-reloading, optimized builds, and much better performance during development and production.
  
- **React.js**: The core framework to build the UI, handling state and components in a clean and efficient way.
  
- **Bootstrap**: For rapid UI development and ensuring the app is responsive across various screen sizes.
  
- **CSS**: Custom styles are added to further enhance the look and feel of the application.
  
- **React Hooks**: Specifically, `useState` for managing state, `useEffect` for side effects, and **Props** for passing data between components.

- **Lazy Loading with React Suspense**: Used a custom `Loader` component for lazy loading during component loading, improving perceived performance.

## File Structure

The file structure of the application is simple and follows React best practices:

```
src/
│
├── components/                # All React components
│   ├── TaskForm.js            # Form to add new tasks
│   ├── TaskTable.js           # Table to display tasks
│   ├── Header.js              # Header for the app
│
├── loader/                    # Folder for the Loader component
│   ├── Loader.jsx             # Loader component for lazy loading
│   └── loader.css             # CSS for the Loader component
│
├── services/                  # Folder for API interaction
│   └── App.js                 # API file that interacts with the backend to fetch tasks
│
├── App.js                      # Main app component that holds everything together
├── App.css                     # Global CSS styles
└── index.js                    # The entry point for React
public/
│
├── task.webp                   # Favicon (stored in the public folder)
└── index.html                  # HTML template where the React app is injected
```

## Key Features:

1. **Task Addition**: You can add tasks with a title, description, and status (To Do, In Progress, Done).
   
2. **Inline Editing**: The task list allows you to directly edit a task by clicking on its values in the table.

3. **Filtering**: You can filter tasks by their current status (To Do, In Progress, Done) to easily manage your task workflow.

4. **Lazy Loading**: To enhance the performance of the app, a `Loader` component is used to indicate loading states while data or components are being fetched asynchronously.

5. **Responsive Design**: The app is fully responsive and works well on both mobile and desktop using **Bootstrap**'s grid system and custom CSS for fine-tuning the layout.

6. **Props**: Props are used for passing data from parent to child components, making the app modular and easy to manage.

## Performance Improvements:

- **Vite.js**: By using Vite.js, I’ve optimized the application’s development experience and build times. Vite.js provides faster reloading and performance enhancements over traditional React apps, making the app much more efficient during development.

- **Lazy Loading**: Components that might take time to load are wrapped with `React Suspense` and the `Loader` component to show a loading spinner, reducing perceived wait times and improving the user experience.

- **API Folder (`services/App.js`)**: The app interacts with an API to fetch and process data. The separation of API logic into the `services` folder keeps the code modular and organized, improving maintainability.

- **Code Splitting**: I've ensured that only the required components are loaded when needed, reducing the initial load time of the application.

- **Efficient Rendering**: I've utilized React's built-in features like `useState` and `useEffect` to efficiently manage the state of tasks, reducing unnecessary re-renders and keeping the app fast.

## How to Run the Application:

1. Clone the repository:

git clone https://github.com/yourusername/task-manager.git

2. Navigate to the project directory:

cd task-manager

3. Install the dependencies:

npm install

4. Start the development server:

npm run dev


## Conclusion:

This Task Manager app is a simple but feature-rich way to manage tasks effectively, with a modern and optimized tech stack. By using **Vite.js**, **Bootstrap**, **React**, **Lazy Loading**, and **Props**, we've created an app that's both fast and easy to use, with a responsive design that works across devices.

