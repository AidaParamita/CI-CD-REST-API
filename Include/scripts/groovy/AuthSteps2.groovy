import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class AuthSteps2 {

	@Given("I set endpoint register")
	def setEndpointRegis() {
		println("\n set endpoint register")
	}

	@Given("I set endpoint login")
	def setEndpointLogin() {
		println("\n set endpoint login")
	}

	@Given("I set endpoint get user information")
	def setEndpointGetUserInformation() {
		println("\n set endpoint get user information")
	}

	@Given("I set endpoint post user information")
	def setEndpointPostUserInformation() {
		println("\n set endpoint post user information")
	}

	@When("I input HTTP Body")
	def inputHttpBody() {
		println("\n input http body")
	}

	@And("I send endpoint")
	def sendEndpoint(){
		println("\n send endpoint")
		// positive auth
		response = WS.sendRequest(findTestObject('Object Repository/Auth/POST - Registrasi/TCRegistrasi_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Auth/POST - Login/TCLogin_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Auth/GET - User Information/TCGet_User_Information_01'))

		//negative auth
		response = WS.sendRequest(findTestObject('Object Repository/Auth/POST - Registrasi/TCRegistrasi_02'))
		response = WS.sendRequest(findTestObject('Object Repository/Auth/POST - Login/TCLogin_04'))
		response = WS.sendRequest(findTestObject('Object Repository/Auth/GET - User Information/TCGet_User_Information_03'))

		// positive orders
		response = WS.sendRequest(findTestObject('Object Repository/Orders/POST Create a Catagory/TCCreate_New_Order_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Orders/GET All Orders/TCGet_All_Order_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Orders/GET Order By ID/TCGet_Order_By_ID_01'))

		// positive products categories
		response = WS.sendRequest(findTestObject('Object Repository/Products_Categories/POST Create a Category/TCCreate_a_Category_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products_Categories/GET All Categories/TCGet_All_Categories_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products_Categories/GET Category By ID/TCGet_Categories_By_ID_01'))

		// positive products
		response = WS.sendRequest(findTestObject('Object Repository/Products/POST Assign a Product Rating/TCAssign_Product_Rating_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/POST Create a Comment for Products/TCCreate_a_Comment_for_Product_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/POST Create a New Product/TCCrate_a_New_Product_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/DELETE a product/TCDelete_a_Product_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/GET All Product/TCGet_All_Product_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/GET product By ID/TCGet_Product_By_ID_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/GET Product Comments/TCGet_Product_Comment_01'))
		response = WS.sendRequest(findTestObject('Object Repository/Products/GET Product Ratings/TCGet_Product_Ratings_01'))
	}

	@Then("I receive status code 200")
	def recStatusCode200() {
		println("\n receive status code 200")
		WS.verifyResponseStatusCode(response, 200)
		WS.verifyElementPropertyValue(response, 'data', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJGdWxsbmFtZSI6IlN0ZXZlIFNhamEiLCJFbWFpbCI6InN0ZXZlQGdtYWlsLmNvbSJ9.q2J6il5d0nF3Av5cRCo1FLRrpQaL3HBSUdm0OKaNhmU")
	}


	@Then("I receive status code 400")
	def recStatusCode400() {
		println("\n receive status code 200")
		WS.verifyResponseStatusCode(response, 400)
	}
}