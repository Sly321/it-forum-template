/**
 * Class Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				9.3.2017				Created
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
	showPreview: boolean = false;
	message: string = '';
	preview: any;
	editor: any;

	constructor(public fire: Firebase) {
	}

	ngOnInit() {
		this.editor = ace.edit('editor');
		let options = {
			showLineNumbers: false,
			highlightActiveLine: false,
			showGutter: false,
			showPrintMargin: false,
			fontSize: 18
		};
		this.editor.$blockScrolling = Infinity
		this.editor.setOptions(options);
		// editor.setTheme("ace/theme/monokai");
		// editor.getSession().setMode("ace/mode/javascript");
	}

	previewPost() {
		this.showPreview = false;

		if (!this.validatePost()) {
			return null;
		}

		let post = this.createPost();

		this.preview = post;
		this.showPreview = true;
	}

	submitPost() {
		if (!this.validatePost()) {
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
			content: this.getContent(),
			created: creationTime,
			id: `${userid}-${creationTime}`
		};

		return post;
	}

	validatePost() {
		if (this.title === '') {
			this.message = 'asdf';
			return false;
		} else if (this.getContent() === '') {
			this.message = 'tzui';
			return false;
		}
		this.message = '';
		return true;
	}

	getContent() {
		return this.editor.getValue();
	}

	setContent(val) {
		return this.editor.setValue(val);
	}
}
