const express = require('express');
const router = express.Router();
const Intern = require('../models/Intern');

// Get all interns
router.get('/', async (req, res) => {
    const interns = await Intern.find();
    res.json(interns);
});

// Add intern
router.post('/', async (req, res) => {
    const newIntern = new Intern(req.body);
    await newIntern.save();
    res.json(newIntern);
});

// Delete intern
router.delete('/:id', async (req, res) => {
    await Intern.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
});

module.exports = router;
