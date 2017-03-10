/**
 * Test Post
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Post } from './post.component';

describe('Post', () => {
	let de: DebugElement;
	let comp: Post;
	let fixture: ComponentFixture<Post>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Post]
		}).overrideComponent(Post, {
			set: {
				templateUrl: '/base/src/app/components/post/post.component.html',
				styleUrls: ['/base/src/app/components/post/post.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Post);
		comp = fixture.componentInstance;
		comp.post = {
			title: 'test title',
			author: 'test author',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ...',
			created: new Date()
		}
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have correct title', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .title'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.post.title);
	});

	it('should have correct author', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .author'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.post.author);
	});

	it('should have a creation date', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .created'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.post.created.toString());
	});

	it('should have content', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .content'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.post.content);
	});
});
