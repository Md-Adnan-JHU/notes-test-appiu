import {config}  from './wdio.shared.conf';

// ====================
// Runner Configuration
// ====================
config.runner = 'local',

config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/**/*.ts'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 6",
    "appium:automationName": "UIAutomator2",
    "appium:app":  "/home/mohammad-adnan/Desktop/apium/task1/Notes/app/ColorNote Notepad.apk",
    "appium:autoGrantPermissions": true,
  }
]

// Test runner services
config.services = [
  [
      'appium',
      {
          args: {
              address: 'localhost',
              port: 4723
          },
          command: 'appium',
          logPath: './logs'
      }
  ]
],

exports.config = config;
