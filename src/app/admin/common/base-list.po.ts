
import { browser, by, element, ElementHelper, protractor } from 'protractor';
import { E2eHelper } from '../common/e2eHelper';
import { AbstractBaseListPageObject } from './abstract.base-list.po';

export class BaseListPageObject extends AbstractBaseListPageObject {

  // --Elements--
  searchInput = element(by.id('searchInput'));
  filterFieldSelect = element(by.id('filterFieldSelect'));
  filterTypeSelect = element(by.id('filterTypeSelect'));
  filterValueInput = element(by.xpath('//*[@id="searchInput"]/input'));
  recordsPerPageInput = element(by.id('recordsPerPageInput'));
  getButton = element(by.id('getButton'));
  addButton = element(by.id('addButton'));

  firstButton = element(by.linkText('First'));
  previousButton = element(by.linkText('Previous'));
  nextButton = element(by.linkText('Next'));
  lastButton = element(by.linkText('Last'));

  itemsCountLabel = element(by.id('itemsCountLabel'));

  confirmationDialog = element(by.id('confirmationModal'));
  modalCancelButton = this.confirmationDialog.element(by.id('cancelButton'));
  modalOKButton = this.confirmationDialog.element(by.id('okButton'));

  editSelector = by.id('editButton');
  editButton = element(this.editSelector);

  deleteSelector = by.id('deleteButton');
  deleteButton = element(this.deleteSelector);

  currentPageNumberElement = element(by.xpath('//li[contains(@class,"pagination-page page-item active")]/a'));

  getCellText(rowXPathIndex: string, columnIndex: number): any {
    return element(by.xpath(`//tr[${rowXPathIndex}]/td[${columnIndex}]`)).getText();
  }

  getFirstAndLastRecordValues(columnIndex): any {
    return this.getCellText('1', columnIndex).then((value) => {
      let arr = [];
      arr.push(value);
      return this.checkIfNavigationButtonDisabled('Last').then((isDisabled) => {
        if (!isDisabled) {
          this.goToLastPage();
        }

        return this.getCellText('last()', columnIndex).then((value) => {
          arr.push(value);
          return arr;
        });
      });
    });
  }

  sortColumn(columnIndex): void {
    element(by.xpath(`//th[${columnIndex}]`)).click();
  }

  getColumnIndex(columnLabel) {
    return element.all(by.xpath(`//th[.//*/text()[normalize-space(.)="${columnLabel}"]]/preceding-sibling::*`))
      .count()
      .then((count) => count + 1);
  }

  getItemsCount(): any {
    return this.itemsCountLabel.getText();
  }

  checkIfNavigationButtonDisabled(navigationButtonText): any {
    return element(by.xpath('//a[contains(text(),"' + navigationButtonText + '")]/parent::*[contains(@class,"disabled")]'))
      .isPresent().then((isDisabled) => {
        return isDisabled;
      });
  }

  getNumberOfPagesOnScreen(): any {
    return element(by.xpath('//li[contains(@class,"pagination-page page-item")][last()]'));
  }

  // chooseFieldSelect(columnLabel: string) {
  //   // TODO: return element(by.xpath('//*[@id="fieldSelect"]/option[text()="' + columnLabel + '"]'));
  //   element(by.xpath('//*[@id="fieldSelect"]')).click();
  //   element(by.xpath('//md-option[text()="' + columnLabel + '"]')).click();
  // }

  filter(columnLabel: string, searchValue): void {
    // this.chooseFieldSelect(columnLabel);
    // TODO: element(by.xpath('//*[@id="fieldSelect"]/option[text()="' + columnLabel + '"]')).click();
    element(by.xpath('//*[@id="fieldSelect"]')).click();
    // TODO: element(by.xpath('//*[@id="filterType"]/option[text()="="]')).click();
    // element(by.xpath('//md-option[text()="' + columnLabel + '"]')).click();
    element(by.xpath('//*[@id="searchInput"]/input')).clear();
    element(by.xpath('//*[@id="searchInput"]/input')).sendKeys(searchValue);
  }
}
