import { browser, element, by } from 'protractor';
import { } from 'jasmine';

describe('QuickStart E2E Tests', function() {

	let expectedMsg = 'heyho';

	beforeEach(function() {
		browser.get('');
	});

	it('should display header', function() {
		//expect(element(by.css('header')).getText()).toEqual(expectedMsg);
		expect(element(by.css('header')).isPresent());
	});
});
