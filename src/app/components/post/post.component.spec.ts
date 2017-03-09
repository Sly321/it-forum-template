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
		de = fixture.debugElement.query(By.css('.post-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .post-container text to be heyho', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/heyho/i, '.post-container should say something about "heyho"');
	});
});