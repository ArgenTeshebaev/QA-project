const Page = require('./page');

class SearchFormPage extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentSearchFilter() { return $('app-client-total-search-spent-template'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-search-spent-template/div/div[2]/div[3]'); }

  

  async performSpentSearchFilter() {
    await this.searchForm.click();
    await this.spentSearchFilter.waitForDisplayed({ timeout: 5000 });
    await this.spentSearchFilter.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new SearchFormPage();