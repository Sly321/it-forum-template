/**
 * Test Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				3.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Firebase } from '../../services/firebase/firebase.service';
import { } from 'jasmine';

import { Landing } from './landing.component';

/** Firebase */
import '../../resources/lib/firebase/firebase.js';
declare const firebase: any;

/** Firebase Config */
const firebaseConfig = {
	apiKey: 'AIzaSyCI0e6cf2Ybrs6yZ-98HrsCLMqmpu4kp1g',
	authDomain: 'it-forum-da016.firebaseapp.com',
	databaseURL: 'https://it-forum-da016.firebaseio.com',
	storageBucket: 'it-forum-da016.appspot.com',
	messagingSenderId: '344282004742'
};

firebase.initializeApp(firebaseConfig);

describe('Landing', () => {
	let de: DebugElement;
	let comp: Landing;
	let fixture: ComponentFixture<Landing>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Landing],
			providers: [Firebase]
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

		// Prüfung
		expect(element.innerText).toBeDefined();
	});
});
