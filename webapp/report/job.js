module.exports = {
  "initialCwd": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket",
  "browserArgs": [],
  "cwd": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket",
  "config": "ui5-test-runner.json",
  "port": 53089,
  "reportDir": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/webapp/report",
  "pageTimeout": 0,
  "failFast": false,
  "failOpaFast": false,
  "keepAlive": false,
  "logServer": false,
  "parallel": 2,
  "browser": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/node_modules/ui5-test-runner/src/defaults/puppeteer.js",
  "npmInstall": true,
  "browserCloseTimeout": 2000,
  "browserRetry": 1,
  "outputInterval": 30000,
  "offline": false,
  "localhost": "localhost",
  "ci": false,
  "webapp": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/webapp",
  "pageCloseTimeout": 250,
  "globalTimeout": 0,
  "screenshot": true,
  "screenshotOnFailure": true,
  "screenshotTimeout": 5000,
  "splitOpa": false,
  "reportGenerator": [
    "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/node_modules/ui5-test-runner/src/defaults/report.js"
  ],
  "progressPage": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/node_modules/ui5-test-runner/src/defaults/report/default.html",
  "coverageSettings": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/node_modules/ui5-test-runner/src/defaults/.nycrc.json",
  "coverageTempDir": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/.nyc_output",
  "coverageReportDir": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/coverage",
  "coverageReporters": [
    "lcov",
    "cobertura"
  ],
  "coverageCheckBranches": 0,
  "coverageCheckFunctions": 0,
  "coverageCheckLines": 0,
  "coverageCheckStatements": 0,
  "coverageRemoteScanner": "/Users/ramishra/Desktop/Projects/OpenUI5CodeJam/codejam.supermarket/node_modules/ui5-test-runner/src/defaults/scan-ui5.js",
  "serveOnly": false,
  "watch": false,
  "startWaitMethod": "GET",
  "startTimeout": 5000,
  "endTimeout": 15000,
  "ui5": "https://ui5.sap.com",
  "disableUi5": false,
  "testsuite": "test/testsuite.qunit.html",
  "coverageProxy": false,
  "coverageProxyInclude": ".*",
  "coverageProxyExclude": "/((test-)?resources|tests?)/",
  "url": [
    "http://localhost:4004/uimodule/test/testsuite.qunit.html"
  ],
  "mode": "url",
  "coverage": false,
  "libs": [],
  "env": {},
  "browserCapabilities": {
    "modules": [
      "puppeteer"
    ],
    "screenshot": ".png",
    "scripts": true,
    "parallel": true,
    "traces": [
      "console",
      "network"
    ]
  },
  "browserModules": {
    "puppeteer": "/opt/homebrew/lib/node_modules/puppeteer"
  },
  "start": "2025-07-07T14:04:36.053Z",
  "failed": true,
  "testPageUrls": [
    "http://localhost:4004/uimodule/test/Test.qunit.html?testsuite=test-resources/uimodule/testsuite.qunit&test=integration/opaTests",
    "http://localhost:4004/uimodule/test/Test.qunit.html?testsuite=test-resources/uimodule/testsuite.qunit&test=unit/unitTests"
  ],
  "qunitPages": {
    "http://localhost:4004/uimodule/test/Test.qunit.html?testsuite=test-resources/uimodule/testsuite.qunit&test=integration/opaTests": {
      "id": "ONsKiu9CuRE",
      "start": "2025-07-07T14:04:40.554Z",
      "isOpa": true,
      "failed": 1,
      "passed": 0,
      "count": 1,
      "modules": [
        {
          "name": "Sample Journey",
          "tests": [
            {
              "name": "Should search for Coca-Cola",
              "testId": "8c80b8d0",
              "skip": false,
              "start": "2025-07-07T14:04:40.571Z",
              "logs": [
                {
                  "result": false,
                  "message": "Did not find the search field on the Main view and could not enter text\nFailure in Opa success function\nException thrown by the testcode:'TypeError: Cannot read properties of undefined (reading '0')\nTypeError: Cannot read properties of undefined (reading '0')\n    at constructor.onkeydown (http://localhost:4004/uimodule/resources/sap/ui/core/delegate/ScrollEnablement.js:371:37)\n    at each (http://localhost:4004/uimodule/resources/sap/ui/core/Element.js:351:31)\n    at Element._handleEvent (http://localhost:4004/uimodule/resources/sap/ui/core/Element.js:371:3)\n    at UIArea._handleEvent (http://localhost:4004/uimodule/resources/sap/ui/core/UIArea.js:1056:15)\n    at HTMLDivElement.dispatch (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:5430:27)\n    at elemData.handle (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:5234:28)\n    at Object.trigger (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:8823:12)\n    at HTMLInputElement.<anonymous> (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:8901:17)\n    at jQuery.each (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:385:19)\n    at jQuery.fn.init.each (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:207:17)'\nThis is what Opa logged:\nFound 0 blocking out of 492 tracked timeouts -  sap.ui.test.autowaiter._timeoutWaiter#hasPending\nAutoWaiter syncpoint -  sap.ui.test.autowaiter._autoWaiter\nFound 2 controls of type 'View' in page -  sap.ui.test.Opa5\nFound 1 views with viewName 'uimodule.ext.main.Main' -  sap.ui.test.Opa5\nFound view with ID 'undefined' and viewName 'uimodule.ext.main.Main' -  sap.ui.test.Opa5\nFound control with ID 'searchField' and controlType 'undefined' in view 'uimodule.ext.main.Main' -  sap.ui.test.Opa5\n1 out of 1 controls met the matchers pipeline requirements -  sap.ui.test.pipelines.MatcherPipeline\nFound a DOM reference for the control 'Element sap.m.SearchField#uimodule::ProductsMain--searchField'. Executing 'sap.ui.test.actions.EnterText' on the DOM element with ID 'uimodule::ProductsMain--searchField-I' -  sap.ui.test.actions.EnterText\nEnter text in control Element sap.m.SearchField#uimodule::ProductsMain--searchField -  sap.ui.test.actions.EnterText\nControl Element sap.m.SearchField#uimodule::ProductsMain--searchField could not be focused - maybe you are debugging? -  sap.ui.test.actions.EnterText\nDispatched focus event: 'focusin' -  sap.ui.test.actions.EnterText\nDispatched focus event: 'focus' -  sap.ui.test.actions.EnterText\nDispatched focus event: 'activate' -  sap.ui.test.actions.EnterText",
                  "actual": false,
                  "expected": true,
                  "negative": false,
                  "runtime": 7566,
                  "todo": false,
                  "source": "    at Assert.ok (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/qunit-2.js:2201:11)\n    at http://localhost:4004/uimodule/resources/sap/ui/test/opaQunit.js:117:11\n    at Object.<anonymous> (http://localhost:4004/uimodule/resources/sap/ui/test/opaQunit.js:248:6)\n    at fire (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:3500:31)\n    at Object.fireWith [as rejectWith] (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery.js:3630:7)\n    at deferred.reject (http://localhost:4004/uimodule/resources/sap/ui/thirdparty/jquery-compat.js:768:12)",
                  "screenshot": "8c80b8d0-7566.png"
                }
              ],
              "screenshot": "8c80b8d0.png",
              "end": "2025-07-07T14:04:48.304Z",
              "report": {
                "skipped": false,
                "todo": false,
                "failed": 1,
                "passed": 0,
                "total": 1,
                "runtime": 7616,
                "source": "    at callQUnit (http://localhost:4004/uimodule/resources/sap/ui/test/opaQunit.js:222:19)\n    at opaTest (http://localhost:4004/uimodule/resources/sap/ui/test/opaQunit.js:107:3)\n    at http://localhost:4004/uimodule/test/integration/HelloJourney.qunit.js:10:3\n    at onSuccess (http://localhost:4004/uimodule/resources/ui5loader.js:2018:29)"
              }
            }
          ]
        }
      ],
      "end": "2025-07-07T14:04:48.635Z",
      "report": {
        "passed": 0,
        "failed": 1,
        "total": 1,
        "runtime": 7617
      }
    },
    "http://localhost:4004/uimodule/test/Test.qunit.html?testsuite=test-resources/uimodule/testsuite.qunit&test=unit/unitTests": {
      "id": "_8rpQD2yjcE",
      "start": "2025-07-07T14:04:44.254Z",
      "isOpa": false,
      "failed": 0,
      "passed": 1,
      "count": 1,
      "modules": [
        {
          "name": "Sample Main controller test",
          "tests": [
            {
              "name": "The Main controller class has a onFlyToProduct method",
              "testId": "a8e14df1",
              "skip": false,
              "start": "2025-07-07T14:04:44.266Z",
              "logs": [
                {
                  "result": true,
                  "actual": "function",
                  "expected": "function",
                  "negative": false,
                  "runtime": 0,
                  "todo": false
                }
              ],
              "end": "2025-07-07T14:04:44.268Z",
              "report": {
                "skipped": false,
                "todo": false,
                "failed": 0,
                "passed": 1,
                "total": 1,
                "runtime": 1,
                "source": "    at http://localhost:4004/uimodule/test/unit/controller/Main.qunit.js:9:9\n    at onSuccess (http://localhost:4004/uimodule/resources/ui5loader.js:2018:29)"
              }
            }
          ]
        }
      ],
      "end": "2025-07-07T14:04:44.574Z",
      "report": {
        "passed": 1,
        "failed": 0,
        "total": 1,
        "runtime": 2
      }
    }
  },
  "end": "2025-07-07T14:04:48.845Z",
  "testPageHashes": [
    "ONsKiu9CuRE",
    "_8rpQD2yjcE"
  ]
}