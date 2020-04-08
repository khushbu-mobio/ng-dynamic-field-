import { Before, Given, Then, When } from 'cucumber';

import { AppPage } from '../pages/app.po';
import { element, by, browser } from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on registration page$/, async () => {
  await page.navigateTo();
});

When(/^I Entering valid  Name, Email,Password, Gender, Country,Term & File  click on 'Save' button$/, async () => {
  await page.getHTMLElementByName('name').sendKeys("kshah");
  await page.getHTMLElementByName('email').sendKeys("kshah@gmail.com");
  await page.getHTMLElementByName('password').sendKeys("shah");
  await page.getHTMLElementByName('gender').sendKeys("female");
  await page.getHTMLElementByName('dob').sendKeys("11/11/1999");
  await page.getHTMLElementByName('country').sendKeys("india");
  await page.getHTMLElementByName('term').sendKeys("true");
  await page.getHTMLElementByName('save').click();
});

Then('Registraion Completed Successfully', async () => {
  console.log("Registraion Completed Successfully")
});

Then(/^Back on Registraion$/, async () => {
  await page.navigateTo();
})

Given(/^Go to Registration page and Display Data in Table$/, async () => {
  await page.navigateTo();
  element.all(by.css('td')).getText();
});

When("Click on 'delete' button for deleting record", function () {
  page.getHTMLElementByName('delete').click();
  page.getHTMLElementByTag('td').clear();
});

Then(/^Deleted Record Successfully$/, async () => {
  console.log("Deleted Record Successfully")
});

Then(/^Redirect to Registraion$/, async () => {
  browser.get(browser.baseUrl) as Promise<any>;
})

Given("Go to Registration page and display registration list", function () {
  browser.get(browser.baseUrl) as Promise<any>;
  element.all(by.css('td')).getText();
});

When("Click on 'edit' button for updating details", function () {
  page.getHTMLElementByName('edit').click();
  page.getHTMLElementByName('name').getText();
  page.getHTMLElementByName('email').getText();
  page.getHTMLElementByName('password').getText();
  page.getHTMLElementByName('gender').getText();
  page.getHTMLElementByName('dob').getText();
  page.getHTMLElementByName('country').getText();
  page.getHTMLElementByName('term').getText();
  page.getHTMLElementByName('name').sendKeys("krishna");
  page.getHTMLElementByName('email').sendKeys("kshah@gmail.com");
  page.getHTMLElementByName('password').sendKeys("shah");
  page.getHTMLElementByName('gender').sendKeys("female");
  page.getHTMLElementByName('dob').sendKeys("11/11/1999");
  page.getHTMLElementByName('country').sendKeys("india");
  page.getHTMLElementByName('term').sendKeys("true");
  page.getHTMLElementByName('save').click();
});

Then(/^Update Record Successfully$/, async () => {
  console.log("Update Record Successfully")
});

Then(/^Redirect to registration page$/, async () => {
  page.navigateTo();
})
