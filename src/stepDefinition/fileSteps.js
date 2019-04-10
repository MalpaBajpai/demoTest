import { Given, When, Then } from 'cucumber';
import convertor from 'xml-js';
import *  as utility from '../utility/utility';

let fileData;
let updateData;

Given('I read file {string}', async function (fileName) {
  fileData = await utility.readfile(fileName);
});

When('I update {string} as {string} in JSON file', function (keyToBeUpdated, newValue) {
  updateData = JSON.parse(fileData);
  updateData[keyToBeUpdated] = newValue;
});

Then('I save the file string {string} in JSON file', function (fileName) {
  utility.writeFile(fileName, JSON.stringify(updateData));
});

When('I update key {string} to {string} in XML file', function (key, newValue) {
  updateData = convertor.xml2js(fileData, { compact: true});
  updateData.userDataBase.user[key]._text = newValue;
});

Then('I save the file {string} in XML file', function (fileName) {
  updateData = convertor.js2xml(updateData, { compact: true});
  utility.writeFile(fileName, updateData);
});
