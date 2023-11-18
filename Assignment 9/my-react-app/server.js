const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const connectionStr = "mongodb://localhost/userapi";
mongoose.set("strictQuery", true);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionStr, options,);
// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/', userRoutes);

app.listen(3001, () => {
    console.log("Server initiated on 3001")
});