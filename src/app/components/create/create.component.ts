/**
 * Class Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { Component } from '@angular/core';

import { Firebase } from '../../services/firebase/firebase.service';
declare const ace: any;

@Component({
	selector: 'create',
	templateUrl: 'app/components/create/create.component.html',
	styleUrls: ['app/components/create/create.css']
})
export class Create {
	title: string = '';
	content: string = '';
	showPreview: boolean = false;
	preview: any;

	constructor(public fire: Firebase) {
	}

	ngOnInit() {
		let editor = ace.edit('editor');
		let options = {
			showLineNumbers: false,
			highlightActiveLine: false,
			showGutter: false,
			showPrintMargin: false,
			fontSize: 18
		};
		editor.setOptions(options);
		// editor.setTheme("ace/theme/monokai");
		// editor.getSession().setMode("ace/mode/javascript");
	}

	previewPost() {
		if (!this.validatePost()) {
			// TODO Fehlermeldung in der Oberfläche #ULTRABOCK
			return null;
		}

		let post = this.createPost();

		this.preview = post;
		this.showPreview = true;
	}

	submitPost() {
		if (!this.validatePost()) {
			// TODO Fehlermeldung in der Oberfläche #ULTRABOCK
			return null;
		}

		let post = this.createPost();
		this.fire.writePost(post);
		return post;
	}

	createPost() {
		let userid = '420';
		let username = 'Hans Grünbach';
		let creationTime = new Date().getTime();

		let post = {
			authorid: userid,
			author: username,
			title: this.title,
			content: this.content,
			created: creationTime,
			id: `${userid}-${creationTime}`
		};

		return post;
	}

	validatePost() {
		if (this.title == "" || this.content == "") {
			return false;
		}
		return true;
	}
}
