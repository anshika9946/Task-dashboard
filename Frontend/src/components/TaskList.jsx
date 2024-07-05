import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { fetchTasks } from '../api/api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks); // Update tasks state with fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    getTasks();
  }, []);

  const handleFetchTasks = async () => {
    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks); // Update tasks state with fetched tasks
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} fetchTasks={handleFetchTasks} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
