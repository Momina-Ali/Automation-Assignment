// tests/api/reqres.spec.js
// Playwright API tests for Reqres – API key now needed
const { test, expect } = require('@playwright/test');

const API_URL = 'https://reqres.in/api';
const API_KEY = process.env.REQRES_API_KEY || 'reqres-free-v1';

test.describe('Reqres API Tests', () => {

  // GET list of users
  test('should get a list of users', async ({ request }) => {
    const response = await request.get(`${API_URL}/users?page=2`, {
      headers: { 
        'x-api-key': API_KEY,
        'User-Agent': 'Playwright Test'
      }
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.page).toBe(2);
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);
  });

  // GET single user
  test('should get a single user', async ({ request }) => {
    const userId = 2;
    const response = await request.get(`${API_URL}/users/${userId}`, {
      headers: { 
        'x-api-key': API_KEY,
        'User-Agent': 'Playwright Test'
      }
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(userId);
    expect(body.data).toHaveProperty('email');
  });

  // POST create user
  test('should create a new user', async ({ request }) => {
    const newUser = { name: 'morpheus', job: 'leader' };
    const response = await request.post(`${API_URL}/users`, { 
      data: newUser,
      headers: { 
        'x-api-key': API_KEY,
        'User-Agent': 'Playwright Test'
      }
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(newUser.name);
    expect(body.job).toBe(newUser.job);
    expect(body.id).toBeDefined();
  });

});
