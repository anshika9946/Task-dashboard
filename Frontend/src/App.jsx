import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { fetchTasks } from './api/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error.message));
  }, []);

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
