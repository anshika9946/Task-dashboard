import { useState } from 'react';
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
    try {
      await createTask(newTask);
      fetchTasks(); // Refresh tasks after adding new task
      setNewTask({ title: '', description: '', priority: 'Low', dueDate: ''});
    } catch (error) {
      console.error('Error adding task:', error.message); // Log any errors
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Title:</label>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <label htmlFor="task-desc">Description:</label>
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
<div className="priority-date-container">
        <label htmlFor="task-priority">Priority:</label>
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

        <label htmlFor="task-date">Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleChange}
          required
        />
</div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

// PropTypes validation
TaskForm.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
};

export default TaskForm;
