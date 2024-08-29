const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const chatRoutes = require('./routes/chat');
const scheduleRoutes = require('./routes/schedule');
const contactsRoutes = require('./routes/contacts');
const groupsRoutes = require('./routes/groups');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/groups', groupsRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
