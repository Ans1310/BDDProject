$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyFile.feature");
formatter.feature({
  "line": 2,
  "name": "Test the demo automation website",
  "description": "",
  "id": "test-the-demo-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tst"
    },
    {
      "line": 1,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Enter the data in signup screen",
  "description": "",
  "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SIT"
    },
    {
      "line": 4,
      "name": "@reg"
    },
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "launch the demo automation website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click the skip sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters firstname as \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters lastname as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters email as \"\u003cEmail address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters country as \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "Email address",
        "Phone",
        "Gender",
        "Country"
      ],
      "line": 19,
      "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;;1"
    },
    {
      "cells": [
        "Anitha",
        "Vivek",
        "ans@gmail.com",
        "9790028300",
        "Female",
        "India"
      ],
      "line": 20,
      "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;;2"
    },
    {
      "cells": [
        "Mike",
        "Miller",
        "mike3212@gmail.com",
        "9790028312",
        "Male",
        "United States"
      ],
      "line": 21,
      "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Enter the data in signup screen",
  "description": "",
  "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SIT"
    },
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "launch the demo automation website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click the skip sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters firstname as \"Anitha\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters lastname as \"Vivek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters email as \"ans@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters phone as \"9790028300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters gender as \"Female\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters country as \"India\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "definition_file.lanuchURL()"
});
formatter.result({
  "duration": 8381743900,
  "status": "passed"
});
formatter.match({
  "location": "definition_file.skipsignin()"
});
formatter.result({
  "duration": 4223300700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anitha",
      "offset": 26
    }
  ],
  "location": "definition_file.firstname(String)"
});
formatter.result({
  "duration": 190197700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vivek",
      "offset": 25
    }
  ],
  "location": "definition_file.lastname(String)"
});
formatter.result({
  "duration": 43181000,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //input[@type\u003d\u0027text\u0027 and @placeholder\u003d\u0027Last Name\u0027 because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//input[@type\u003d\u0027text\u0027 and @placeholder\u003d\u0027Last Name\u0027\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KHDTG3P\u0027, ip: \u0027192.168.1.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Lnv\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:57913}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1d9c8dbb16ebc3939f7fc38c7589d68b\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027text\u0027 and @placeholder\u003d\u0027Last Name\u0027}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Step_Definitions.definition_file.lastname(definition_file.java:38)\r\n\tat ✽.And user enters lastname as \"Vivek\"(MyFile.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ans@gmail.com",
      "offset": 22
    }
  ],
  "location": "definition_file.email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9790028300",
      "offset": 22
    }
  ],
  "location": "definition_file.phone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 23
    }
  ],
  "location": "definition_file.Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 24
    }
  ],
  "location": "definition_file.Countryname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "definition_file.click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "definition_file.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Enter the data in signup screen",
  "description": "",
  "id": "test-the-demo-automation-website;enter-the-data-in-signup-screen;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SIT"
    },
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "launch the demo automation website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click the skip sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters firstname as \"Mike\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters lastname as \"Miller\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters email as \"mike3212@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters phone as \"9790028312\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters gender as \"Male\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters country as \"United States\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "definition_file.lanuchURL()"
});
formatter.result({
  "duration": 5960943500,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KHDTG3P\u0027, ip: \u0027192.168.1.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0105A903+1550595]\n\tOrdinal0 [0x00FDA701+1025793]\n\tOrdinal0 [0x00F5C58E+509326]\n\tOrdinal0 [0x00F562C2+484034]\n\tOrdinal0 [0x00F5699B+485787]\n\tOrdinal0 [0x00F57B05+490245]\n\tOrdinal0 [0x00F53A85+473733]\n\tOrdinal0 [0x00F5D330+512816]\n\tOrdinal0 [0x00F0B649+177737]\n\tOrdinal0 [0x00F0A8ED+174317]\n\tOrdinal0 [0x00F08CDB+167131]\n\tOrdinal0 [0x00EF144A+70730]\n\tOrdinal0 [0x00EF24D0+74960]\n\tOrdinal0 [0x00EF2469+74857]\n\tOrdinal0 [0x00FF42C7+1131207]\n\tGetHandleVerifier [0x010F70FD+523789]\n\tGetHandleVerifier [0x010F6E90+523168]\n\tGetHandleVerifier [0x010FE1E7+552695]\n\tGetHandleVerifier [0x010F78FA+525834]\n\tOrdinal0 [0x00FEB7FC+1095676]\n\tOrdinal0 [0x00FF633B+1139515]\n\tOrdinal0 [0x00FF64A3+1139875]\n\tOrdinal0 [0x00FF5425+1135653]\n\tBaseThreadInitThunk [0x759F0419+25]\n\tRtlGetAppContainerNamedObjectPath [0x7760662D+237]\n\tRtlGetAppContainerNamedObjectPath [0x776065FD+189]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Step_Definitions.definition_file.lanuchURL(definition_file.java:20)\r\n\tat ✽.Given launch the demo automation website(MyFile.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "definition_file.skipsignin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mike",
      "offset": 26
    }
  ],
  "location": "definition_file.firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Miller",
      "offset": 25
    }
  ],
  "location": "definition_file.lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mike3212@gmail.com",
      "offset": 22
    }
  ],
  "location": "definition_file.email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9790028312",
      "offset": 22
    }
  ],
  "location": "definition_file.phone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 23
    }
  ],
  "location": "definition_file.Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 24
    }
  ],
  "location": "definition_file.Countryname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "definition_file.click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "definition_file.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});