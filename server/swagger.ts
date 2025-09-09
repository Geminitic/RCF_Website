import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Syrian CSO Events API',
      version: '2.0.0',
      description: 'API for scraping and serving Syrian civil society events'
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3001'
      }
    ]
  },
  apis: ['./server/routes/*.ts']
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
