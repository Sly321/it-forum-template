/**
 * Class Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { Component } from '@angular/core';

import { Firebase } from '../../services/firebase/firebase.service';

@Component({
	selector: 'create',
	templateUrl: 'app/components/create/create.component.html',
	styleUrls: ['app/components/create/create.css']
})
export class Create {
	title: string = '';
	content: string = '';

	constructor(private fire: Firebase) {
	}

	ngOnInit() {
	}

	submitPost() {
		if (!this.validatePost()) {
			// TODO Fehlermeldung in der Oberfläche #ULTRABOCK
			return null;
		}

		let post = this.createPost();

		let res = this.fire.writePost(post);

		console.log(res);
	}

	createPost() {
		let userid = '420';
		let creationTime = new Date().getTime();

		let post = {
			authorid: userid,
			title: this.title,
			content: this.content,
			date: creationTime,
			id: `${userid}-${creationTime}`
		};

		console.log(post);
		return post;
	}

	validatePost() {
		return true;
	}
}
