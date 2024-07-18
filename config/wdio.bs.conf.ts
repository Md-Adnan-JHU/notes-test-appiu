import '../polyfill';
import {config}  from './wdio.shared.conf';

// ============
// BrowserStack Credentials
// ============
   config.user = process.env.BROWSERSTACK_USER;
   config.key = process.env.BROWSERSTACK_KEY;
    
    // ==================
    // Specify Test Files
    // ==================
    config.specs= [
        '../test/specs/**/*.ts'
    ],


    // ============
    // Capabilities
    // ============
    config.capabilities= [{
        platformName: 'Android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Google Pixel 3',
        'appium:automationName': 'UiAutomator2', 
        'appium:app' : "bs://94e9aaaa4683aab631c3ad0c2e706a6ed344eee2",
        "appium:autoGrantPermissions": true,
    }],

    
    config.services = ['browserstack'];

    exports.config = config;