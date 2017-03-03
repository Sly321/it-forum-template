/**
 * Test Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Landing } from './landing.component';

describe('Landing', () => {
	let de: DebugElement;
	let comp: Landing;
	let fixture: ComponentFixture<Landing>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Landing]
		}).overrideComponent(Landing, {
			set: {
				templateUrl: '/base/src/app/components/landing/landing.component.html',
				styleUrls: ['/base/src/app/components/landing/landing.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Landing);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.landing-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .landing-container text with "heyho"', () => {
		fixture.detectChanges();
		const container = de.nativeElement;
		expect(container.innerText).toMatch(/heyho/i, '<div.landing-container> should say something about "heyho"');
	});
});
