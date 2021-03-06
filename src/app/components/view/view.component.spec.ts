/**
 * Test View
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				15.3.2017				Created
 */

import { FormsModule } from '@angular/forms';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';

import { Post } from '../post/post.component';
import { Article } from '../post/post.model';
import { View } from './view.component';
import { Header } from '../header/header.component';

import { ActivatedRoute, Data } from '@angular/router';

/** Firebase */
import { Firebase } from '../../services/firebase/firebase.service';

describe('View', () => {
	let de: DebugElement;
	let comp: View;
	let fixture: ComponentFixture<View>;
	const ID = '12345';

	beforeAll(() => {
		let post = new Article('test-author-id', 'test-username', 'test-content', new Date().getTime(), ID, 'test title');
		Firebase.prototype.writePost(post);
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [View, Header, Post],
			providers: [{
				provide: ActivatedRoute,
				useValue: {
					params: {
						subscribe: (fn: (value: Data) => void) => fn({
							id: ID
						})
					}
				}
			}, Firebase]
		}).overrideComponent(View, {
			set: {
				templateUrl: '/base/src/app/components/view/view.component.html',
				styleUrls: ['/base/src/app/components/view/view.css']
			}
		}).overrideComponent(Header, {
			set: {
				templateUrl: '/base/src/app/components/header/header.component.html',
				styleUrls: ['/base/src/app/components/header/header.css']
			}
		}).overrideComponent(Post, {
			set: {
				templateUrl: '/base/src/app/components/post/post.component.html',
				styleUrls: ['/base/src/app/components/post/post.css']
			}
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(View);
		comp = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create component', () => expect(comp).toBeDefined());

	it(`should display a html`, () => {
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.view-container'));
		const ele = de.nativeElement;
		expect(ele).toBeDefined();
	});

	it(`should get a post`, (done) => {
		fixture.detectChanges();
		setTimeout(() => {
			expect(comp.showPost()).toBe(true);
			done();
		}, 1000);
	});

	afterEach(() => {
	});

	afterAll(() => {
		Firebase.prototype.removePostById(ID);
	});
});
