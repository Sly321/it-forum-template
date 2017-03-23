/**
 * Test Comment
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				23.3.2017				Created
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { Comment } from './comment.component';

describe('Comment', () => {
	let de: DebugElement;
	let comp: Comment;
	let fixture: ComponentFixture<Comment>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Comment]
		}).overrideComponent(Comment, {
			set: {
				templateUrl: '/base/src/app/components/comment/comment.component.html',
				styleUrls: ['/base/src/app/components/comment/comment.css']
			}
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(Comment);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.comment-container'));
	});

	it('should create component', () => expect(comp).toBeDefined());

	it('should have expected .comment-container text to be heyho', () => {
		fixture.detectChanges();
		const ele = de.nativeElement;
		expect(ele.innerText).toMatch(/heyho/i, '.comment-container should say something about "heyho"');
	});
});
