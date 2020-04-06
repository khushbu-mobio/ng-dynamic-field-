import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});
Given(/^^I am on registration page$/, async () => {
    await page.navigateTo();
  });
  
  When(/^I Entering valid  Name, Email,Password, Gender, Country,Term & File  click on 'Save' button$/, async () => {
    await page.getHTMLElementByName('name').sendKeys("kshah");
        await page.getHTMLElementByName('email').sendKeys("kshah@gmail.com");
        await page.getHTMLElementByName('password').sendKeys("shah");
        await page.getHTMLElementByName('gender').sendKeys("shah");
        await page.getHTMLElementByName('dob').sendKeys("11/11/1999");
        await page.getHTMLElementByName('country').sendKeys("india");
        await page.getHTMLElementByName('term').sendKeys("true");
        // await page.getHTMLElementByName('file').sendKeys("C:\fakepath\Screenshot from 2020-02-14 14-04-14.png");
        await page.getHTMLElementByName('save').click();
  });
  
  Then(/^go the home page$/, async () => {
    await page.navigateTo();
    // expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
  });
// Given(/^I am on registration page$/, async () => {
//     await page.navigateTo();
// })

// When(/^I Entering valid  Name, Email,Password, Gender, Country,Term & File  click on 'Save' button$/, async () => {
//     await page.getHTMLElementByName('name').sendKeys("kshah");
//     await page.getHTMLElementByName('email').sendKeys("kshah@gmail.com");
//     await page.getHTMLElementByName('password').sendKeys("shah");
//     await page.getHTMLElementByName('gender').sendKeys("shah");
//     await page.getHTMLElementByName('dob').sendKeys("shah");
//     await page.getHTMLElementByName('country').sendKeys("shah");
//     await page.getHTMLElementByName('term').sendKeys("shah");
//     await page.getHTMLElementByName('file').sendKeys("shah");
//     await page.getHTMLElementByName('save').click();
// });