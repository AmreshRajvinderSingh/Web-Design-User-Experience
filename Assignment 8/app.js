const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const PORT = 2050; // or any port you prefer

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name');


// Define a user schema and model
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  password: {
    type: String,
    required: true,
    validate: [
      (value) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value);
      },
      'Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 6 characters long.',
    ],
  },
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());

// User registration route
app.post('/user/create', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Hash the password with bcrypt before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
  }
});

app.put('/user/edit', async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
  
      // Validation for full name and password
      if (!fullName || !password) {
        return res.status(400).json({ message: 'Full name and password are required.' });
      }
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Update user details
      user.fullName = fullName;
      user.password = password;
  
      await user.save();
  
      res.json({ message: 'User details updated successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while updating the user.' });
    }
  });

  app.delete('/user/delete', async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find and delete the user by email
      const user = await User.deleteOne({ email });
  
      if (user.deletedCount===0) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      
  
       return res.json({ message: 'User deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }
  });

  
  app.get('/user/all', async (req, res) => {
    try {
      // Retrieve all users' full name, email, and password (Note: Passwords should not be stored or exposed this way in a real application)
      const users = await User.find({}, { fullName: 1, email: 1, password: 1 });
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching user information.' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
