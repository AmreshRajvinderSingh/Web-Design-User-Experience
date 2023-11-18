const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Assignment 8 ',
      version: '1.0.0',
      description: 'CRUD user using node js and mongoDB',
    },
  },
  apis: ['./routes/userRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
