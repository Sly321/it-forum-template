/**
 * Test Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { FormsModule } from '@angular/forms';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Post } from '../post/post.component';
import { Create } from './create.component';
import { Header } from '../header/header.component';

/** Firebase */
import { Firebase } from '../../services/firebase/firebase.service';
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

describe('Create', () => {
	let de: DebugElement;
	let comp: Create;
	let fixture: ComponentFixture<Create>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [Create, Post, Header],
			providers: [Firebase]
		}).overrideComponent(Create, {
			set: {
				templateUrl: '/base/src/app/components/create/create.component.html',
				styleUrls: ['/base/src/app/components/create/create.css']
			}
		}).overrideComponent(Post, {
			set: {
				templateUrl: '/base/src/app/components/post/post.component.html',
				styleUrls: ['/base/src/app/components/post/post.css']
			}
		}).overrideComponent(Header, {
			set: {
				templateUrl: '/base/src/app/components/header/header.component.html',
				styleUrls: ['/base/src/app/components/header/header.css']
			}
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(Create);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.create-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	/*

	it('should have expected .create-container text to be heyho', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/heyho/i, '.create-container should say something about "heyho"');
	});*/
});
