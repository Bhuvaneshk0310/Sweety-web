const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/contact-form")
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    try {
        await newContact.save();
        res.status(201).send("Contact information saved successfully!");
    } catch (error) {
        res.status(500).send("Error saving contact information.");
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
