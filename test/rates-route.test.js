const request = require('supertest');
const app = require('../app');
const server = request(app);

describe('Test /rates GET', () => {
  test('Request rates for valid pairs', async () => {
    const data = `BTC-USDT,ETH-USDT`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(200);
  });
  test('Request rates for valid pairs', async () => {
    const data = ``;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
  });
  test('Request rates for valid pairs', async () => {
    const data = `BTC-USDT`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(200);
  });
  test('Request rates for valid pairs', async () => {
    const data = `INVALID`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
  });
  test('Request rates for valid pairs', async () => {
    const data = `BTC-USDT,INVALID`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
  });
  test('Request rates for valid pairs', async () => {
    const data = `BTC-invalid`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
  });
});

describe('Test /rates POST', () => {
  test('Request rates for valid pairs', async () => {
    const data = { pairs: [`BTC-USDT`, `ETH-USDT`] };
    const url = `/api/v1/rates`;
    console.log('url', url);
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(200);
  });
});
