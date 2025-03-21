import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/UserModel';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Register new user (admin/employee)
export const registerUser  = async (req: Request, res: Response): Promise<void> => {
  const { username, password, name, role } = req.body;

  // Validate required fields
  if (!username || !password || !name || !role) {
    res.status(400).json({ message: 'Please provide all required fields: username, password, name, role' });
    return; // Ensure to return after sending a response
  }

  try {
    // Check if the user already exists
    const existingUser  = await User.findOne({ username });
    if (existingUser ) {
      res.status(400).json({ message: 'Username already exists' });
      return; // Return to prevent further execution
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = new User({ username, password: hashedPassword, name, role });

    await newUser .save();
    res.status(201).json({ message: 'User  registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
};

// backend/src/controllers/userController.ts
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    res.status(400).json({ message: 'Please provide both username and password' });
    return;
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        role: user.role,
        username: user.username 
      }, 
      process.env.JWT_SECRET_KEY as string, 
      { expiresIn: '1h' }
    );

    // Send response with token and role
    res.status(200).json({ 
      token,
      role: user.role,
      username: user.username
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error logging in', error: err });
  }
};