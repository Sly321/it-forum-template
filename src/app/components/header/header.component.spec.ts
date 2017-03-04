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
	let de: DebugElement;
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

	it('header should link to the startpage', () => {
		de = fixture.debugElement.query(By.css('.header-container > ul > li > a'));
		fixture.detectChanges();
		const a = de.nativeElement;
		expect(a.innerText).toMatch(/Startpage/i, '.header-container > ul > li > a should link to "Startpage"');
	});
});
