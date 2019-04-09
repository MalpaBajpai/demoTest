import { Given } from 'cucumber';
import { requestGet } from '../utility/requestAPI';

const APIEndpoint = 'https://reqres.in';

Given('I make get request {string}', async function (path) {
  const res = await requestGet(APIEndpoint, path);

  console.log(res);
});