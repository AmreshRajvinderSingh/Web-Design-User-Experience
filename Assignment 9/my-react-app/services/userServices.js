const bcrypt = require('bcrypt');
const User = require('../models/user');
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const nameRegex = /^[a-zA-Z0-9 ]+$/;

async function createUser({ fullName, email, password }) {
    if (!fullName || !email || !password) {
        throw new Error('Full Name, Email, and Password are required');
    }

    if (!fullName.match(nameRegex)) {
        throw new Error('Invalid name format, symbols not allowed');
    }

    if (!email.match(emailRegex)) {
        throw new Error('Invalid email format');
    }

    if (!password.match(passwordRegex)) {
        throw new Error('Password is not strong enough');
    }

    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ fullName });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }
    if (existingUsername) {
        throw new Error('User with this same name already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();

    return { message: 'User created successfully' };
}

async function updateUser({ fullName, email, password }) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('No user registered with given email');
    }

    if (!fullName.match(nameRegex)) {
        throw new Error('Invalid name format, symbols not allowed');
    }

    if (password && !password.match(passwordRegex)) {
        throw new Error('Password is not strong enough');
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;
    await User.findOneAndUpdate({ email }, { fullName, password: hashedPassword });

    return { message: 'User updated successfully' };
}

async function deleteUser(email) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('No user registered with given Email');
    }

    await User.findOneAndDelete({ email });
    return { message: 'User deleted successfully' };
}

async function getAllUsers() {
    const users = await User.find({}, { password: 0, __v: 0 });
    return users;
}

async function login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('No user registered with this email');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    return { 
        message: 'Login successful',
        fullName: user.fullName
};
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    login
};
