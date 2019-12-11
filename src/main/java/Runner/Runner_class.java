package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		format = {"pretty","html:report/html","json:report/json/cucumber.json"},
		tags = {"@SIT"},
		features = "src/main/java/Features",
		glue = {"Step_Definitions"}
		)


public class Runner_class extends AbstractTestNGCucumberTests{

}
