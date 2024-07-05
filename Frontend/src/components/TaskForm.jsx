import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { createTask } from '../api/api';

const TaskForm = ({ fetchTasks }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
    dueDate: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskToSubmit = {
      ...newTask,
      tags: newTask.tags.split(',').map(tag => tag.trim()),
    };
    console.log('Submitting task:', taskToSubmit); // Check if handleSubmit is triggered
    try {
      await createTask(taskToSubmit);
      fetchTasks(); // Refresh tasks after adding new task
      setNewTask({ title: '', description: '', priority: 'Low', dueDate: '', tags: '' });
    } catch (error) {
      console.error('Error adding task:', error.message); // Log any errors
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleChange}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tags"
          value={newTask.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

// PropTypes validation
TaskForm.propTypes = {
  fetchTasks: PropTypes.func.isRequired, // Ensure fetchTasks is a required function prop
};

export default TaskForm;
