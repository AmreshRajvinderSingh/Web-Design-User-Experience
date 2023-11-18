const userService = require('../services/userServices');

async function createUser(req, res) {
    try {
        const result = await userService.createUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateUser(req, res) {
    try {
        const result = await userService.updateUser(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteUser(req, res) {
    try {
        const result = await userService.deleteUser(req.body.email);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 } 
 async function login(req, res) {
        try {
            const user = await userService.login(req.body);
            if (user) {
                res.json({ message: 'Login successful' , fullName: user.fullName});
            } else {
                res.status(401).json({ message: 'Login failed' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }    

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    login
};
