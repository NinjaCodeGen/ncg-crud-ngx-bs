
import { browser, by, element } from 'protractor';
import { AdminView } from '../admin.po';
import { SomeItemListPageObject } from './some-item-list.po';
import { SomeItemItemPageObject } from './some-item-item.po';
import { SomeItem } from '../services/api/models/some-item';
import { ValidationService } from '../common/services/validation.service';
import { E2eHelper } from '../common/e2eHelper';
import * as changeCase from 'change-case';

describe('Some Item Item', () => {
  describe('As a user, I', () => {
    let helper = new E2eHelper();
    let adminView = new AdminView();
    let listPO = new SomeItemListPageObject();
    let itemPO = new SomeItemItemPageObject();
    let listWithCount = require('../services/api/local/SomeItem.json');
    let metaData = require('./some-item.metadata.json');

    const keyName = 'id';
    const keyFilterName = 'Id';

    beforeEach(() => {
      adminView.goToAdminView();
      adminView.goToSomeItemView();
      adminView.toggleSideBar('close');
    });

    it('can add an item', () => {
      listPO.getItemsCount().then((recordCount) => {

        // copy 1st item
        let newItem = JSON.parse(JSON.stringify(listWithCount.value[0]));

        // assign new unique id for the new item
        newItem.id = itemPO.generateUniqueId(listWithCount.value);

        listPO.goToAdd();
        itemPO.createNewItem(newItem);

        listPO.getItemsCount().then((updatedRecordCount) => {
          expect(parseInt(updatedRecordCount)).toEqual(parseInt(recordCount) + 1);
        });
      });
    });

    it('can edit an item', () => {

      // copy first item
      let firstItem = JSON.parse(JSON.stringify(listWithCount.value[0]));
      firstItem[keyName] = listWithCount.value[1][keyName];

      listPO.editItemByIndex(1, firstItem)
        .then((buttons) => {
        Object.keys(firstItem).forEach((key) => {
          itemPO.sendDataToControl(firstItem, key);
        });
        itemPO.submit();
      });

      // filter records, using column label and the record value, to see if there is expected record with the updated data
      // listPO.filter(keyFilterName, firstItem[keyName]);
      expect(listPO.getItemsCount()).toBeGreaterThanOrEqual(1);
      // TODO: see if values copied over
    });

    it('can delete an item from item view', () => {
      // get record count before deleting a record
      listPO.getItemsCount().then((recordCount) => {
        listPO.deleteFirstItemInView();
        listPO.getItemsCount().then((recordCountAfterDeletion) => {
          expect(parseInt(recordCountAfterDeletion)).toEqual(parseInt(recordCount) - 1);
        });
      });
    });

    it('can go back to previous view', () => {
      let urlBeforeAddingNewRecord = browser.getCurrentUrl();
      listPO.goToAdd();

      // click back button and check the url is the same as before
      itemPO.backButton.click();
      expect(browser.getCurrentUrl()).toEqual(urlBeforeAddingNewRecord);
    });

    it('can cancel an action', () => {
      // set up data to be put in new record adding action
      let item = listWithCount.value[0];

      // get record count before adding
      listPO.getItemsCount().then((recordCount) => {
        listPO.goToAdd();

        // fill in all fields with the data
        Object.keys(item).forEach((key) => {
          itemPO.sendDataToControl(item, key);
        });

        itemPO.cancelButton.click();

        // check if record count still remains the same as before
        listPO.getItemsCount().then((updatedRecordCount) => {
          expect(parseInt(updatedRecordCount)).toEqual(parseInt(recordCount));
        });
      });
    });

    // loop and check all validations in meta data file
    it('can see validation messages', () => {
      let valMsg = '';
      let valMsgXPath = '';

      listPO.goToAdd();

      for (let fieldKey in metaData.properties) {
        if (metaData.properties[fieldKey]['x-ncg'].validations) {
          for (let validationType in metaData.properties[fieldKey]['x-ncg'].validations) {
            if (metaData.properties[fieldKey]['x-ncg'].validations[validationType] != null) {
              if (validationType == 'required' && metaData.properties[fieldKey]['x-ncg'].validations[validationType].value == false) {
                break;
              } else {
                itemPO.typeInInvalidData(fieldKey, validationType);
                valMsgXPath = itemPO.getValMsgXPath(fieldKey);
                valMsg = itemPO.getValMsg(fieldKey, validationType);
                expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);
              }
            }
          }
        }
      }
    });
  
    it('can see the required validation message for id field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'id';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for name field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'name';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
  });
});
