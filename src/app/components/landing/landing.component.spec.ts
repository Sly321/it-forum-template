/**
 * Test Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				3.3.2017				Created
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
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('HtmlElement Should be Startpage link in the left header menu', () => {
		// Vorbereitung
		let cssQuery = 'header';
		de = fixture.debugElement.query(By.css(cssQuery));
		fixture.detectChanges();
		const element = de.nativeElement;

		// Ausführung
		let msg = 'Startpage should import header';

		// Prüfung
		expect(element.innerText).toBeDefined();
	});
});
