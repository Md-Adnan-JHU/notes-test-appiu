import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {

// ============
// BrowserStack Credentials
// ============
    user : process.env.BROWSERSTACK_USER,
    key : process.env.BROWSERSTACK_KEY,

    // ====================
    // Runner Configuration
    // ====================
    // runner: 'local',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    // port: 4723,
    
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.ts'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 4,

    // ============
    // Capabilities
    // ============
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Google Pixel 3',
        'appium:automationName': 'UiAutomator2', 
        'appium:app' : "bs://94e9aaaa4683aab631c3ad0c2e706a6ed344eee2",
        "appium:autoGrantPermissions": true,
    }],


    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
    
    services : ['browserstack'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}