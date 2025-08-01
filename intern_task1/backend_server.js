const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const internRoutes = require('./routes/interns');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/internDashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"));

app.use('/api/interns', internRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
