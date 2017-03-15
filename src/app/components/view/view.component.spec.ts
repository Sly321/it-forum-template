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

import { ActivatedRoute, Data } from '@angular/router';

describe('View', () => {
	let de: DebugElement;
	let comp: View;
	let fixture: ComponentFixture<View>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [View],
			providers: [{
				provide: ActivatedRoute,
				useValue: {
					params: {
						subscribe: (fn: (value: Data) => void) => fn({
							id: 3
						})
					}
				}
			},]
		}).overrideComponent(View, {
			set: {
				templateUrl: '/base/src/app/components/view/view.component.html',
				styleUrls: ['/base/src/app/components/view/view.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(View);
		comp = fixture.componentInstance;
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .view-container text to be 3', () => {
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.view-container'));
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/3/i, '.view-container should contain 3');
	});
});
