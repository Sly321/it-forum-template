/**
 * Test PageNotFound
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { PageNotFound } from './pagenotfound.component';

describe('PageNotFound', () => {
	let de: DebugElement;
	let comp: PageNotFound;
	let fixture: ComponentFixture<PageNotFound>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PageNotFound]
		}).overrideComponent(PageNotFound, {
			set: {
				templateUrl: '/base/src/app/components/pagenotfound/pagenotfound.component.html',
				styleUrls: ['/base/src/app/components/pagenotfound/pagenotfound.css']
			}
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PageNotFound);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.pagenotfound-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .pagenotfound-container text to be 404', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/404/i, '.pagenotfound-container should say something about "404"');
	});
});
