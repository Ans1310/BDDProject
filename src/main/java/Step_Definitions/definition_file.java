package Step_Definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class definition_file {
	
	public WebDriver driver;
	
	@Given ("^launch the demo automation website$")
	public void lanuchURL(){
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Lnv\\Desktop\\JIRA\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/");
		driver.manage().window().maximize();
		
	}
	@When ("^click the skip sign in button$")
	public void skipsignin(){
		driver.findElement(By.xpath("//button[@id='btn2']")).click();
		
		
	}
	@Then ("^user enters firstname as \"(.*)\"$")
	public void firstname(String firstname){
		driver.findElement(By.xpath("//input[@type='text' and @placeholder='First Name']")).sendKeys(firstname);
		
	}
	@And ("^user enters lastname as \"(.*)\"$")
	public void lastname(String lastname){
		driver.findElement(By.xpath("//input[@type='text' and @placeholder='Last Name'")).sendKeys(lastname);
		
	}
	
	@And ("^user enters email as \"(.*)\"$")
	public void email(String email_address){
		driver.findElement(By.xpath("//input[@type='email' or ng-model='EmailAdress']")).sendKeys(email_address);
		
	}

	@And ("^user enters phone as \"(.*)\"$")
	public void phone(String phone_number){
		driver.findElement(By.xpath("//input[@type='tel' or ng-model='Phone']")).sendKeys(phone_number);
		
	}
	
	@And ("^user enters gender as \"(.*)\"$")
	public void Gender(String gender){
		driver.findElement(By.xpath("//input[@type='radio' and @name='radiooptions' and @value='FeMale']")).sendKeys(gender);
		
	}

	@And ("^user enters country as \"(.*)\"$")
	public void Countryname(String country){
		driver.findElement(By.xpath("//input[@id='checkbox2' and @type='checkbox' and @value='Movies']")).sendKeys(country);
		
	}
	@Then ("^user clicks on submit button$")
	public void click_submit(){
		driver.findElement(By.xpath("//button[@id='submitbtn' and @type='submit']")).click();
		
	}
	@Then ("^Close the browser$")
	public void close_browser(){
		driver.close();
		
		
	}

	
}
