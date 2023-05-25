const Page = require('./page');

class Search extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentSearchFilter() { return $('app-client-total-search-got-template'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-search-got-template/div/div[2]/div[6]'); }

  

  async performSearchTemplate() {
    await this.searchForm.click();
    await this.spentSearchTemplate.waitForDisplayed({ timeout: 5000 });
    await this.spentSearchTemplate.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new Search();