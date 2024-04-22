// ./src/app/api/health.test.js
//
// TDD on the health API endpoint.

import { describe, expect, it } from '@jest/globals';
// Jest server test runs on Node.js env.
// Must use CommonJS module syntax.
const axios = require('axios').default;

describe('/api/heath route', () => {
  it('healthily returns 200 OK for GET requests', async () => {
    // Send a GET request to the /api/health endpoint.
    try {
      const response = await axios.get('http://localhost:3000/api/health');
      expect(response.status).toBe(200);
      expect(response.data).toBe('OK');
    } catch (error) {
      throw new Error(`Health check failed: ${error}`);
    }
  });
});
