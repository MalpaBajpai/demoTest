# test automation project

## Question-1

> read XML file and update.

* feature file `updateXML.feature`
* tag name `@Update_XML`
* this feature file reads a XML file, update an existing name with new name (parameterized from feature file) and write it back to a new file.
* the base XML file: `resources/demoXML.xml`
* run the test using `yarn start` (this command will build and test the feature files)
* once the test is executed, updated JSON file is saved in `resources/demoXMLNew.xml`

## Question-2

> read JSON file and update a key.

* feature file `updateJSON.feature`
* tag name `@Update_JSON`
* this feature file reads a JSON file, parse, update a perticular key(parameterized from feature file) and write it back to a new file.
* the base JSON file: `resources/demoJSON.json`
* run the test using `yarn start` (this command will build and test the feature files)
* once the test is executed, updated JSON file is saved in `resources/demoJSONNew.json`

## Question-3

> get request and validate body and header

* API test is done using supertest.
* feature file name: `validateAPI.feature`
* tag name: `@Validate_GET`
* this feature file makes a GET request and validate the body and HTTP headers.

## Question-4

> post request and validate body and header

* API test is done using supertest.
* feature file name: `validateAPI.feature`
* tag name: `@Validate_POST`
* this feature file makes a POST request and validate the body and HTTP headers.

## Question-5

> HTML report

* Run all the feature files using `yarn start`
* Post execution, generate HTML report using `yarn report`