import { Given, When, Then } from 'cucumber';
import *  as utility from '../utility/utility';

let fileData;
let updateData;

Given('I read file {string}', async function (fileName) {
  fileData = await utility.readfile(fileName);
});

When('I update {string} as {string}', function (keyToBeUpdated, newValue) {
  updateData = JSON.parse(fileData);
  updateData[keyToBeUpdated] = newValue;
});

When('I update name {string} to {string}', function (oldName, newName) {
  updateData = fileData.replace(oldName, newName);
});

Then('I save the file string {string}', function (fileName) {
  utility.writeFile(fileName, JSON.stringify(updateData));
});

Then('I save the file {string}', function (fileName) {
  utility.writeFile(fileName, updateData);
});