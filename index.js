const express = require('express');
const { createMockMiddleware } = require('openapi-mock-express-middleware');

const app = express();

app.use(
  '/api', // root path for the mock server
  createMockMiddleware({ file: 'api-specs/manuelccosta-Questions_Data_Vault_QDV-API-1.0.0-resolved.yaml' })

);

app.listen(8080, () => console.log('Server listening on port 8080'))