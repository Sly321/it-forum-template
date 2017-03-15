/**
 * Test View
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				15.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { View } from './view.component';
import { Header } from '../header/header.component';

import { ActivatedRoute, Data } from '@angular/router';

describe('View', () => {
	let de: DebugElement;
	let comp: View;
	let fixture: ComponentFixture<View>;
	const ID: number = 1235;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [View],
			providers: [{
				provide: ActivatedRoute,
				useValue: {
					params: {
						subscribe: (fn: (value: Data) => void) => fn({
							id: ID
						})
					}
				}
			},]
		}).overrideComponent(View, {
			set: {
				templateUrl: '/base/src/app/components/view/view.component.html',
				styleUrls: ['/base/src/app/components/view/view.css']
			}
		}).overrideComponent(Header, {
			set: {
				templateUrl: '/base/src/app/components/header/header.component.html',
				styleUrls: ['/base/src/app/components/header/header.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(View);
		comp = fixture.componentInstance;
	});

	it('should create component', () => expect(comp).toBeDefined());

	it(`should have expected .view-container text to be ${ID}`, () => {
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.view-container'));
		const ele = de.nativeElement;
		expect(ele.innerText).toBe(ID.toString(), `.view-container should contain ${ID}`);
	});
});
