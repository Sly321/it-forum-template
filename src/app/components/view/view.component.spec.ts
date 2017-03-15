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

describe('View', () => {
	let de: DebugElement;
	let comp: View;
	let fixture: ComponentFixture<View>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [View]
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
		de = fixture.debugElement.query(By.css('.view-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .view-container text to be heyho', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/heyho/i, '.view-container should say something about "heyho"');
	});
});
