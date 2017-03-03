/**
 * Test Wrapper
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Wrapper } from './wrapper.component';

@Component({
	selector: 'router-outlet',
	template: '<h1>mockingjay</h1>'
})
class Mock { }

class MockRouter { public navigate() { }; }
export const routes = [
	{ path: '', component: Mock },
	{ path: '**', component: Mock },
];

describe('Wrapper', () => {
	let de: DebugElement;
	let comp: Wrapper;
	let fixture: ComponentFixture<Wrapper>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Wrapper, Mock],
		}).overrideComponent(Wrapper, {
			set: {
				templateUrl: '/base/src/app/components/wrapper/wrapper.component.html',
				styleUrls: ['/base/src/app/components/wrapper/wrapper.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Wrapper);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('router-outlet'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected router-outlet text with "mockingjay"', () => {
		fixture.detectChanges();
		const container = de.nativeElement;
		expect(container.innerText).toMatch(/mockingjay/i, '<router-outlet> should say something about "mockingjay"');
	});
});
