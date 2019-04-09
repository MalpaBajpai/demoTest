import request from 'supertest';

export const requestGet = (baseUrl, path) => (
  request(baseUrl)
    .get(path)
);

export const requestPost = (baseUrl, path, body) => (
  request(baseUrl)
    .post(path)
    .send(body)
);
