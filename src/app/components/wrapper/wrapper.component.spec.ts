/**
 * Test Wrapper
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Wrapper } from ':/wrapper/wrapper.component}';

describe('Wrapper', () => {
	let de: DebugElement;
	let comp: Wrapper;
	let fixture: ComponentFixture;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Wrapper]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Wrapper);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('h1'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected <h1> text', () => {
		fixture.detectChanges();
		const h1 = de.nativeElement;
		expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
	});
});