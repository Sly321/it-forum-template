import { browser, element, by } from 'protractor';
import { } from 'jasmine';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'heyho';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('.landing-container')).getText()).toEqual(expectedMsg);
  });

});
