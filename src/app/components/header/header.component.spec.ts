/**
 * Test Header
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				4.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Header } from './header.component';

describe('Header', () => {
	let de: DebugElement[];
	let comp: Header;
	let fixture: ComponentFixture<Header>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Header]
		}).overrideComponent(Header, {
			set: {
				templateUrl: '/base/src/app/components/header/header.component.html',
				styleUrls: ['/base/src/app/components/header/header.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Header);
		comp = fixture.componentInstance;
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('HtmlElement Should link to Startpage in the left header menu', () => {
		// Vorbereitung
		let cssQuery = '.header-container > .left-menu > li > a';
		de = fixture.debugElement.queryAll(By.css(cssQuery));
		console.log(de);
		fixture.detectChanges();
		const element = de[0].nativeElement;
		console.log(element);
		// Ausführung
		let expected = /Startpage/i;
		let msg = 'Header should link to the startpage';

		// Prüfung
		expect(element.innerText).toMatch(expected, msg);
	});

	it('HtmlElement Should link to Beiträge in the left header menu', () => {
		// Vorbereitung
		let cssQuery = '.header-container > .left-menu > li > a';
		de = fixture.debugElement.queryAll(By.css(cssQuery));
		console.log(de);
		fixture.detectChanges();
		const element = de[1].nativeElement;
		console.log(element);
		// Ausführung
		let expected = /Beiträge/i;
		let msg = 'Header should link to Beträge';

		// Prüfung
		expect(element.innerText).toMatch(expected, msg);
	});

	it('HtmlElement Should link to Login in the right header menu', () => {
		// Vorbereitung
		let cssQuery = '.header-container > .right-menu > li > a';
		de = fixture.debugElement.queryAll(By.css(cssQuery));
		fixture.detectChanges();
		const element = de[0].nativeElement;

		// Ausführung
		let expected = /Login/i;
		let msg = 'Header should link to the login';

		// Prüfung
		expect(element.innerText).toMatch(expected, msg);
	});

	it('HtmlElement Should link to Login in the right header menu', () => {
		// Vorbereitung
		let cssQuery = '.header-container > .right-menu > li > a';
		de = fixture.debugElement.queryAll(By.css(cssQuery));
		fixture.detectChanges();
		const element = de[1].nativeElement;

		// Ausführung
		let expected = /Logout/i;
		let msg = 'Header should link to the Logout';

		// Prüfung
		expect(element.innerText).toMatch(expected, msg);
	});
});
