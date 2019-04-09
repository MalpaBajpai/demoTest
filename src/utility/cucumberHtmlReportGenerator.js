import reporter from 'cucumber-html-reporter';
import path from 'path';

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../', '../', 'resources', 'output', 'cucumberOutput.json'),
  output: path.join(__dirname, '../', '../', 'reports', 'cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '0.0.1',
    'Test Environment': 'STAGING',
    Browser: 'Chrome',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
};

console.log(options.jsonFile);
console.log(options.output);
reporter.generate(options);
