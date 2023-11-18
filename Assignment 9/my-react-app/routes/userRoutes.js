const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**

 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Invalid details
 */
router.post('/user/create', userController.createUser);

/**
 
 * /user/edit:
 *   put:
 *     summary: Update user details
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string  
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '400':
 *         description: Invalid request or user not found
 */
router.put('/user/edit', userController.updateUser);

/**

* /user/delete:
*   delete:
*     summary: Delete a user
*     tags:
*       - User
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*     responses:
*       '200':
*         description: User deleted successfully
*       '400':
*         description: Invalid request or user not found
*/
router.delete('/user/delete', userController.deleteUser);

/**

* /user/getAll:
*   get:
*     summary: Get all users (excluding passwords)
*     tags:
*       - User
*     responses:
*       '200':
*         description: List of users (hashed passwords )
*       '400':
*         description: Invalid request
*/
router.get('/user/getAll', userController.getAllUsers);
/**

 * /user/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '401':
 *         description: Unauthorized
 *       '400':
 *         description: Invalid details
 */
router.post('/user/login', userController.login);


module.exports = router;
