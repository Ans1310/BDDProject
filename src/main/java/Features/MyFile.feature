@tst @reg @sanity
Feature: Test the demo automation website

@SIT @reg @test1
Scenario Outline: Enter the data in signup screen

Given launch the demo automation website
When click the skip sign in button
Then user enters firstname as "<firstname>" 
And user enters lastname as "<lastname>" 
And user enters email as "<Email address>" 
And user enters phone as "<Phone>" 
And user enters gender as "<Gender>" 
And user enters country as "<Country>"
Then user clicks on submit button
Then Close the browser


Examples:
|firstname|lastname|Email address|Phone|Gender|Country|
|Anitha   |Vivek   |ans@gmail.com|9790028300|Female|India|
|Mike     |Miller  |mike3212@gmail.com|9790028312|Male|United States|


