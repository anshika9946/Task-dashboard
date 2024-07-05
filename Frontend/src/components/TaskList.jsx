import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api/api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        console.log(fetchedTasks); // Check fetched tasks
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    getTasks();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
