const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High'],
  },
  dueDate: {
    type: Date,
    required: true,
  },
  tags: [String],
});

module.exports = mongoose.model('Task', taskSchema);
