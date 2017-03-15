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

import '../../resources/lib/ace-builds/src-min/ace.js';
declare const ace: any;

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
		fixture.detectChanges();
		comp.title = 'just a normal title';
		comp.setContent('This is the content of the post <code></code> test test');
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have the same title after post creation as the input has', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.create-container > #title'));
		const ele = de.nativeElement;

		// Ausführung
		let post = comp.createPost();

		// Prüfung
		expect(post.title).toBe(ele.value);
	});

	it('should validate the post', () => {
		// Ausführung
		let validation = comp.validatePost();

		// Prüfung
		expect(validation).toBe(true);
	});

	it('should display post component after preview post', () => {
		// Ausführung
		comp.previewPost();

		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('post'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele).toBeDefined();
	});

	it('should display error message after preview post because of no title', () => {
		// Vorbereitung
		comp.title = "";

		// Ausführung
		comp.previewPost();

		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('#error-message'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele).toBeDefined();
	});

	it('should call firebase write post 1 time', () => {
		// Vorbereitung
		spyOn(comp.fire, 'writePost');

		// Ausführung
		comp.submitPost();

		// Prüfung
		expect(comp.fire.writePost).toHaveBeenCalledTimes(1);
	});

	it('should create a post and save it to the database', () => {
		// Vorbereitung

		// Ausführung
		let post = comp.submitPost();
		let postId = post.id;
		let userId = post.authorid;

		// Prüfung
		comp.fire.getPostsByUserid(userId, (e) => {
			console.log(e); // TODO Prüfung
		});

		// Cleanup
		comp.fire.removePostById(postId, (e) => {
			console.log(e); // TODO Prüfung
		});
	});

	it('should not validate the post because title is empty', () => {
		// Ausführung
		comp.title = "";
		let validation = comp.validatePost();

		// Prüfung
		expect(validation).toBe(false);
	});

	it('should not validate the post because content is empty', () => {
		// Ausführung
		comp.setContent('');
		let validation = comp.validatePost();

		// Prüfung
		expect(validation).toBe(false);
	});
});
