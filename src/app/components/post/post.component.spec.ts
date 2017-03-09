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
		comp.title = 'test title';
		comp.author = 'test author';
		comp.content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have correct title', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .title'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.title);
	});

	it('should have correct author', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .author'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.author);
	});

	it('should have a creation date', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .created'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.created.toString());
	});

	it('should have content', () => {
		// Vorbereitung
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.post-container > .content'));
		const ele = de.nativeElement;

		// Prüfung
		expect(ele.innerText).toBe(comp.content);
	});
});
