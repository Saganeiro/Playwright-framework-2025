import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BOOKER_API || 'https://restful-booker.herokuapp.com';

test.describe('Restful Booker API Tests', () => {

  test('GET /booking - should return list of bookings', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/booking`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('POST /booking - should create new booking', async ({ request }) => {
    const newBooking = {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-01-01',
        checkout: '2025-01-05'
      },
      additionalneeds: 'Breakfast'
    };

    const response = await request.post(`${BASE_URL}/booking`, {
      data: newBooking,
      headers: { 'Content-Type': 'application/json' }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.booking).toBeDefined();
    expect(body.booking.firstname).toBe('John');
  });

  test('GET /ping - should confirm API is alive', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/ping`);
    expect(response.status()).toBe(201);
  });

});
