const request = require('supertest');
const app = require('../app');
const server = request(app);

describe('Test /rates GET', () => {
  test('Request rates for valid pairs', async () => {
    const data = `BTC-USDT,ETH-USDT`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);

    expect(res.statusCode).toBe(200);
    data.split(',').forEach((pair) => {
      expect(res.body).toHaveProperty(pair);
    });
  });
  test('Request rates for valid pairs', async () => {
    const data = `BTC-USDT,ETH-USDT`.toLocaleLowerCase();
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates with empty params', async () => {
    const data = ``;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid pair', async () => {
    const data = `BTC-USDT`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);

    expect(res.statusCode).toBe(200);
    data.split(',').forEach((pair) => {
      expect(res.body).toHaveProperty(pair);
    });
  });
  test('Request rates for invalid pair', async () => {
    const data = `INVALID`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid and invalid pairs', async () => {
    const data = `BTC-USDT,INVALID`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid pairs format, with unknown tiker', async () => {
    const data = `BTC-invalid`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid pairs format, with unknown tiker', async () => {
    const data = `BTC-USDT, BTC-invalid`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid pairs format, with unknown tiker', async () => {
    const data = `BTC-UDSE`;
    const url = `/api/v1/rates?pairs=${data}`;
    const res = await server.get(url);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

describe('Test /rates POST', () => {
  test('Request rates for valid pairs', async () => {
    const data = { pairs: [`BTC-USDT`, `ETH-USDT`] };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(200);
    data.pairs.forEach((pair) => {
      expect(res.body).toHaveProperty(pair);
    });
  });
  test('Request rates for valid pairs in lowercase', async () => {
    const data = { pairs: [`BTC-usdt`] };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(400);
  });
  test('Request rates with empty request', async () => {
    const data = { pairs: '' };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates without requested fields', async () => {
    const data = { NoPairs: [`BTC-USDT`, `invalid`] };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates with invalid data type', async () => {
    const data = { pairs: `String` };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  test('Request rates for valid pairs', async () => {
    const data = { pairs: [`BTC-USDT`, `ETH-USDT`] };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(200);
    data.pairs.forEach((pair) => {
      expect(res.body).toHaveProperty(pair);
    });
  });
  test('Request rates for valid pairs', async () => {
    const data = { pairs: [`BTC-USDT`, `ETH-USDT`, `BTC-USDT`, `ETH-USDT`] };
    const url = `/api/v1/rates`;
    const res = await server.post(url).send(data);
    expect(res.statusCode).toBe(200);
    data.pairs.forEach((pair) => {
      expect(res.body).toHaveProperty(pair);
    });
  });
});
