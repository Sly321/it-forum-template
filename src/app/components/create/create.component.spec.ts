/**
 * Test Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Create } from './create.component';

describe('Create', () => {
	let de: DebugElement;
	let comp: Create;
	let fixture: ComponentFixture<Create>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Create]
		}).overrideComponent(Create, {
			set: {
				templateUrl: '/base/src/app/components/create/create.component.html',
				styleUrls: ['/base/src/app/components/create/create.css']
			}
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(Create);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.create-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .create-container text to be heyho', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/heyho/i, '.create-container should say something about "heyho"');
	});
});