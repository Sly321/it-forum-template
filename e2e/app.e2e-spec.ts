import { browser, element, by } from 'protractor';
import { } from 'jasmine';

describe('QuickStart E2E Tests', function() {

	let expectedMsg = 'heyho';

	beforeEach(function() {
		browser.get('');
	});

	it('should display header', function() {
		browser.ignoreSynchronization = true;
		expect(element(by.css('header')).isPresent());
	});
});
