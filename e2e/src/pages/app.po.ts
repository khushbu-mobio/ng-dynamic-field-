import { browser, by, element, promise, ElementFinder } from 'protractor';

export class AppPage {

  /**
   * navigate to baseurl
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * Get table data
  */
  getTableData() {
    return element.all(by.css('td')).getText() as Promise<string>;
  }

  /**
   * Get HTML element by `name`
   */
  getHTMLElementByName(name): ElementFinder {
    return element(by.name(name));
  }

  /**
  * Get HTML element by `id`
  */
  getHTMLElementById(id): ElementFinder {
    return element(by.id(id));
  }

  /**
 * Get HTML element by `tag`
 */
  getHTMLElementByTag(tag): ElementFinder {
    return element(by.tagName(tag));
  }

}