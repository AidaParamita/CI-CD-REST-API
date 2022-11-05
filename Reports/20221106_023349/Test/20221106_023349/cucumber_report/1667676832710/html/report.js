$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature");
formatter.feature({
  "name": "Auth",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.scenario({
  "name": "user register with correct data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint register",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointRegis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input HTTP Body",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.inputHttpBody()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode200()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user register without fill password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint register",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointRegis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input HTTP Body",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.inputHttpBody()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode400()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user login with correct data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint login",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode200()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user login without fill password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint login",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode400()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user want to get user information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint get user information",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointGetUserInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode200()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user want to get user information with method post",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Auth"
    }
  ]
});
formatter.step({
  "name": "I set endpoint post user information",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps2.setEndpointPostUserInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps2.sendEndpoint()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: response for class: AuthSteps2\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:66)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.setGroovyObjectProperty(ScriptBytecodeAdapter.java:547)\r\n\tat AuthSteps2.sendEndpoint(AuthSteps2.groovy:77)\r\n\tat ✽.I send endpoint(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Rest-Api/Include/features/Auth.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I receive status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps2.recStatusCode400()"
});
formatter.result({
  "status": "skipped"
});
});