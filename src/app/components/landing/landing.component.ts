/**
 * Class Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { Component } from '@angular/core';

import { Firebase } from '../../services/firebase/firebase.service';

@Component({
	selector: 'landing',
	templateUrl: 'app/components/landing/landing.component.html',
	styleUrls: ['app/components/landing/landing.css']
})
export class Landing {
	searchString: string = '';

	constructor(private fire: Firebase) {/*
		let post: any = {
			authorid: 'uid-123',
			title: 'title',
			content: 'very long string in here with ü ä ö / # + ´ß : - .< and stuff',
			date: new Date(),
			id: '123455'
		};
		this.fire.writePost(post);
		post = {
			authorid: 'uid-123',
			title: 'title',
			content: 'very long string in here with ü ä ö / # + ´ß : - .< and stuff',
			date: new Date(),
			id: '12345'
		};
		this.fire.writePost(post);*/
	}

	ngOnInit() {
		/*
		this.fire.get('posts', (val) => {
			console.log(val);
		});

		this.fire.removePostById('123455', (e: any) => {
			console.log('delete');
			console.log(e);

			this.fire.get('posts', (val) => {
				console.log(val);
			});
		});

		this.fire.removePostById('12345');*/
	}
}
