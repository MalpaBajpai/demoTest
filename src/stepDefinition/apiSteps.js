import { Given, Then } from 'cucumber';
import { requestGet, requestPost } from '../utility/requestAPI';
import assert from 'assert';

const APIEndpoint = 'https://jsonplaceholder.typicode.com';

let response;

Given('I make get request {string}', async function (path) {
  response = await requestGet(APIEndpoint, path);
});

Given('I make post request {string}', async function (path) {
  response = await requestPost(APIEndpoint, path, { title: 'foo', body: 'bar, userId: 1'});
});

Then('I validate status code {string}', function (status) {
  assert.strictEqual(response.status, Number(status), 'HTTP status validation failed');
});

Then('I validate key {string} has value {string} in body', function (key, value) {
  assert.strictEqual(response.body[key], Number(value), `${key} validation failed`);
});