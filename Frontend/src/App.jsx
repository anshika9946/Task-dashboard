import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks } from './api/api';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <TaskForm fetchTasks={loadTasks} />
      <TaskList tasks={tasks} fetchTasks={loadTasks} />
    </div>
  );
};

export default App;
